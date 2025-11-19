import React from "react";
import { Element } from "react-scroll";
import { links, logos } from "../constants/index";
import { Marker } from "../components/Marker";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex flex-wrap items-start gap-10">
            <div className="flex-1 min-w-[450px]">
              <div className="mb-10">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/favicon_svg.svg"
                    alt="icon-img"
                    width={80}
                    height={55}
                  />
                  <h2 className="text-4xl font-semibold">Enigma</h2>
                </div>

                <p className="body-1 mb-10 max-w-md mt-2">
                  Try it now for free on iOS, Android and Web!
                </p>

                <ul className="flex flex-wrap items-center gap-6">
                  {links.map((link) => (
                    <li
                      key={link.id}
                      className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                    >
                      <a
                        href={link.url}
                        className="size-22 download_tec-icon_before relative flex items-center
                        justify-center rounded-half border-s3 bg-s1 transition-borderColor duration-500"
                      >
                        <span className="absolute -top-2 rotate-90">
                          <Marker />
                        </span>
                        <img
                          src={"/images/lines.svg"}
                          alt="lines"
                          className="absolute size-13/20 object-contain"
                        />
                        <span className="download_tech-icon">{link.icon}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex-1 max-md:hidden mt-4 w-[900px]  absolute -right-40 top-32">
              <div className="download_preview-before download_preview-after rounded-40 relative border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/screen.jpg"
                    alt="screen"
                    className="rounded-xl w-full h-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <ul className="flex justify-center mt-40 pt-40 max-lg:hidden ">
            {logos.map((logo) => (
              <li key={logo.id} className="mx-10">
                <img
                  src={logo.url}
                  alt={logo.title}
                  width={logo.width}
                  height={logo.height}
                />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;
