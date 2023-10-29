import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ 
      backgroundImage: "url(/images/red2.jpg)",
      backgroundSize: "cover",  // This will cover the entire element
      backgroundPosition: "center",  // This centers the image
    }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-teal-600">
          WELCOME TO TRUE CYBER CAFE
        </h1>

        <Link href="/services" legacyBehavior>
          <a className="bg-white text-teal-600 py-3 px-6 rounded-full mb-4 hover:bg-teal-600 hover-text-white transition duration-300 ease-in-out">
            Continue
          </a>
        </Link>

        <Link href="/about" legacyBehavior>
          <a className="bg-white text-teal-600 py-3 px-6 rounded-full mb-4 hover-bg-teal-600 hover-text-white transition duration-300 ease-in-out">
            About us
          </a>
        </Link>
      </div>
    </div>
  );
}

