import { motion } from "framer-motion";
const ImagePhone =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1750347388/Frame_229_1_iiae4s.png";

const Template03 = () => {
  return (
    <div className="min-h-screen text-white flex flex-col md:flex-col items-center justify-center p-8 relative overflow-hidden background-Lime">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 20 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="relative mb-4  z-10"
      >
        <img
          src={ImagePhone}
          alt="Phone"
          className="w-[300px] md:w-[350px] drop-shadow-2xl"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl space-y-2 text-center md:text-left z-10"
      >
        <h1 className="text-2xl md:text-4xl font-semibold w-full text-center">
          <span className="text-white">We</span> will write success stories with{" "}
          <span className="text-[#A6C81B]">code</span> soon
        </h1>
        <p className="text-base text-gray-200 text-center">
          Modern software solutions for startups & projects.
        </p>
      </motion.div>

      {/* Background Circles */}
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.2, ease: "backOut", delay: 0.5 }}
          className="absolute w-[500px] h-[500px] rounded-full border-2 border-[#A6C81B]"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.4, ease: "backOut", delay: 0.7 }}
          className="absolute w-[600px] h-[600px] rounded-full border-2 border-[#A6C81B]"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.6, ease: "backOut", delay: 0.9 }}
          className="absolute w-[700px] h-[700px] rounded-full border-2 border-[#A6C81B]"
        ></motion.div>
      </div>
    </div>
  );
};

export default Template03;
