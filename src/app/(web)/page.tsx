import { Check } from "lucide-react";
import Image from "next/image";
import { headerGraduation, secTwoImg1 } from "@/lib/web/images";
import GraySvg from "./components/graySvg";
import TaggedInfo from "./components/TaggedInfo";
import Button from "./components/Button";
const incomeShareAgreementStory = [
  "Study now and pay later",
  "You start paying when you earn a living wage",
  "You pay a set repayment of your monthly income (Not more than 20% of what you earn)",
  "Your repayment is capped so that you're  not saddled with debt",
  "Your repayment goes towards the fund for the next generation",
];
export default function Home() {
  return (
    <div>
      <div className=" grid items-baseline min-h-screen p-8  gap-96 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <section className=" grid grid-cols-2 gap-96 h-auto">
          <section className="left relative ">
            <h1 className=" text-6xl font-bold leading-[70px]">
              <span className="text-primary">Study Now Pay Later. </span>
              Fair Finance For Equal Access
            </h1>
            <p className=" pt-7 leading-6 text-xl">
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
            <p className="pt-4 leading-6 text-xl">
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
            <GraySvg className="absolute top-0 -z-10 right-[0%]" />
            {/* <GraySvg className="absolute bottom-[0px] -z-10 left-[50%]" /> */}
            <div className="image-holder">
              <TaggedInfo
                className="absolute bg-primary z-10 top-[30%] right-[30%]  rounded-lg"
                label="Participants"
                number="18"
              />
              <Image
                alt=""
                src={headerGraduation}
                className="absolute bottom-[12%] right-[3%] "
              />
              <TaggedInfo
                className="absolute bg-primary z-10 top-[60%] right-[3%]  rounded-lg"
                label="Universities"
                number="72"
              />
            </div>
          </section>
        </section>
      </div>
      <section className="section-one z-50 relative bg-zinc">
        <div className="flex justify-between">
          <div className="image-holder w-1/2 relative">
            <div className="backdrop-blur absolute size-[10rem] top-[50%]"></div>
            <div className="backdrop-blur-md absolute size-[10rem] bottom-[0%] left-[80%]"></div>
            <div className="backdrop-blur absolute size-[10rem] top-[70%] left-[20%]"></div>
            <Image alt="" src={secTwoImg1} className="w-full" />
          </div>
          <div className="w-1/2 p-[6rem]">
            <h1 className="text-white font-extrabold text-4xl underline underline-offset-[1rem] mb-3 ">
              How does it work?
            </h1>
            <p className="text-white py-3 font-md text-lg">
              Chancen provides access to quality education that equips you for
              the modern workforce. With Income Share Agreement we invest in
              your future, and you pay us back with reinvestment when you’re
              financially able.
            </p>
            <p className="text-white font-md text-lg">
              Chancen provides access to quality education that equips you for
              the modern workforce. With Income Share Agreement we invest in
              your future, and you pay us back with reinvestment when you’re
              financially able.
            </p>
            <Button
              className="bg-white mt-8 rounded-3xl py-2 text-sm px-6"
              label="Our Product"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2 p-[6rem]">
            <h1 className="text-white font-extrabold text-4xl underline underline-offset-[1rem] mb-3">
              Why Income share agreement?
            </h1>
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
          <div className="image-holder w-1/2">
            <Image alt="" src={secTwoImg1} className="w-full" />
          </div>
        </div>
      </section>
      <section className="section-two mt-[7rem]">
        <h1 className="text-4xl  font-semibold text-center underline underline-offset-[1rem] ">
          University Partner
        </h1>
        <div></div>
      </section>
    </div>
  );
}
