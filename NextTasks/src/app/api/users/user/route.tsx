import { getUserData } from "@/helper/getUserData";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import connect from "@/db/db";

connect();

export async function GET(request: NextRequest) {
    try {
        const user= await getUserData(request);
        if(user.id){
            return NextResponse.json({
                success: true,
                data: user
            })
        }
        else{
            return NextResponse.json({erro:"some error occured!"})
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

