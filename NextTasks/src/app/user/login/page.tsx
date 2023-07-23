"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {toast} from "react-toastify"
import axios from "axios";

export default function loginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState<Boolean>(true);
    const [loading, setLoading] = React.useState<Boolean>(false);

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        }
        else {
            setButtonDisabled(true)
        }
    }, [user])

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            if(response.data.success){
                toast.success(response.data.message)
                router.push("/")
            }
            else{
                toast.error(response.data.error)
            }

        } catch (error: any) {
            toast.error("Internal server error.")
        } finally {
            setLoading(false);
        }
    }

    return (
        <main>
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-sm">
                    <h2 className="text-2xl text-center mb-6">{loading ? "Processing..." : "Login"}</h2>
                    <div id="mainContainer" className="bg-white shadow-md rounded px-8 pt-6 pb-5 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} id="email" type="email" placeholder="Email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} id="password" type="password" placeholder="Password" required />
                        </div>
                        <div className="flex items-center justify-center">
                            <button className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!buttonDisabled ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-500'} `} onClick={onLogin} disabled={buttonDisabled ? true : false} type="submit">
                                Login
                            </button>
                        </div>
                        <Link href={"/user/register"} className="text-black text-center block mt-4" >Don't have an account <span className="text-red-300 underline" >signup</span> here</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
