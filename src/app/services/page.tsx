import Link from "next/link";
import ContactUs from "../components/ContactUs";
import Header from "../components/Header";

const servicesData = [
  {
    category: "Online Services",
    services: [
      { title: "E-Citizen Services",  estimatedTime: "Express" },
      { title: "NTSA TIMS",  estimatedTime: "Express" },
      { title: "KRA Services",  estimatedTime: "Express" },
      { title: "NHIF Registration", estimatedTime: "Express" },
      { title: "NSSF Registration",  estimatedTime: "Express" },
      { title: "Kenyan Passport Application",  estimatedTime: "Express" },
      { title: "Visa Application Assistance", estimatedTime: "ExpressS" },
      { title: "Online Forms Assistance", estimatedTime: "Express" },
      // ... Add more online services
    ],
  },
  {
    category: "Cyber Services",
    services: [
      { title: "Bulk Printing",   estimatedTime: "Same day" },
      { title: "A3 Printing",  estimatedTime: "Express" },
      { title: "Photocopy",  estimatedTime: "Expressy" },
      { title: "Express Scanning",  estimatedTime: "Same day" },
      { title: "Lamination",  estimatedTime: "Express" },
      { title: "Instant Passport Photos",  estimatedTime: "Express" },
      { title: "Browsing", estimatedTime: "Depends on Usage" },
      { title: "Computer Repair", estimatedTime: "Depends on the Issue" },
      { title: "Computer Installations",  estimatedTime: "Depends on the setup" },
      { title: "Printing Services",  estimatedTime: "Depends on the Order" },
      // ... Add more cyber services
    ],
  },
  {
    category: "Graphic Design",
    services: [
      { title: "Business Card Design",  estimatedTime: "Depends on the Order" },
      { title: "Poster Design", estimatedTime: "Depends on the Order" },
      { title: "Brochure Design",  estimatedTime: "Depends on the Order" },
      { title: "Logo/Artwork Design",  estimatedTime: "Depends on Complexity" },
      { title: "Stickers/Labels Design", estimatedTime: "Depends on Quantity" },
      { title: "Receipt Book Design",  estimatedTime: "Depends on Design" },
      { title: "Rubber Stamp Design",  estimatedTime: "Depends on the Order" },
      { title: "Branding Services",  estimatedTime: "Depends on Project" },
      { title: "3D Signboard Design",  estimatedTime: "Depends on Design" },
      { title: "Signage and Wall Branding",  estimatedTime: "Depends on Project" },
      // ... Add more graphic design services
    ],
  },
];


export default function Services() {
  return (
    <div>  <Header />
   <div className="py-16 bg-gray-50 overflow-hidden">
     
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What we can do for you
          </p>
        </div>
        {servicesData.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="p-6 bg-white rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold text-indigo-600 mb-2">{service.title}</h4>
                
                  <p className="text-gray-600">{service.estimatedTime}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ContactUs />
    </div></div>
  );
}
