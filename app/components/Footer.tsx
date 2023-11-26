import { Image } from "@nextui-org/react";
import Container from "./Container";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="footer" className=" w-full py-5 bg-[#C8AC94]">
      <Container>
        <div className=" flex items-center justify-between ">
          <div className=" brightness-100 flex items-center text-black font-mont  gap-4">
            <Image src={"/blacklogo.png"} alt="Logo" width={30} height={30} />
            <p className=" uppercase ">Zonify Spaces</p>
          </div>
          <div className=" flex items-center gap-5">
            <Link href={"/"}>
              <FaFacebook />
            </Link>
            <Link href={"/"}>
              <FaLinkedin />
            </Link>
            <Link href={"/"}>
              <FaTwitter />
            </Link>{" "}
          </div>
          <div>
            <p>Zonify Spaces, 2023.All rights are reserved</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
