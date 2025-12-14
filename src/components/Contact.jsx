import { useState } from "react";
import contactImg from "../assets/contactImg.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="px-6 md:px-12 py-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center">
          <div className="inline-block bg-lime-400 px-4 py-2 rounded-md">
            <span className="font-bold text-2xl">Contact Us</span>
          </div>
          <p className="text-gray-600 max-w-xl">
            Connect with us: Let’s discuss your digital marketing needs.
          </p>
        </div>

        {/* Card */}
        <div className="bg-gray-100 rounded-[40px] p-8 md:p-14">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Toggle Options */}
              <div className="flex items-center gap-6 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center">
                    <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                  </span>
                  <span className="text-sm">Say Hi</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <span className="w-4 h-4 rounded-full border border-black"></span>
                  <span className="text-sm">Get a Quote</span>
                </label>
              </div>

              {/* Name */}
              <div>
                <label className="text-sm block mb-2">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm block mb-2">Email*</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm block mb-2">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  className="w-full border border-gray-400 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#12131a] text-white py-4 rounded-xl hover:bg-gray-900 transition">
                Send Message
              </button>
            </form>

            {/* RIGHT SIDE IMAGE */}
            <div className="relative w-full h-[420px] hidden md:block">
              <img src={contactImg} alt="Contact" className="w-full h-full object-contain" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
