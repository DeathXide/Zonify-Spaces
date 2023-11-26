import { Button, Image } from "@nextui-org/react";

import Container from "./Container";
import NavbarPage from "./navbar/Navbar";
import Link from "next/link";

const Landing = () => {
  return (
    <main className=" bg-cover   w-full bg-[url(https://s3.amazonaws.com/media.launchrock.com/assets/sites/site-72fryg9bzumv5sa8h6a33wngq/io2nut-vecteezy_elegant-modern-fashion-collection-hanging-in-a-luxurious_24745938_777-min.jpg)]  bg-center">
      <div className="backdrop-brightness-[.40] contrast-[.89] w-full h-full">
        <Container>
          <div className="  font-mont   py-16 md:py-44 ">
            <div className="   leading-normal   text-white">
              <Image width={100} src={"/logo.png"} />
              <h1 className="   text-[4.5rem]  font-[300]  uppercase ">
                Zonify Spaces
              </h1>
              <h2 className=" italic text-[1.2rem]">
                From Chaos to Clarity: A New Way To Organize
              </h2>
              <br />
              <p className=" italic">
                Book Professional Organizers Today for a Stress-Free and <br />
                Organized Living Space. Your Perfect Home Awaits—Effortlessly
              </p>
              <br />
              <div className="  flex gap-4">
                <Link href={"/Book"}>
                  <Button variant="solid" radius="sm">
                    {" "}
                    Book Now
                  </Button>
                </Link>
                <Link href={"/Join"}>
                  <Button variant="solid" radius="sm">
                    Join Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Landing;
