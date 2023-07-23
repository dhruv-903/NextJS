import { NextRequest, NextResponse } from "next/server";
import connect from "@/db/db";
import Task from "@/models/taskModel";
import { getUserData } from "@/helper/getUserData";

connect();

export async function DELETE(request: NextRequest, { params }: any) {
    try {
        const myUser = await getUserData(request)
        const user = await Task.find({ user: myUser.id })
        if (user) {
            const itemToDelete = await Task.findByIdAndDelete({ _id: params.id })
            return NextResponse.json({ message: "Your task has been successfully deleted",success:true })
        }
        else {
            return NextResponse.json({ error: "Specific user is not exist!" })
        }
    } catch (error) {
        return NextResponse.json({ error: "Internal server error!" })
    }

}


export async function PATCH(request: NextRequest, { params }: any) {

    const id = params.id

    try {
        const myUser = await getUserData(request)
        const user = await Task.find({ user: myUser.id })

        const reqBody = await request.json();
        const { title, description } = reqBody

        if (user) {

            const itemToBeUpdate = await Task.findByIdAndUpdate(id, { title: title ? title : '', description: description ? description : '' });
            return NextResponse.json({ message: "Your task has been successfully updated",success:true })
        }
        else {
            return NextResponse.json({ error: "specific user is not exist!" })
        }

    } catch (error) {
        return NextResponse.json({ error: "Internal server error" })
    }

}


