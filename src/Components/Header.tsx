import { useState } from "react";
const Logo =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1750456977/Group_42_pvkdif.png";

import { Link } from "react-router-dom";
const Header = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { id: 1, title: "Template-01", path: "/template01" },
    { id: 2, title: "Template-02", path: "/template02" },
    { id: 3, title: "Template-03", path: "/template03" },
    { id: 4, title: "Template-04", path: "/template04" },
  ];

  return (
    <nav className="bg-neutral-950 text-white border-b-2 border-neutral-600 mask-clip-border w-full md:static ">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-3 md:block">
          <Link to="/">
            <img src={Logo} width={120} className="h-auto" alt="logo" />
          </Link>
          <div className="md:hidden">
            <button
              title={state ? "close menu" : "open menu"}
              className="text-neutral-200 hover:text-neutral-500"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item) => {
              return (
                <li
                  key={item.id}
                  className="text-neutral-200 text-base font-medium hover:text-neutral-400"
                >
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}

            <a
              className="group text-sm py-2 px-6 inline-block rounded-full text-black bg-white  border-2 border-neutral-500 hover:text-white focus:ring-3 "
              href="#"
            >
              Contact
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
