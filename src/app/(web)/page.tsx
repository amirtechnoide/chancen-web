import Nav from "./reuseables/Nav";
import Image from "next/image";
import { headerGraduation, secTwoImg1 } from "@/lib/web/images";
import HeadSvg from "./reuseables/headSvg";
import GraySvg from "./reuseables/graySvg";
import TaggedInfo from "./reuseables/TaggedInfo";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]  items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <section className="flex justify-between">
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
              className="absolute bg-primary z-30 top-[40%] right-[30%]  rounded-lg"
              label="Participants"
              number="18"
            />
            <Image
              alt=""
              src={headerGraduation}
              className="absolute bottom-[5%] right-[3%] max-w-[560px] max-h-[900px]"
            />
            <TaggedInfo
              className="absolute bg-primary z-30 top-[70%] right-[3%]  rounded-lg"
              label="Universities"
              number="72"
            />
          </div>
        </section>
      </section>
      <section className="section-one bg-zinc">
        <div className="image-holder">
          <Image alt="" src={secTwoImg1} />
        </div>
        <div></div>
        <div>
          <h1>How does it work?</h1>
        </div>
        <div className="image-holder">
          <Image alt="" src={secTwoImg1} />
        </div>
      </section>
    </div>
  );
}
