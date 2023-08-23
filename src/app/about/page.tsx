import Link from "next/link";
import ContactUs from "../components/ContactUs";

import Header from "../components/Header";

export default function About() {

    return (
        <div>
            <Header />
      <div className="bg-gray-100 p-8">
  
        <h1 className="text-4xl font-bold text-blue-800 mb-4">ABOUT TRUECYBER</h1>
  
        <p className="text-lg text-gray-700 mb-4">
          Welcome to TrueCyber Cafe! We are a modern internet cafe located in the heart of Nairobi FEDHA  that provides a wide range of digital services.
        </p>
  
        <p className="text-lg text-gray-700 mb-4">
          We first opened our doors in 2014 with the mission to provide fast, reliable internet access and printing services to professionals, students, and residents in our community. As technology advanced, so did we!
        </p>
  
        <p className="text-lg text-gray-700 mb-4">
          Today, TrueCyber Cafe has expanded to offer services like computer rentals, graphic design, phone repairs, lamination, scanning, videography and much more. Our expert staff stays up-to-date on the latest software, hardware, and cyber trends so we can offer you the best experience.
        </p>
  
        <p className="text-lg text-gray-700 mb-4">
          At TrueCyber Cafe, we strive to provide an excellent customer experience in a comfortable, clean, and safe environment. Our cyber cafe is open 7am-9pm, so you can access the internet, print documents, or use our services at any time.
        </p>
  
        <p className="text-lg text-gray-700 mb-4">
          We thank you for choosing TrueCyber Cyber Cafe for your cyber needs and look forward to serving you! Please feel free to contact us if you have any questions.
        </p>
  
        <div className="flex justify-center">
        <Link href="/services" legacyBehavior>
          <a className="bg-white text-teal-600 py-3 px-6 rounded-full mb-4 hover:bg-teal-600 hover:text-white transition duration-300 ease-in-out">
           SERVICES
          </a>
        </Link>
        </div>
  < ContactUs />
      </div></div>
    )
  
  }