import React from "react";
import LinkCard from "./LinkCard";
import ProfileImage from "../assets/profile_image.jpg";
import FacebookIcon from "../assets/facebook.png";
import InstagramIcon from "../assets/instagram.png";
import EmailLink from "./EmailLink";

const LinkTree = ({ links }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-white">
      <img
        src={ProfileImage}
        alt="profile"
        className="rounded-[50%] w-36 mb-2"
      />
      <h1 className="text-4xl mb-3 font-bold">Rei Kajiwara</h1>
      <h3 className="text-2xl mb-5 text-gray-500 text-center">
        Developer & Photographer
      </h3>
      <div className="flex flex-wrap justify-center items-center w-full h-full gap-5 mb-8">
        <a
          href="https://www.instagram.com/rei_kaji0/"
          target="_blank"
          rel="noopener"
        >
          <img src={InstagramIcon} alt="instagramicon" className="w-10" />
        </a>
        <EmailLink />
        <a
          href="https://www.facebook.com/rei.kajiwara.9?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener"
        >
          <img src={FacebookIcon} alt="facebookicon" className="w-10" />
        </a>
      </div>
      <div className="w-72">
        {links.map((link) => (
          <LinkCard key={link.name} link={link} />
        ))}
      </div>
    </div>
  );
};

export default LinkTree;
