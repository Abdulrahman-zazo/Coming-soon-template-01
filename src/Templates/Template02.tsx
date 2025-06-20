export default function Template02() {
  return (
    <div className="h-screen w-screen  bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-neutral-900 to-neutral-950 flex items-center justify-center background-red">
      <div className=" px-8 py-20 shadow-sm rounded-2xl text-center w-[300px] sm:w-[350px] relative">
        {/* Title */}
        <p className="text-xs sm:text-md font-semibold tracking-widest text-white mb-8">
          SOMETHING <br /> EXCITING IS <br /> COMING
        </p>

        {/* Animated SOON texts */}
        <div className="space-y-3 overflow-hidden">
          {["SOON", "SOON", "SOON"].map((text, index) => (
            <p
              key={index}
              className={`text-4xl sm:text-6xl font-bold transition-all duration-700 ease-out animate-slide-in 
                ${index === 1 ? "text-red-600" : "text-white "}
              `}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {text}
            </p>
          ))}
        </div>

        {/* Date */}
        <p className="mt-10 text-md tracking-widest text-white">At</p>

        <p className=" text-md tracking-widest text-white">08.17.2024</p>
      </div>
    </div>
  );
}
