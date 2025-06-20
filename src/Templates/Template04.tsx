const ImagePhone =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1750430231/Frame_1171275632_2_el9ggw.avif";
// src/components/HeroSection.jsx

import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    contact: "Mountain View, California, United State.",
    title: "Our office",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    contact: "+1 (555) 000-000",
    title: "Phone",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    contact: "Support@example.com",
    title: "Email",
  },
];
const Template04 = () => {
  return (
    <div className="min-h-screen px-16 text-white grid grid-cols-1 sm:grid-cols-2   items-center  sm:px-16 relative overflow-hidden background-blue">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl space-y-2 text-center col-span-1 md:text-left z-10"
      >
        <main className="py-6 sm:py-14 ">
          <div className="max-w-screen-xl mx-auto px-4 sm:pl-12 sm:pr-0 text-gray-600 ">
            <div className="max-w-xl space-y-3">
              <p className="text-gray-900 text-3xl font-bold sm:text-5xl">
                We Will Coming <span className="text-[#4A74EA]">Soon!</span>
              </p>
              <p>
                We’re here to help and answer any question you might have, We
                look forward to hearing from you .
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative mb-4 inline sm:hidden col-span-1  z-10"
            >
              <img
                src={ImagePhone}
                alt="Phone"
                className="w-full  md:w-full drop-shadow-2xl"
              />
            </motion.div>
            <div>
              <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
                {contactMethods.map((item, idx) => (
                  <li key={idx}>
                    <h4 className="text-gray-800 text-lg font-medium">
                      {item.title}
                    </h4>
                    <div className="mt-3 flex items-center gap-x-3">
                      <div className="flex-none text-gray-400">{item.icon}</div>
                      <p>{item.contact}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="relative  col-span-1 hidden  z-10 sm:inline"
      >
        <img
          src={ImagePhone}
          alt="Phone"
          className="w-full  md:w-full drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default Template04;
