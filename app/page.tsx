"use client";
import { useEffect } from "react";
import AboutUs from "./components/About/AboutUs";
import Discover from "./components/Discover/Discover";
import Landing from "./components/Home";
import Unlock from "./components/Unlock/Unlock";

declare global {
  interface Window {
    voiceflow?: any;
  }
}

export default function Home() {
  useEffect(() => {
    (function (d, t) {
      var v: any = d.createElement(t),
        s: any = d.getElementsByTagName(t)[0];
      v.onload = function () {
        window.voiceflow.chat.load({
          verify: { projectID: process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID },
          url: "https://general-runtime.voiceflow.com",
          versionID: process.env.NEXT_PUBLIC_VOICEFLOW_VERSION_ID,
        });
      };
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
    })(document, "script");
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
