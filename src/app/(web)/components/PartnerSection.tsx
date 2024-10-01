"use client";
import Image from "next/image";
import React from "react";
import siuLogo from "@/assets/images/siu.png";
import { Separator } from "@/components/ui/separator";

type Props = {};

const PartnerSection = (props: Props) => {
  return (
    <div className="bg-white py-12 mt-24 md:p-12">
      {/* Header Section */}

      <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-bold text-green-700">
            Seven International University
          </h1>
          <p className="mt-4 text-lg">
            A Seven University Education Offers An Experience That Is As
            Innovative, Thorough, And Multidimensional As You Are. Are You Ready
            To Take On The Challenge Of Your Life – Preparing For A Life's Work
            Creating Change?
          </p>
          <p className="mt-2">
            Prepare To Be Challenged Academically And Develop The Skills You
            Need To Solve The World’s Most Complex Problems.
          </p>
          <p className="mt-2">
            Our Undergraduate Program Allows You To Experience The World
            First-Hand While Developing The Skills You Need To Change It.
          </p>
        </div>

        <div className="md:w-1/2">
          <Image
            src={siuLogo}
            alt="Seven International University"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-12 mt-24">
        <div>
          <h1 className="text-4xl my-10 font-semibold text-center w-fit mx-auto ">
            Our Partners Institutions
            <div className="laptop:w-full w-2/3">
              <div className="w-[5rem] h-1 bg-neutral-400" />
              <Separator className="bg-neutral-400/50" />
            </div>
          </h1>
          <p className="text-center text-xl p-8 w-[60%] mx-auto">
            Chancen International is looking to partner with education
            institutions that strive for offering quality education that will
            lead to employment. Through the Future of Work Fund, we aim to
            finance 10,000 students across various countries: Rwanda and South
            Africa for now.
          </p>
        </div>
        <div className="overflow-hidden py-12">
          <div className="flex justify-center items-center gap-10 flex-wrap space-x-8 animate-marquee">
            {[
              "1.png",
              "2.png",
              "3.png",
              "4.png",
              "5.png",
              "6.png",
              "7.png",
              "8.png",
            ].map((logo, index) => (
              <div
                key={index}
                className=" bg-white rounded-md hover:shadow-lg h-auto transition-transform duration-300 transform hover:scale-150"
              >
                <Image
                  src={`/partners/${logo}`}
                  alt="Partner logo"
                  width={150}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Us Section */}

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PartnerSection;
