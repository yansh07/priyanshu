import React from 'react'

export const Contact = () => {
  return (
    <div className='px-2 -mt-12 text-white bg-transparent md:px-32 xl:mt-2'>
      <div
            className="flex flex-col items-start justify-between xl:flex-row"
          >
            {/* <!-- Left Text Side --> */}
            <div className="px-8 mt-8 xl:w-1/2">
              <h2
                className="text-4xl font-extrabold leading-relaxed font-heading md:text-5xl xl:text-5xl"
              >
                Con<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">tact me</span>
              </h2>
              <p className="mt-3 mb-3 text-xl text-purple-400 glowing-text">
                Have any suggestions or project idea?
              </p>
            </div>

            {/* <!-- Right Form Side --> */}
            <form
              action="https://formspree.io/f/myzjzokb"
              method="POST"
              id="contactForm"
              className="w-full px-8 space-y-3 xl:w-1/2 xl:mt-10"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full p-2 pb-2 placeholder-gray-700 border rounded-lg bg-white/5 placeholder:text-white font-body border-white/20 backdrop-blur-lg focus:outline-none focus:border-white"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full p-2 pb-2 placeholder-gray-700 border rounded-lg bg-white/5 placeholder:text-white font-body border-white/20 backdrop-blur-lg focus:outline-none focus:border-white"
              />
              <textarea
                rows="4"
                name="message"
                required
                placeholder="Your Message"
                className="w-full p-2 pb-2 placeholder-gray-700 border rounded-lg bg-white/5 placeholder:text-white font-body border-white/20 backdrop-blur-lg focus:outline-none focus:border-white"
              ></textarea>

              {/* <!-- Submit Button --> */}
              <button
                type="submit"
                className="px-6 py-2 mt-6 text-white transition-all duration-300 border rounded-lg bg-white/5 border-white/20 backdrop-blur-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* <!-- ✅ Toast Message --> */}
          <div
            id="toast"
            className="fixed px-6 py-3 text-black transition-opacity duration-500 transform -translate-x-1/2 bg-white rounded-full shadow-lg opacity-0 pointer-events-none bottom-8 left-1/2"
          >
            Thank you! Your message has been sent.
          </div>
    </div>
  )
}

export default Contact