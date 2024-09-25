import { Button } from "@/components/ui/button";
import { LocateIcon, MapPin, UserPlus } from "lucide-react";
import Nav from "./reuseables/Nav";
import Image from "next/image";
import { svgOne } from "@/lib/web/images";
import HeadSvg from "./reuseables/headSvg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <section className="flex items-center justify-between">
        <section className="left">
          <h1 className="bg-zinc">
            <span className="text-zinc">Study Now Pay Later.</span>
            Fair Finance For Equal Access
          </h1>
          <p>
            Chancen provides access to quality education that equips you for the
            modern workforce. With Income Share Agreement we invest in your
            future, and you pay us back with reinvestment when you’re
            financially able.
          </p>
        </section>
        <section className="left w-[400px] h-[100px] ">
          <HeadSvg className="absolute top-0 left-[50%]"/>
        </section>
      </section>
      <MapPin color="red" />
    </div>
  );
}
