import React from "react";

const LinkCard = ({ link }) => {
  return (
    <div className="bg-red-400 text-white w-full py-3 px-5 my-4 rounded-md text-center">
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.name}
      </a>
    </div>
  );
};

export default LinkCard;
