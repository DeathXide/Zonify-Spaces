import { Button, Image } from "@nextui-org/react";
import Container from "../Container";
import Footer from "../Footer";
import Link from "next/link";

const data = [""];

const Unlock = () => {
  return (
    <div className="UNLOCK YOUR ORGANIZING POTENTIAL">
      <Container>
        <main className="h-[100vh] w-full  ">
          <div className=" w-full h-[100%]  flex flex-col  gap-10 items-center justify-center ">
            <h1 className="text-6xl font-mont uppercase text-center">
              Unlock YOUR DREAM SPACE
            </h1>

            <div className="  w-full grid grid-cols-2 gap-10 h-[60%] ">
              <div className=" h-[400px] rounded-xl overflow-hidden">
                <Image src={"/join.jpg"} />
              </div>
              <div className=" px-10 flex flex-col items-center justify-center gap-5 ">
                <h1 className=" text-lg text-justify">
                  Are you a home organization expert ready to unlock new
                  possibilities? Zonify Spaces is your gateway to a world of
                  opportunities. Showcase your skills, connect with clients, and
                  watch your earnings grow.
                </h1>
                <div>
                  <h1 className=" text-[1.5rem] font-[500]">
                    Why Join the Zonifyer Community?
                  </h1>
                  <ol className="list-decimal text-[1.1rem] leading-8 ">
                    <li>
                      {" "}
                      A dedicated ecosystem for Professional Home Organizers
                      (especially for women, facilitating their evolution into
                      Professional "Zonifyers").
                    </li>
                    <li>
                      Shine in the spotlight with our vast user base. Effortless
                      bookings with a user-friendly calendar.
                    </li>
                    <li>Manage bookings like a pro. </li>
                    <li>Elevate your reputation with reviews and ratings.</li>
                  </ol>
                </div>
              </div>

              <Link href={"/Join"} className="text-center">
                <Button className=" w-[30%] ">Join Now</Button>
              </Link>
            </div>
          </div>
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default Unlock;
