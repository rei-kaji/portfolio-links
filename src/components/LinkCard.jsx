import React from "react";

const LinkCard = ({ link }) => {
  const linkButton = () => {
    window.open(link.url, "_blank");
  };
  return (
    <button
      className="bg-red-400 text-white w-full py-3 px-5 my-3 rounded-md text-center"
      onClick={linkButton}
    >
      {link.name}
    </button>
  );
};

export default LinkCard;
