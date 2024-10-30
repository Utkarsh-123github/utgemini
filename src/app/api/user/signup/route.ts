import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import {z} from 'zod'


const userSchema = z.object({
    email : z.string().email(),
    password : z.string().min(6, "Password must be atleast 6 characters long")
})
export const POST = async(req : NextRequest)=>{
    try {
        const body = await(req.json());
        const {email,password} = userSchema.parse(body);
        // check if email already exists
        const emailAlreadyExists = await db.user.findUnique({
            where : {
                email : email
            }
        })
        if(emailAlreadyExists){
            return NextResponse.json({user : null , message : "User already exists"},{status : 409});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await db.user.create({
            data : {
                email : email,
                password : hashedPassword
            }
        })

        const {password : newUserPassword, ...rest } = newUser;

        return NextResponse.json({user : rest , message : "User created successfully"},{status : 201});

    } catch (error : any) {
        return NextResponse.json({message : "Something went wrong"},{status : 500});
    }
}