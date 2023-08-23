import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {

  return (
    <div className="bg-white py-24 sm:py-32" id="contactus">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Contact us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in touch with us for remote services</p>
        </div>

        <div className="mt-16 sm:mt-20">
          <dl className="sm:grid sm:grid-cols-3 sm:gap-8">

            <div className="flex flex-col text-center sm:text-left">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Email</dt>
              <dd className="order-1 text-2xl font-bold tracking-tight text-indigo-600">truecyber77@gmail.com</dd>
            </div>

            <div className="flex flex-col text-center sm:text-left">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Phone</dt>
              <dd className="order-1 text-2xl font-bold tracking-tight text-indigo-600">+254 111 200 100</dd>
            </div>

            <div className="flex flex-col text-center sm:text-left">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Social</dt>
              <dd className="order-1 flex justify-center">
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  <span className="sr-only">Facebook</span>
                  <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
                </a>

                <a href="#" className="ml-4 text-indigo-600 hover:text-indigo-500">
                  <span className="sr-only">Twitter</span>
                  <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
                </a>

                <a href="#" className="ml-4 text-indigo-600 hover:text-indigo-500">
                  <span className="sr-only">Instagram</span>
                  <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                </a>
              </dd>
            </div>

          </dl>
        </div>
  {/* ElfSight widget script */}
  <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>

{/* ElfSight widget element */}
<div className="elfsight-app-adb88d11-bcd3-4d60-987c-d3e73f68f38e" style={{ position: 'fixed', bottom: '20px', right: '40px', zIndex: '1000' }}></div>

      </div>
    </div>
  )
}
