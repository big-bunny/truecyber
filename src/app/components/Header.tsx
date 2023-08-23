export default function Header() {
  return (
    <header className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold">TrueCyber Cafe</h1>
      
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/about" className="text-white hover:text-gray-200">About Us</a>  
          </li>
          <li>
            <a href="/services" className="text-white hover:text-gray-200">Services</a>
          </li>
          <li>
            <a href="#contactus" className="text-white hover:text-gray-200">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}