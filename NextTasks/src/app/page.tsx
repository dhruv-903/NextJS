"use client"
import Link from "next/link";
import { NextRequest } from "next/server";

export default function page(request: NextRequest) {

  return (
    <div>
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <div className="md:flex md:flex-row-reverse items-center">
            <div className="md:w-1/2">
              <img src="" alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl font-semibold mb-4 text-gray-500">Efficiently Manage Your Tasks</h1>
              <p className="text-gray-800 text-xl mb-6">Simplify your life with our powerful task management tool. Stay organized, collaborate with your team, and achieve your goals.</p>
              <Link href="/tasks" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-500">Task Management</h3>
                <p className="text-gray-800">Easily create, assign, and track tasks. Set due dates, add attachments, and never miss a deadline.</p>
              </div>
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-500 ">Team Collaboration</h3>
                <p className="text-gray-800">Effortlessly collaborate with your team members. Share tasks, assign responsibilities, and communicate effectively.</p>
              </div>
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-500 ">Progress Tracking</h3>
                <p className="text-gray-800">Visualize your progress with insightful charts and reports. Stay motivated and achieve your goals faster.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
