"use client";
import { useEffect } from "react";
import AboutUs from "./components/About/AboutUs";
import Discover from "./components/Discover/Discover";
import Landing from "./components/Home";
import Unlock from "./components/Unlock/Unlock";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <Landing />
      <AboutUs />
      <Discover />
      <Unlock />
    </div>
  );
}
