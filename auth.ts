import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { client } from "./sanity/lib/client";
import { writeClient } from "./sanity/lib/write-client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      const existingAuthor = await client.fetch(
        `*[_type == "authors" && email == $email][0]`,
        { email: user.email },
      );

      if (!existingAuthor) {
        const createdUser = await writeClient.create({
          _type: "authors",
          name: user.name,
          email: user.email,
          image: user.image,
          createdAt: new Date().toISOString(),
        });

        user.sanityId = createdUser._id;
      } else {
        user.sanityId = existingAuthor._id;
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user?.sanityId) {
        token.sanityId = user.sanityId;
      }
      return token;
    },

    async session({ session, token }) {
      if (token?.sanityId && session.user) {
        session.user.sanityId = token.sanityId;
      }
      return session;
    },
  },
});
