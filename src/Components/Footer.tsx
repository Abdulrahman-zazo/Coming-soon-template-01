import { Link } from "react-router-dom";
const Logo =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1750456977/Group_42_pvkdif.png";

const Footer = () => {
  const footerNavs = [
    { id: 1, title: "Template-01", path: "/template01" },
    { id: 2, title: "Template-02", path: "/template02" },
    { id: 3, title: "Template-03", path: "/template03" },
    { id: 4, title: "Template-04", path: "/template04" },
  ];

  return (
    <footer className="bg-neutral-950 text-white px-4 py-5 max-w-screen-3xl mx-auto md:px-8 text-sm sm:text-base  border-t-2 border-neutral-600">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img
          src={Logo}
          className="w-[150px] sm:w-[250px] h-auto mx-auto my-2"
          alt="logo"
        />

        <p className="leading-relaxed text-center mt-2 text-xs  sm:text-base">
          A clean and modern Coming Soon landing page built with Tailwind CSS.
          This responsive template is perfect for upcoming projects, product
          launches, or online platforms that want to create early engagement.
          🚀⌛
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item) => (
          <li key={item.id} className=" hover:text-neutral-500-800">
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">&copy; All rights reserved.</div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a
                href="https://www.instagram.com/abdulrahman_zazo/"
                title="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a
                href="https://www.facebook.com/abdulrahman.zazo/ "
                title="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook-icon lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="#" title="Linkedin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin-icon lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </li>

            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="mailto:abdulrahmanzazo@outlook.com" title="Email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail-icon lucide-mail"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
