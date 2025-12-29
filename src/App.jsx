import React from "react";
import LinkTree from "./components/LinkTree";

const App = () => {
  const links = [
    // {
    //   name: "Resume",
    //   url: "https://drive.google.com/drive/folders/1JsL-7dREExO6D8xwjgOFriz2QVMrHFMi?usp=sharing",
    // },
    {
      name: "Portfolio 2D",
      url: "https://rei-portfolio-2d.netlify.app/",
    },
    {
      name: "Portfolio 3D",
      url: "https://rei-portfolio-3d.netlify.app/",
    },
    {
      name: "GitHub",
      url: "https://github.com/rei-kaji",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/reikaji",
    },
    // {
    //   name: "Instagram",
    //   url: "https://www.instagram.com/rei_kaji0/",
    // },
    // {
    //   name: "Facebook",
    //   url: "https://www.facebook.com/rei.kajiwara.9?mibextid=LQQJ4d",
    // },
  ];

  return <LinkTree links={links} className="relative z-10" />;
};

export default App;
