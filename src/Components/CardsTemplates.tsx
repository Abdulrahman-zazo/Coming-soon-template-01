import { useNavigate } from "react-router-dom";

const CardsTemplates = () => {
  const cards = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1750432694/Frame_1171275635_copy_wminvy.webp",
      path: "/template01",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1750432695/Frame_1171275633_jp6z25.png",

      path: "/template02",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1750432696/Frame_1171275636_2_wbnqgg.png",
      path: "/template03",
    },
    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1750432694/Frame_1171275635_2_tf8jjz.webp",

      path: "/template04",
    },
  ];
  const Navigate = useNavigate();
  return (
    <div className="py-8 text-white">
      <div className="flex flex-col mx-4">
        <div className="mt-12  mx-auto">
          <h1 className="text-center font-bold text-3xl sm:text-3xl xl:text-5xl bg-gradient-to-tl from-slate-200 via-neutral-300 to-neutral-300 bg-clip-text text-transparent">
            Coming Soon Template
          </h1>
          <p className="text-center text-neutral-200  m-8 text-sm sm:text-base">
            A clean and modern Coming Soon landing page built with Tailwind CSS.
            This responsive template is perfect for upcoming projects, product
            launches, or online platforms that want to create early engagement.
            🚀⌛
          </p>
        </div>

        <div className="mx-auto text-sm pb-6 border-b-2 border-neutral-600">
          <ul className="grid grid-cols-2 sm:grid-cols-4  items-center flex-wrap gap-4 ">
            <li className="px-2 py-2 rounded-full bg-neutral-800">
              ⚡ Built with Tailwind CSS
            </li>
            <li className="px-2 py-2 rounded-full bg-neutral-800">
              🖥️ Fully responsive design
            </li>
            <li className="px-2 py-2 rounded-full bg-neutral-800">
              ⏳ Animated countdown timer
            </li>
            <li className="px-2 py-2 rounded-full bg-neutral-800">
              🎬 Smooth text animation
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 items-center w-[90%] sm:w-[80%] sm:gap-6 mx-auto py-8 ">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => Navigate(`${card.path}`)}
              className="m-4 transition delay-75 duration-400 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"
            >
              <img
                src={card.imageUrl}
                width={500}
                className="h-auto "
                alt={card.path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsTemplates;
