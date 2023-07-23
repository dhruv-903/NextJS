export default function footer(){
    return(
        <footer className="bg-gray-800">
  <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-white text-lg font-bold">About Us</h3>
        <p className="mt-4 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div>
        <h3 className="text-white text-lg font-bold">Services</h3>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white">Web Design</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Graphic Design</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Digital Marketing</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white text-lg font-bold">Contact</h3>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white">Email: info@example.com</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Phone: +1 123 456 7890</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Address: 123 Main St, City, Country</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white text-lg font-bold">Follow Us</h3>
        <ul className="flex mt-4 space-x-4">
          <li><a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
    <hr className="my-8 border-gray-700"/>
    <p className="text-center text-gray-300 text-sm">© 2023 Your Company. All rights reserved.</p>
  </div>
</footer>

    )
}