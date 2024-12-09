import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMap, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import Free from "../components/free";

export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <header className="contact h-32 bg-slate-100 flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">Contact</h1>
      </header>

      {/* Intro Section */}
      <div className="flex flex-col items-center justify-center mt-10 px-4 lg:mt-20">
        <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold text-center">
          Get In Touch With Us
        </h1>
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#9F9F9F] mt-4 text-center max-w-[90%] lg:max-w-[644px]">
          For more information about our products and services, please feel free to drop us an email.
          Our staff will always be there to help you. Do not hesitate!
        </p>
      </div>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-center md:px-14 py-10 text-black space-y-6 md:space-y-0">
        
        {/* Left Column - Contact Info */}
        
        <div className="w-full md:w-1/2 flex flex-col items-center sm:items-start md:items-start px-4 lg:px-12">
          <h3 className="font-medium text-lg md:text-xl lg:text-2xl text-black mb-4">
            Contact Information
          </h3>

          <div className="mb-6 flex items-center space-x-4 ">
            <FontAwesomeIcon icon={faMap} className="text-black hover:text-gray-700" />
            <div>
              <h4 className="font-semibold text-md lg:text-lg ">Address</h4>
              <p className="text-sm lg:text-base text-gray-600">236 5th SE Avenue, <br />New York NY10000,<br /> United States</p>
            </div>
          </div>

          <div className="mb-6 flex items-center space-x-4">
            <FontAwesomeIcon icon={faPhone} className="text-black hover:text-gray-700" />
            <div>
              <h4 className="font-semibold text-md lg:text-lg">Phone</h4>
              <p className="text-sm lg:text-base text-gray-600">Mobile: +(84) 546-6789</p>
              <p className="text-sm lg:text-base text-gray-600">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="mb-6 flex items-center space-x-4">
            <FontAwesomeIcon icon={faVoicemail} className="text-black hover:text-gray-700" />
            <div>
              <h4 className="font-semibold text-md lg:text-lg">Email</h4>
              <p className="text-sm lg:text-base text-gray-600">Sumbulsale@gmail.com</p>
            </div>
          </div>

          <div className="mb-6 flex items-center space-x-4">
            <FontAwesomeIcon icon={faClock} className="text-black hover:text-gray-700" />
            <div>
              <h4 className="font-semibold text-md lg:text-lg">Working Hours</h4>
              <p className="text-sm lg:text-base text-gray-600">Mon-Fri: 9:00 - 22:00</p>
              <p className="text-sm lg:text-base text-gray-600">Sat-Sun: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full md:w-1/2 px-4 lg:px-12">
          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Mobile: +(84) 546-6789"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="abc@def.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Hi! I'd like to ask about..."
              
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-1/2 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      {/* Free Component */}
      <Free />
    </>
  );
}
