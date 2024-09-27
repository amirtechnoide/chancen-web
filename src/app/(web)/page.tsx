
import { Check, LocateIcon, MapPin, UserPlus } from "lucide-react";
import Nav from "./reuseables/Nav";
import Image from "next/image";
import { headerGraduation, secTwoImg1, svgOne } from "@/lib/web/images";
import HeadSvg from "./reuseables/headSvg";
import GraySvg from "./reuseables/graySvg";
import TaggedInfo from "./reuseables/TaggedInfo";
import Button from "./reuseables/Button";
const incomeShareAgreementStory = [
  "Study now and pay later",
  "You start paying when you earn a living wage",
  "You pay a set repayment of your monthly income (Not more than 20% of what you earn)",
  "Your repayment is capped so that you're  not saddled with debt",
  "Your repayment goes towards the fund for the next generation"
]
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <section className="flex justify-between h-[50rem]">
        <section className="left">
          <h1 className="max-w-[40%] text-5xl font-bold leading-[70px]">
            <span className="text-primary ">Study Now Pay Later. </span>
            Fair Finance For Equal Access
          </h1>
          <p className="max-w-[35%] pt-7 leading-6">
            Chancen provides access to quality education that equips you for the
            modern workforce. With Income Share Agreement we invest in your
            future, and you pay us back with reinvestment when you’re
            financially able.
          </p>
        </section>
        <section className="right ">
          <HeadSvg className="absolute top-0 left-[50%]" /> 
          <GraySvg className="absolute bottom-2 left-[60%]" />
          <div className="image-holder max-w-[560px] max-h-[900px] ">
            <TaggedInfo
              className="absolute bg-primary z-10 top-[40%] right-[30%]  rounded-lg"
              label="Participants"
              number="18"
            />
            <Image
              alt=""
              src={headerGraduation}
              className="absolute bottom-[5%] right-[3%] max-w-[560px] max-h-[900px]"
            />
            <TaggedInfo
              className="absolute bg-primary z-10 top-[70%] right-[3%]  rounded-lg"
              label="Universities"
              number="72"
            />
          </div>
        </section>
      </section>
      <section className="section-one mt-[20rem] bg-zinc">
        <div className="image-holder">
          <Image alt="" src={secTwoImg1}/>
        </div>
        <div>

        </div>
        <div>
            <h1 className="text-white font-extrabold text-4xl underline underline-offset-[1rem] mb-3 ">How does it work?</h1>
          <p className="text-white font-md text-lg">
            Chancen provides access to quality education that equips you for the modern workforce. With Income 
            Share Agreement we  invest in your future, and you pay us back with reinvestment when you’re financially able.

          </p>
          <p className="text-white font-md text-lg">
          Chancen provides access to quality education that equips you for the modern workforce. With Income 
            Share Agreement we  invest in your future, and you pay us back with reinvestment when you’re financially able.

          </p>
          <Button className="bg-white rounded-3xl py-2 text-sm px-6" label="Our Product"/>
        </div>
        <div className="image-holder">
          <Image alt="" src={secTwoImg1}/>
        </div>
        <div>
          <h1 className="text-white font-extrabold text-4xl underline underline-offset-[1rem] mb-3">Why Income share agreement?</h1>
            <ul className="list-none">
              {
                incomeShareAgreementStory.map((reason,index) => {
                return (
                  <li key={index} className="flex items-center gap-4 py-2">
                    <span className="size-5 relative p-3 rounded-[50%] bg-slate-50">
                      <Check className="absolute top-[20%] left-[15%]" size={15}/>
                    </span>
                    <p className="text-white">{reason}</p>
                  </li>
                )
                })
              }
            </ul>
          <Button className="bg-white rounded-3xl py-2 text-sm px-12" label="Read more"/>
        </div>
      </section>
    </div>
  );
}
