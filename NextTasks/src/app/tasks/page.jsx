"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from 'react-toastify'


export default function taskPage() {

  const [addNote, setAddNote] = useState({ title: '', description: '', })
  const [myArray, setMyArray] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [fillUpdateNote, setFillUpdateNote] = useState({})

  const openModal = (item) => {
    setFillUpdateNote(item)
    setModalOpen(!modalOpen)
  }

  useEffect(() => {
    getNotes()
  }, [addNote])


  const addTask = async () => {
    try {
      const res = await axios.post('/api/tasks/tasks', addNote);
      if (res.data.success) {
        toast.success(res.data.message)
      }
      else {
        toast.error(res.data.error)
      }
    }
    catch (error) {
      toast.error("Internal server error!")
    }
  }

  const getNotes = async () => {
    try {
      const res = await axios.get('/api/tasks/tasks')
      await setMyArray(res.data.notes);
    } catch (error) {
      toast.error("Internal server error!")
    }
  }

  const deleteNotes = async (id) => {
    try {
      const res = await axios.delete(`/api/tasks/tasks/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      else {
        toast.error(res.data.error);
      }
    } catch (error) {
      toast.error("Internal server error!")
    }
  }

  const updateNotes = async (id) => {
    setModalOpen(!modalOpen);
    addNote.title = fillUpdateNote.title;
    addNote.description = fillUpdateNote.description;
    try {
      const res = await axios.patch(`/api/tasks/tasks/${id}`, addNote);
      if (res.data.success) {
        toast.success(res.data.message)
      }
      else {
        toast.error(res.data.error)
      }
    }
    catch (error) {
      toast.error("Internal server error")
    }
  }

  return (

    <div className="min-h-[63.5vh]" >

      <div className={`fixed inset-0 items-center justify-center z-50 ${modalOpen ? 'flex' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
        <div className="bg-white rounded-lg p-6 z-10">
          <h2 className="text-xl font-bold mb-4">Update Information</h2>
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-300 text-gray-500 rounded-md px-3 py-2 mb-3 w-full"
            onChange={(e) => setFillUpdateNote({ ...fillUpdateNote, title: e.target.value })}
            value={fillUpdateNote.title}
          />
          <input
            type="text"
            placeholder="Description"
            className="border border-gray-300 text-gray-500 rounded-md px-3 py-2 mb-3 w-full"
            onChange={(e) => setFillUpdateNote({ ...fillUpdateNote, description: e.target.value })}
            value={fillUpdateNote.description}
          />
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => updateNotes(fillUpdateNote._id)} >
              Update
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 w-[660px]">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Add Task</h2>
          <div>
            <div className="mt-2">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="title">Title</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" onChange={(e) => setAddNote({ ...addNote, title: e.target.value })} placeholder="Enter task title" />
            </div>
            <div className="mt-2">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="description">Description</label>
              <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Enter task description" onChange={(e) => setAddNote({ ...addNote, description: e.target.value })} ></textarea>
            </div>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit" onClick={addTask} >Add</button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Your Tasks</h2>

          {
            myArray.map((item) => {
              return (
                <div className="mt-4" key={item._id}>
                  <div className="bg-white rounded shadow p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-500">{item.title}</h3>
                      <span className="text-gray-600 text-sm">{item.time}</span>
                    </div>
                    <div className="mt-2 text-gray-700">{item.description}</div>
                    <div className="mt-4 flex justify-end">
                      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded" onClick={() => openModal(item)} >Update</button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2" onClick={() => deleteNotes(item._id)} >Delete</button>
                    </div>
                  </div>
                </div>
              );
            })
          }

        </div>
      </div>
    </div>

  )
}