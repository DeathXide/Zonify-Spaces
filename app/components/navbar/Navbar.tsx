"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavbarPage = () => {
  const [active, setActive] = useState(true);

  const path = usePathname();

  useEffect(() => {
    if (path === "/Book") {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [path, active]);

  return (
    <Navbar
      id="navbar"
      maxWidth="xl"
      className=" border-[#]  border-b-1    "
      shouldHideOnScroll
    >
      <NavbarBrand className="  text-black font-mont ">
        <Link href="/" color="foreground" className="flex gap-4">
          <Image src={"/blacklogo.png"} alt="Logo" width={30} height={30} />
          <p className=" uppercase ">Zonify Spaces</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem className=" ">
          <Link color="foreground" href="/#about">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-black ${active ? "" : "border-b-1 border-black"}`}
            color="foreground"
            href="/Book"
          >
            Book Now
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-black ${active ? "border-b-1 border-black" : ""}`}
            color="foreground"
            href="/Join"
          >
            Join Us
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarPage;
