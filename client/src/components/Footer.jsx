import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "./button";
export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* upper footer */}
      <div className="bg-[var(--main-color)] py-12 px-32">
        <div className="flex gap-10">
          {/* Section 1 */}
          <div className="flex-1 flex flex-col gap-2 text-white">
            <motion.span className="font-semibold text-[#2e438a] text-lg">
              ABOUT US
            </motion.span>
            {[
              "QNH History",
              "Mission and Vision",
              "Patients Rights",
              "Hospital Accreditations",
              "Staff Portal",
            ].map((text, i) => (
              <motion.span
                key={i}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {text}
              </motion.span>
            ))}
            <motion.span className="font-semibold text-[#2e438a] text-lg">
              E-Services
            </motion.span>
            <motion.span
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Book Appointment
            </motion.span>
            <motion.span className="font-semibold text-[#2e438a] text-lg">
              Join Us
            </motion.span>
          </div>

          {/* Divider */}
          <div className="w-px bg-white/30" />

          {/* Section 2 */}
          <div className="flex-1 flex flex-col gap-2 text-white">
            <motion.span className="font-semibold text-[#2e438a] text-lg">
              OUR DOCTORS
            </motion.span>
            <motion.span
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Articles
            </motion.span>
            <motion.span className="font-semibold text-[#2e438a] text-lg">
              Medical Departments
            </motion.span>
            {["Clinics", "Centers", "Units", "Medical Services"].map(
              (text, i) => (
                <motion.span
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {text}
                </motion.span>
              )
            )}
          </div>

          {/* Divider */}
          <div className="w-px bg-white/30" />

          {/* Section 3 */}
          <div className="flex-1 flex flex-col gap-2 text-white">
            <motion.span className="font-semibold text-[#2e438a] text-lg">
              MEDIA
            </motion.span>
            {[
              "Photo Gallery",
              "Video Gallery",
              "QNH Magazine",
              "Latest Achievement",
            ].map((text, i) => (
              <motion.span
                key={i}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {text}
              </motion.span>
            ))}
            <motion.span className="font-semibold text-[#2e438a] text-lg">
              OFFERS
            </motion.span>
            <motion.span className="font-semibold text-[#2e438a] text-lg">
              CONTACT US
            </motion.span>
          </div>

          {/* Divider */}
          <div className="w-px bg-white/30" />

          {/* Subscribe Section */}
          <div className="flex flex-col">
            <motion.h1 className="text-[#2e438a] text-4xl">Subscribe</motion.h1>
            <motion.h1 className="font-light text-white text-4xl">
              To our Newsletter
            </motion.h1>
            <motion.input
              type="email"
              placeholder="Email Address"
              className="bg-white my-6 px-4 py-2 w-56 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-[var(--main-color)] transition"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="">
              <Button text={"Submit"} />
            </div>
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className="bg-[#105f6c] text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <span className="text-sm md:text-base">
            Copyright © Al Qassim National Hospital 2025. Powered By{" "}
            <a className="text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-300 cursor-pointer">
              {" "}
              Yossef Yasser
            </a>
          </span>

          <div className="flex items-center gap-3">
            <span className="text-sm md:text-base">Follow Us On</span>
            <a
              href="https://www.facebook.com/qnhospital/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white w-5 h-5 hover:text-blue-500 transition" />
            </a>
            <a
              href="https://x.com/qnhospital"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white w-5 h-5 hover:text-blue-400 transition" />
            </a>
            <a
              href="https://www.instagram.com/qnhospital/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white w-5 h-5 hover:text-pink-500 transition" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC219qqSlBkijpimMR9KYJhQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white w-5 h-5 hover:text-red-600 transition" />
            </a>
          </div>

          <div className="flex gap-4 items-center">
            <span className="text-sm md:text-base">
              Visit Counsil Health Insurance{" "}
              <a
                href="https://www.chi.gov.sa/pages/Home.aspx"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                here
              </a>
            </span>
            <img
              src="/images/chi logo.png"
              className="h-12 w-auto object-contain"
              alt="CHI Logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
