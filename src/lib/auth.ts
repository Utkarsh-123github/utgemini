import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import  CredentialsProvider  from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from './prisma';
import { compare } from 'bcryptjs';
export const authOptions : NextAuthOptions = {
    // Add Providers here
    adapter : PrismaAdapter(db),
    
    pages : {
        signIn : '/signin'
    },
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "Email", type: "email", placeholder: "abc@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            // Add logic here to look up the user from the credentials supplied
            if(!credentials?.email || !credentials?.password){
                return null
            }
      
            const existingUser = await db.user.findUnique({
                where:{
                    email : credentials.email
                }
            })

            if(!existingUser){
                return null
            }

            const passwordMatch = await compare(credentials.password,existingUser.password)
            if(!passwordMatch){
                return null
            }

            return {
                id : existingUser.id,
                email : existingUser.email
            }
            
          }
        })
      ],
    session : {
        strategy : 'jwt'
    },
    secret: process.env.AUTH_SECRET,
    callbacks : {
        async jwt ({token,user}){
            if(user){
                return {...token}
            }
            return token

        },
        async session({session,token}){
            return {
                ...session,
                user : {
                    ...session.user
                }
            }
            
        }
    }
}