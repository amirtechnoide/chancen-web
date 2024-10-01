"use client";
import React, { Fragment, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus } from "lucide-react";

type Props = {
  data: {
    title: string;
    desc: string;
    isOpen?: boolean;
  }[];
  title: string;
  describtion: string;
};

const CustomCollapsible = ({ data, title, describtion }: Props) => {
  const [openTab, setOpenTab] = useState<number[]>([]);
  const handleTabChange = (value: boolean, i: number) => {
    if (value) {
      setOpenTab((prev) => [...prev, i]);
    } else {
      setOpenTab((prev) => prev.filter((index) => index !== i));
    }
  };
  return (
    <Fragment>
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="pl-6 py-4">
        <div className="w-full flex flex-col gap-6 py-4">
          <p className="text-muted-foreground">{describtion}</p>
          <div className="w-1/2">
            <div className="w-1/3 h-1 bg-zinc" />
            <Separator />
          </div>
        </div>
        {data?.map((items, i) => {
          const Icon = openTab.includes(i) ? Minus : Plus;

          return (
            <Fragment key={i + "faqData"}>
              <Collapsible
                onChangeCapture={(capture) => console.log({ capture })}
                onOpenChange={(value) => handleTabChange(value, i)}
                // defaultOpen={items?.isOpen}
              >
                <CollapsibleTrigger className="text-xl font-bold py-4 w-full text-start">
                  <div className="flex w-full items-center justify-between">
                    {items?.title}
                    <Icon className="w-5 h-5 " />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="text-muted-foreground pb-4 ">
                  {items?.desc}
                </CollapsibleContent>
              </Collapsible>
              <Separator />
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CustomCollapsible;
