import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import LinkedIn from "../public/icons/linkedinlogo.svg";
import GitHub from "../public/icons/Github_logo.png";

import Instagram_Black from "../public/icons/instagramlogo.svg";
import Instagram_White from "../public/icons/instagram_white.svg";
import Gmail from "../public/icons/mailtologo.svg";
import Image from "next/image";


import github_White from "../public/icons/github_white.png";
import linkedin_White from "../public/icons/linkedin_white.png";
import mailto_White from "../public/icons/mailto_white.png";


const Footer = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [metaData, setMetaData] = useState({ star: 0, forks: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://api.github.com/repos/pranjalshikhar/portfolio-v3"
      ).then((res) => res.json());
      setMetaData({
        star: data.stargazers_count,
        forks: data.forks_count,
      });
    };
    getData();
  }, []);

  return (
    <div className=" flex select-none text-sm  py-16 mt-16 flex-col h-max items-center mx-auto justify-center">
      <div className="flex justify-center space-x-4 md:space-x-6 dark:text-white/70 text-gray-500 text-[0.6rem] sm:text-xs md:text-sm lg:text-md mt-2">
        <Link
          href="https://www.linkedin.com/in/peraka-arun-a5b168221/"
          target="blank"
          className=" dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
        >
          {" "}
          {/* LinkedIn{" "} */}
          <Image src={currentTheme === "dark" ? linkedin_White : LinkedIn} alt="linkedin" width="30" />
        </Link>
        <Link
          href="https://github.com/PerakaArun"
          target="blank"
          className=" dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
        >
          {" "}
          {/* GitHub{" "} */}
          <Image src={currentTheme === "dark" ? github_White : GitHub} alt="github" width="30" />
        </Link>
        
        <a
          href="https://instagram.com/_macxx__"
          target="blank"
          className=" dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
        >
          {" "}
          {/* Instagram{" "} */}
          <Image src={currentTheme === "dark" ? Instagram_White : Instagram_Black } alt="instagram" width="30" />
        </a>
        <Link
          href="mailto:arunperaka6@gmail.com"
          target="blank"
          rel="noreferrer"
          className=" dark:hover:text-purple-400 hover:text-purple-600 font-semibold"
        >
          {" "}
          {/* Résumé{" "} */}
          <Image src={currentTheme === "dark" ? mailto_White : Gmail} alt="gmail" width="30" />
        </Link>
      </div>
   
    </div>
  );
};

export default Footer;
