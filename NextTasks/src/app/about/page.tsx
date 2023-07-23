export default function aboutPage(){
    return (
        <div className="container mx-auto p-8 min-h-[63.5vh] flex items-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img src="" alt="" />
            <h2 className="text-2xl font-bold text-center mb-4">John Doe</h2>
            <p className="text-gray-700 text-center mb-4">Web Developer</p>
            <p className="text-gray-700 text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus arcu vel justo condimentum iaculis. Donec interdum dictum justo, nec elementum est semper id.</p>
            <div className="flex justify-center">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Resume</a>
              <a href="#" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Contact</a>
            </div>
          </div>
        </div>
      </div>
    )
}