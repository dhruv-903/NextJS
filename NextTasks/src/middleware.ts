import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {toast} from 'react-toastify'

export function middleware(request:NextRequest){
    const path = request.nextUrl.pathname;

    const publicPath = path === '/user/login' || path === '/user/register'

    const user = request.cookies.get('user');

    if(publicPath && user){
        toast.error("you are already login")
        return NextResponse.redirect(new URL('/',request.nextUrl))
    }

    if(!user){
        if(path === '/tasks'){
            return NextResponse.redirect(new URL('/user/login',request.nextUrl))
        }
    }
}

export const config = {
    matcher : [
        '/tasks',
        '/user/login',
        '/user/register'
    ]
}