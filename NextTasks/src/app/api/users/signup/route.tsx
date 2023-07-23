import { NextRequest, NextResponse } from "next/server";
import connect from "@/db/db";
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        const user = await User.findOne({ email: email })
        if (user) {
            return NextResponse.json({ error: "user with this email is already exists." })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save();

        return NextResponse.json({
            message: "successfully registered new user",
            success: true
        })
    } catch (error) {
        return NextResponse.json({ error: "Internal server error." })
    }

}