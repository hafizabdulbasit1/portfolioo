import React from 'react'

const Contact = () => {
  return (
<div id="contact">
  <section className="text-gray-300 body-font relative bg-gradient-to-r from-gray-900 via-gray-800 to-black">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      {/* Map Section */}
      <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-lg">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0 rounded-lg"
          frameBorder={0}
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1143689911346!2d67.05416717586779!3d24.85994314527739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e98a2030e7b%3A0x8c2cfe78db413594!2sShahrah-e-Faisal%20Service%20Rd%20N%2C%20Sindhi%20Muslim%20Cooperative%20Housing%20Society%20Sindhi%20Muslim%20CHS%20(SMCHS)%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729692255857!5m2!1sen!2s"
          style={{ filter: "contrast(1.2) opacity(0.7)" }}
        />
        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md text-white">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-bold text-yellow-500 text-sm">
              ADDRESS
            </h2>
            <p className="mt-1">Nursery, P.E.C.H.S, Karachi</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-bold text-yellow-500 text-sm">
              EMAIL
            </h2>
            <a
              href="mailto:hafizabdulbasitt1@email.com"
              className="text-blue-400 leading-relaxed hover:underline"
            >
              hafizabdulbasitt1@email.com
            </a>
            <h2 className="title-font font-bold text-yellow-500 text-sm mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">0309-7779809</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:w-1/3 md:w-1/2 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-8 py-10 rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-500 mb-4">
          Contact Me
        </h2>
        <p className="leading-relaxed mb-5 text-gray-400">
          Feel free to reach out to me for any inquiries or collaborations.
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800 rounded border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-200 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Your Name"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800 rounded border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-200 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Your Email"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-200 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
            placeholder="Your Message"
          />
        </div>
        <button className="text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg font-bold transition-colors duration-200">
          Send Message
        </button>
        <p className="text-xs text-gray-500 mt-3">
          I will respond as soon as possible. Thank you for reaching out!
        </p>
      </div>
    </div>
  </section>
</div>

  )
}

export default Contact


