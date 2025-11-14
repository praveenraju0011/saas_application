import clsx from "clsx";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => (
  <LinkScroll
    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1
    max-lg:my-4 max-lg:h5"
  >
    {title}
  </LinkScroll>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <header className="fixed top-0 left-0 w-full z-100 py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2 ">
          <div className="flex justify-left items-center p-1 gap-2">
            <img
              src="/images/favicon_svg.svg"
              alt="enigma-img"
              width={60}
              height={40}
            />
            <h1 className="text-2xl font-bold cursor-default">Enigma</h1>
          </div>
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div
            className="w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen
         max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4"
          >
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto py-4">
              <ul className="flex max-lg:block max-lg:px-4">
                <li className="nav-li">
                  <NavLink title="Features" />
                  <div className="dot" />
                  <NavLink title="Pricing" />
                </li>
                <li className="nav-logo flex gap-2">
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <img
                      src="/images/favicon_svg.svg"
                      alt="enigma-logo"
                      width={50}
                      height={25}
                    />
                    <h1 className="text-2xl font-bold cursor-default">
                      Enigma
                    </h1>
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="Faq" />
                  <div className="dot" />
                  <NavLink title="Download" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                alt="outline"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outline-fill"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={toggleMenu}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="menu-btn"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
