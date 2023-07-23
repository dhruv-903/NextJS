import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getUserData = (request: NextRequest) => {

    try {

        const token = request.cookies.get('user')?.value || '';
        const user: any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return user;

    } catch (error:any) {
        return new Error(error.message)
    }


}