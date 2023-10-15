import NextAuth, { AuthOptions } from 'next-auth'

export const authOptions: AuthOptions = {
  providers: [],
  session: { strategy: 'jwt' }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
