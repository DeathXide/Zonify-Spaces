import { Button, Image } from "@nextui-org/react";
import Container from "../Container";
import Link from "next/link";

const data = ["/discover3.jpg", "/discover2.jpg", "/discover4.jpg"];

const Discover = () => {
  return (
    <div className="bg-[#C8AC94]">
      <Container>
        <main className="h-[100vh] w-full  ">
          <div className=" w-full h-[100%]  flex flex-col  gap-24 items-center justify-center ">
            <h1 className="text-6xl font-mont uppercase text-center">
              DISCOVER YOUR DREAM SPACE
            </h1>

            <div className="  w-full grid grid-cols-2 gap-10 h-[60%] ">
              <div className=" px-10 flex flex-col gap-5 ">
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
              </div>
              <div className="   relative">
                <div className="  bg-[#483730] rounded-full absolute h-[500px] left-[10%] -top-[20%] w-[500px]"></div>
                <div className="absolute   z-10  origin-top top-[-10%]">
                  <Image width={300} src={data[0]} />
                </div>
                <div className="absolute   z-30 left-[28%]  top-[25%] ">
                  <Image width={300} src={data[1]} />
                </div>
                <div className="absolute   z-20 right-0  top-[00%]  ">
                  <Image width={300} src={data[2]} />
                </div>
              </div>
              <Link className="text-center" href={"/Book"}>
                <Button className=" w-[30%] ">Book Now</Button>
              </Link>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Discover;
