import { NextRequest, NextResponse } from "next/server";
import connect from "@/db/db";
import Task from "@/models/taskModel";
import { getUserData } from "@/helper/getUserData";

connect();

export async function POST(request: NextRequest) {
    try {
        const user = await getUserData(request)
        const reqBody = await request.json();
        const { title, description, isComplated, date } = reqBody;
        const task = new Task({
            user: user.id,
            title: title,
            description: description,
            isComplated: isComplated,
            date: date
        })

        await task.save();

        return NextResponse.json({
            message: "successfully added a task.",
            success: true
        })

    } catch (error) {
        return NextResponse.json({ error: "some error occured while addign a task!" })
    }

}

export async function GET(request: NextRequest) {
    try {
        const user = await getUserData(request)
        const notes = await Task.find({ user: user.id})
        return NextResponse.json({notes})
    } catch (error) {
        return NextResponse.json({ error: "Some error occured while fetching the notes!" })
    }
}

