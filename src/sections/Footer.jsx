import React from "react";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-cente justify-center gap-5">
            <p className="opacity-70"> Copyright, MountBlue.io</p>
            <div className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy policy
            </div>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Terms of use
            </p>
          </div>
        </div>
        <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-center mt-5">
          {socials.map((social) => (
            <li key={social.id}>
              <a href={social.url} className="social-icon">
                <img
                  src={social.icon}
                  alt={social.title}
                  className="size-1/3 object-contain"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
