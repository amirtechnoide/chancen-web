"use client";
import { secTwoImg1 } from "@/lib/web/images";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import secTwoImg2 from "@/assets/images/studentsEnvolved.png";

type Props = {};

const HowItWorks = (props: Props) => {
  const incomeShareAgreementStory = [
    "Study now and pay later",
    "You start paying when you earn a living wage",
    "You pay a set repayment of your monthly income (Not more than 20% of what you earn)",
    "Your repayment is capped so that you're  not saddled with debt",
    "Your repayment goes towards the fund for the next generation",
  ];
  return (
    <section className="section-one z-50 relative bg-zinc">
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="image-holder w-full md:w-1/2 relative">
          <div className="backdrop-blur absolute w-[10rem] h-[10rem] sm:w-[10rem] sm:h-[12rem]  top-[50%]"></div>
          <div className="hidden sm:block backdrop-blur-md absolute w-[10rem] h-[10rem] bottom-[0%] left-[80%]"></div>
          <div className="hidden sm:block backdrop-blur absolute w-[10rem] h-[10rem] top-[70%] left-[20%]"></div>
          <Image alt="" src={secTwoImg1} className="w-full" />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-[6rem]">
          <h1 className="text-white font-extrabold text-2xl md:text-4xl mb-3">
            How does it work?
          </h1>
          <div className="w-full md:w-2/3">
            <div className="w-[5rem] h-1 bg-zinc" />
            <Separator className="bg-zinc" />
          </div>
          <p className="text-white py-3 font-md text-base md:text-lg">
            Chancen provides access to quality education that equips you for the
            modern workforce. With Income Share Agreement we invest in your
            future, and you pay us back with reinvestment when you’re
            financially able.
          </p>
          <p className="text-white font-md text-base md:text-lg">
            Chancen provides access to quality education that equips you for the
            modern workforce. With Income Share Agreement we invest in your
            future, and you pay us back with reinvestment when you’re
            financially able.
          </p>
          <Button
            className="bg-white mt-8 rounded-3xl py-2 text-sm px-6"
            label="Our Product"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 p-6 md:p-[6rem]">
          <h1 className="text-white font-extrabold text-4xl mb-3">
            Why Income share agreement?
          </h1>
          <div className="laptop:w-1/2 w-2/3">
            <div className="w-[5rem] h-1 bg-zinc" />
            <Separator className="bg-zinc" />
          </div>
          <ul className="list-none py-2">
            {incomeShareAgreementStory.map((reason, index) => {
              return (
                <li key={index} className="flex items-center gap-4 py-2">
                  <span className="size-5 relative p-3 rounded-[50%] bg-slate-50">
                    <Check
                      className="absolute top-[20%] left-[15%]"
                      size={15}
                    />
                  </span>
                  <p className="text-white">{reason}</p>
                </li>
              );
            })}
          </ul>
          <Button
            className="bg-white mt-8 rounded-3xl py-2 text-sm px-12"
            label="Read more"
          />
        </div>
        <div className="image-holder w-full md:w-1/2 relative">
          <Image alt="" src={secTwoImg2} className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
