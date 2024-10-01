"use client";

import Image from "next/image";
import { headerGraduation } from "@/lib/web/images";
import GraySvg from "./components/graySvg";
import TaggedInfo from "./components/TaggedInfo";
import PartnerSection from "./components/PartnerSection";
import ContactSection from "./components/ContactSection";
import HowItWorks from "./components/HowItWorks";
import { Separator } from "@/components/ui/separator";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  AOS.init();
  return (
    <div>
      <div className=" grid items-baseline min-h-screen p-8  gap-96 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <section className=" grid md:grid-cols-2 md:gap-96 h-auto">
          <section className="left relative" data-aos="fade-right">
            <h1 className="text-3xl md:text-6xl font-bold md:leading-[70px]">
              <span className="text-primary">Study Now Pay Later. </span>
              Fair Finance For Equal Access
            </h1>
            <p className="pt-4 md:pt-7 leading-6 text-sm md:text-xl">
              Chancen provides access to quality education that equips you for
              the modern workforce. With Income Share Agreement we invest in
              your future, and you pay us back with reinvestment when you’re
              financially able. Chancen is already present in Cameroon, helping
              students achieve their educational goals. Our mission is to make
              education accessible to everyone, regardless of their financial
              background. We believe that education is a right, not a privilege,
              and we are committed to breaking down the barriers that prevent
              talented individuals from reaching their full potential.
            </p>
            <p className="pt-2 md:pt-4 leading-6 text-md md:text-xl">
              Join us and be part of a community that values education and equal
              opportunities.
              {/* Together, we can create a future where everyone has
              the chance to succeed. By partnering with us, you are not only
              investing in your own future but also contributing to the
              development of the next generation of leaders and innovators. */}
            </p>
          </section>
          <section className="right ">
            {/* <HeadSvg className="absolute top-0 -z-10 left-[50%]" /> */}
            <GraySvg className="hidden sm:block lg:absolute top-0 -z-10 right-[0%]" />
            {/* <GraySvg className="absolute bottom-[0px] -z-10 left-[50%]" /> */}
            <div className="image-holder sm:flex">
              <TaggedInfo
                className="hidden sm:block lg:absolute  bg-primary z-10 md:top-[30%]  right-[30%]  rounded-lg"
                label="Participants"
                number="18"
              />
              <Image
                alt=""
                src={headerGraduation}
                className="md:absolute  md:bottom-[10vh] md:right-[3%] "
              />
              <TaggedInfo
                className="hidden sm:block lg:absolute   bg-primary z-10 top-[60%] right-[3%]  rounded-lg"
                label="Universities"
                number="72"
              />
            </div>
          </section>
        </section>
      </div>
      <HowItWorks />
      <section className="section-two mt-[7rem]">
        <h1
          className="text-4xl font-semibold text-center mx-auto  w-fit"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          University Partner
          <div className="laptop:w-full w-2/3">
            <div className="w-[5rem] h-1 bg-zinc" />
            <Separator className="bg-zinc" />
          </div>
        </h1>
        <PartnerSection />

        <ContactSection />
      </section>
    </div>
  );
}
