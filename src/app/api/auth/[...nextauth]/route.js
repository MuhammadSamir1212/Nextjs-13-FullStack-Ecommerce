import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import connnectMongo from "@/utils/db";
import { verifyPassword } from "@/utils/auth";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  // All of this is just to add user information to be accessible for our app in the token/session
  callbacks: {
    async jwt({ token }) {
      token.isAdmin = true;
      return token;
    },
    // We can pass in additional information from the user document MongoDB returns
    // This could be avatars, role, display name, etc...
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      if (user?.avatar) token.avatar = user.avatar;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      if (token?.avatar) session.user.avatar = token.avatar;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        //conset db
        await connnectMongo();

        try {
          // email and password credential
          const { email, password } = credentials;

          // find the user by email
          const user = await User.findOne({
            email: email,
          });

          if (!user) {
            throw new Error("No user found!");
          }

          // compair the hashed password
          const isValid = await verifyPassword(password, user.password);

          if (!isValid) {
            throw new Error("Could not log you in!");
          }

          // return the user
          if (user && isValid) {
            return user;
          }
          throw new Error("Invalid email or password");
        } catch (error) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  database: process.env.MONGODB_URI,
});

export { handler as GET, handler as POST };
