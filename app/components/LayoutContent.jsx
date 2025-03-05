"use client";

import { usePathname } from "next/navigation";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function LayoutContent({ children }) {
  const pathname = usePathname();
  const showHero = pathname !== "/favorites";

  const getHeroProps = () => {
    switch (pathname) {
      case "/news":
        return {
          title: (
            <>
              Latest in
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                {" "}
                Music News
              </span>
            </>
          ),
          subtitle:
            "Stay updated with the freshest music news, releases, and artist updates from around the globe.",
          showButtons: false,
        };
      default:
        return {};
    }
  };

  return (
    <>
      <Navbar />
      {showHero && <Hero {...getHeroProps()} />}
      {children}
    </>
  );
}
