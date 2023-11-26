import Container from "../Container";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const data = [
  {
    src: "https://s3.amazonaws.com/media.launchrock.com/assets/sites/site-72fryg9bzumv5sa8h6a33wngq/38ptvo-bg%20logo.png",
    heading: "Our Story",
    para: "Discover how Zonify Spaces came to life, driven by a passion for transforming cluttered spaces into harmonious living areas.",
  },
  {
    src: "https://s3.amazonaws.com/media.launchrock.com/assets/sites/site-72fryg9bzumv5sa8h6a33wngq/lthlnk-our%20mission.jpg",
    heading: "Our Mission",
    para: "At Zonify Spaces, our mission is to simplify your life by providing expert home organization solutions tailored to your needs.",
  },
  {
    src: "https://s3.amazonaws.com/media.launchrock.com/assets/sites/site-72fryg9bzumv5sa8h6a33wngq/ee1cxs-vivek-kumar-a-_1ppjnbug-unsplash%201.jpg",
    heading: "Our Values",
    para: "Our platform embodies efficiency, innovation, and reliability, promising not just a service, but an experience that brings a breath of fresh air into homes and busy lives. ",
  },
];

const AboutUs = () => {
  return (
    <Container>
      <main id="about" className="h-[100vh] w-full">
        <div className=" w-full h-[100%]  flex flex-col items-center justify-center ">
          <h1 className="text-6xl font-mont uppercase text-center">About Us</h1>
          <br />
          <br />
          <div className=" grid grid-cols-3 gap-5 ">
            {data.map((ele, i) => (
              <div
                key={i}
                className="py-5 text-center flex flex-col items-center  gap-2 "
              >
                <div className="">
                  <Image
                    isZoomed
                    width={250}
                    alt="NextUI Fruit Image with Zoom"
                    src={ele.src}
                  />
                </div>
                <h1 className=" text-[1.4rem] font-[500]">{ele.heading}</h1>
                <p className="text-[1.1rem] leading-10 font-[300]">
                  {ele.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Container>
  );
};

export default AboutUs;
