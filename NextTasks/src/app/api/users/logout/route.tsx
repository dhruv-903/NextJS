import { getUserData } from "@/helper/getUserData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const user = getUserData(request);
    if (user.id) {
        try {
            const response = NextResponse.json({
                message: "successfully logout a user",
                success: true
            })
            response.cookies.set('user', '', {
                httpOnly: true,
                expires: new Date(0)
            })

            return response;

        } catch (error: any) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }
    } else {
        return NextResponse.json({ error: "you are alredy logged-out" })
    }

}