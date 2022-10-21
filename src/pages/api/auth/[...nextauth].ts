import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "lib/mongodb"
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  secret: process.env.JWT_SECRET,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,      
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        },
      },
    }),
    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) { // User object only passed on initial JWT creation
        // @ts-ignore
        token.roles = user.roles ? user.roles : []
      }
      return token
    },
    session: async ({ session, token }) => {
      // Send properties to the client, like an access_token from a provider.
        // @ts-ignore
      session.user.roles = token.roles
      return session
    }
  }
}
export default NextAuth(authOptions)