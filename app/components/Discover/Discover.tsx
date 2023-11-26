import { Button, Image } from "@nextui-org/react";
import Container from "../Container";
import Link from "next/link";

const data = ["/discover3.jpg", "/discover2.jpg", "/discover4.jpg"];

const Discover = () => {
  return (
    <div className="bg-[#C8AC94]">
      <Container>
        <main className="w-full py-10 ">
          <div className=" w-full h-[100%]  flex flex-col   gap-5 md:gap-24 items-center justify-center ">
            <h1 className=" text-4xl md:text-6xl  font-mont uppercase text-center">
              DISCOVER YOUR DREAM SPACE
            </h1>

            <div className="  w-full grid grid-cols-1 md:grid-cols-2 gap-10 h-[60%] ">
              <div className="  px-5 md:px-10 flex flex-col gap-5 ">
                <h1 className=" text-lg text-justify">
                  Tired of a cluttered home? At Zonify Spaces, we turn your
                  dreams of an organized home into reality! Our Zonifyers
                  (Professional Organizers) will not only declutter but also
                  transform your living spaces into havens of tranquility.
                </h1>
                <div>
                  <h1 className=" text-[1.5rem] font-[500]">
                    Why Choose Zonify Spaces?
                  </h1>
                  <ol className="list-decimal text-[1.1rem] leading-8 ">
                    <li>Rediscover your space's hidden potential.</li>
                    <li>Seamless booking, real-time availability.</li>
                    <li>Rate, review, and elevate service quality. </li>
                    <li>Simplified, secure payments.</li>
                  </ol>
                </div>
                <br className="max-sm:hidden" />
                <Link className="text-center" href={"/Book"}>
                  <Button className=" w-[30%] ">Book Now</Button>
                </Link>
              </div>
              <div className=" flex items-center justify-center">
                <Image src="/Discover.png" />
              </div>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Discover;
