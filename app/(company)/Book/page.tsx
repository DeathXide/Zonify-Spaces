"use client";

import Container from "@/app/components/Container";
import { Button, Image, Input } from "@nextui-org/react";
import React from "react";
import { toast } from "sonner";

const BookNow = () => {
  return (
    <div className={`w-full`}>
      <Container>
        <div className="flex bg-[#1f1f1f] text-white border-1.5 rounded-lg mt-10   items-center justify-center">
          <div className="flex-1  text-2xl p-10 leading-10 text-center ">
            <h1>Ready to Organize Your Space?</h1>

            <h1>Do You Want a Zonify Expert Near You?</h1>
            <h1>Join Now For Free! No CC Required.</h1>

            <h1 className="text-medium">
              Get our upcoming launch offers & updates on home organizing
              services.
            </h1>
            <br />
            <div className="  flex gap-4">
              <Input color="default" variant="flat" type="text" label="Name" />
              <Input
                color="default"
                variant="flat"
                type="email"
                label="Email"
              />
            </div>
            <br />
            <Button
              onClick={() => {
                toast.success("Details Received");
              }}
              className="w-[150px]"
              color="success"
              variant="ghost"
            >
              Submit
            </Button>
          </div>
          <div className="flex-1 overflow-hidden  ">
            <Image radius="none" src={"/subscribe2.jpg"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookNow;
