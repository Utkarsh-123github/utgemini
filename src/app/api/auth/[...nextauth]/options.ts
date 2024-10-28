import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id : "credentials",
            name : "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials:any):Promise<any>{
                await dbConnect();
                try {
                    const user = await UserModel.findOne({
                        $or: [
                            {email : credentials.identifier.email},
                            {username : credentials.identifier}
                        ]
                    })
                    if(!user){
                        throw new Error("No user found")
                    }
                    if(user.isVerified === false){
                        throw new Error("User not verified")
                    }

                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                    if(!isPasswordCorrect){
                        throw new Error("Password is incorrect")
                    }
                    else{
                        return user
                    }


                } catch (error:any) {
                    throw new Error("Error in authorize function")
                }
            }
        })
    ],
    callbacks : {
        async jwt({token, user}){
            if(user){
                token._id = user._id?.toString()
                token.isVeridied = user.isVerified
                token.username = user.username
            }
            return token
        },
        async session({session, token}){
            if(token){
                session.user._id = token._id?.toString()
                session.user.isVerified = token.isVerified
                session.user.username = token.username
            }
            return session
        }
    },
    pages: {
        signIn : '/signin'
    },
    session : {
        strategy : "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
}