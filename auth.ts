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
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          createdAt: new Date().toISOString().split("T")[0],
        });

        if (
          existingAuthor &&
          (existingAuthor.name !== user.name ||
            existingAuthor.image !== user.image || !existingAuthor.id || !existingAuthor.createdAt)
        ) {
          await writeClient
            .patch(existingAuthor._id)
            .set({
              id: user.id,
              name: user.name,
              image: user.image,
              createdAt: new Date().toISOString().split("T")[0],
            })
            .commit();
        }

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
