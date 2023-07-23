import { NextRequest, NextResponse } from "next/server";
import connect from "@/db/db";
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


connect();

export async function POST(request: NextRequest) {

    
    try {

        const reqBody = await request.json();
        const { email, password } = reqBody;
        const user = await User.findOne({ email: email })

        if (!user) {
            return NextResponse.json({
                error: "failed to login a user"
            })
        }

        const validPassword = await bcryptjs.compare(password, user.password)

        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password!" })
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })

        const response = NextResponse.json({
            message: "successfully login a user",
            success: true
        })

        response.cookies.set("user", token, {
            httpOnly: true
        })

        return response;

    } catch (error) {
        return NextResponse.json({ error: "some error occured while login a user" })
    }
}