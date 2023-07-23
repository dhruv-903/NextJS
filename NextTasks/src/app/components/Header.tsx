"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export default function Navbar() {

  const [user, setUser] = useState(false)

  const logout = async () => {
    try {
      const res = await axios.get("/api/users/logout")
      if (res.data.success) {
        toast.success(res.data.message)
      }
      else {
        toast.error(res.data.error)
      }
    } catch (error: any) {
      toast.error("some error occured while logout a user!")
    }
  }

  const getUserData = async () =>{
    let myUser = await axios.get('/api/users/user');
    if(myUser.data.success){
      setUser(true)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])
  

  return (
    <>
      <nav className="bg-gray-800 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-xl">Logo</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/tasks" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tasks</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
            <div>
              {!user ? <div>
                <Link href="/user/register" className="text-gray-300 hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
                <Link href="/user/login" className="text-gray-300 hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              </div> : <Link href="/user/login" className="text-gray-300 hover:bg-gray-500 px-3 py-2 rounded-md text-sm font-medium" onClick={logout}>Logout</Link>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
