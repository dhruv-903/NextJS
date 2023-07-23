export default function contactPage(){
    return (
        <div className="container mx-auto px-4 py-8 min-h-[63.5vh] flex items-center">
        <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
          <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500"/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea id="message" name="message" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500" rows={4}></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
}