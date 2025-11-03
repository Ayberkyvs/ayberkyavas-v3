import "next-auth";
declare module "next-auth" {
  interface User {
    sanityId?: string;
  }
  interface Session {
    id?: string;
    user: {
      sanityId?: string;
    } & DefaultSession["user"];
  }
}
