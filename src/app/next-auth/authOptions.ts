import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { jwtDecode } from 'jwt-decode';

export const authOptions: NextAuthOptions = {
  providers: [
    // Add your authentication providers here
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Implement your authentication logic here
        try {
          const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
            method: 'POST',
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { 'Content-Type': 'application/json' },
          });
          const result = await res.json();
          if (!res.ok) {
            throw new Error(result.message);
          }
                    console.log('resulttttttttttt', result);
          const jwt: { id: string } = jwtDecode(result.token);
          return {
            id: jwt.id,
            name: result.user.name,
            email: result.user.email,
            role: result.user.role,
            accessToken: result.token,
          };
        } catch (err) {
          throw new Error((err as Error).message);
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.routeToken = user.accessToken;
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  // NEXTAUTH_SECRET
  secret: process.env.NEXTAUTH_SECRET,
};
