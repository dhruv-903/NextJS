"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from 'react-toastify'

export default function signupPage() {

  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    cpassword: "",
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    if (user.password != user.cpassword) {
      toast.error("password does not match!")
      return
    }
    else {
      try {
        setLoading(true);
        const response = await axios.post("/api/users/signup", user);
        if (response.data.success) {
          toast.success(response.data.message)
          router.push('/')
        }
        else {
          toast.error(response.data.error)
        }
      } catch (error: any) {
        toast.error("Internal server error.")
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0 && user.cpassword.length > 0) {
      setButtonDisabled(false)
    }
    else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <main>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl text-center mb-6">{loading ? "Processing..." : "Signup"}</h2>
          <div id="mainContainer" className="bg-white shadow-md rounded px-8 pt-6 pb-5 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} id="name" type="text" placeholder="Name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} id="email" type="email" placeholder="Email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} id="password" type="password" placeholder="Password" required />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={user.cpassword} onChange={(e) => setUser({ ...user, cpassword: e.target.value })} id="confirmPassword" type="password" placeholder="Confirm Password" required />
            </div>
            <div className="flex items-center justify-center">
              <button className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!buttonDisabled ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-500'}`} onClick={onSignup} disabled={buttonDisabled ? true : false} type="submit">
                Register
              </button>
            </div>
            <Link href={"/user/login"} className="text-black text-center block mt-3" >Already have an account<span className="text-red-300 underline" > Login</span> here</Link>
          </div>
        </div>
      </div>
    </main>
  )
}