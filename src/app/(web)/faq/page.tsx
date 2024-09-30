import FAGHero from "@/assets/images/FAQheroimage.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { AlarmClock, MapPin, MessageCircle } from "lucide-react";
import { Fragment } from "react";

const FAQPage = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${FAGHero.src})`,
        }}
        className=" min-h-[70vh] bg-no-repeat bg-top bg-[length:100vw_auto] flex flex-col"
      >
        <div className="flex-grow bg-slate-950/60 flex ">
          <div className="container mx-auto flex flex-grow flex-col text-neutral-400 justify-end my-20 gap-12">
            <h2 className="text-6xl font-semibold">FAQs</h2>
            <p className="w-1/2 text-xl font-semibold">
              Everything you need to know about Chancen and Seven international
              University
            </p>
            <div>
              <div className="w-[5rem] h-3 bg-neutral-400" />
              <Separator className="bg-neutral-400" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-auto grid grid-cols-2 gap-4 container mx-auto py-24">
        <div className="flex-3 ">
          <h2 className="text-4xl font-bold">Common Questions</h2>
          <div className="pl-6 py-4">
            <p className="text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              temporibus similique eius
            </p>
            {faqData?.map((items, i) => (
              <Fragment key={i + "faqData"}>
                <Collapsible defaultOpen={items?.isOpen}>
                  <CollapsibleTrigger className="text-xl font-bold py-4 w-full text-start">
                    {items?.title}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="text-muted-foreground pb-4 ">
                    {items?.desc}
                  </CollapsibleContent>
                </Collapsible>
                <Separator />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Card
            style={{
              backgroundImage: `url(${FAGHero.src})`,
            }}
            className="text-background overflow-hidden bg-no-repeat bg-cover bg-top w-2/3 h-fit"
          >
            <div className="bg-slate-950/60 p-4">
              <CardHeader className="flex flex-col gap-4">
                <CardTitle className="text-2xl font-semibold">
                  {`Didn't find the Answer? `}
                  <br />
                  {` Ask us Questions`}{" "}
                </CardTitle>
                <CardDescription className="mt-4 text-slate-300 ">
                  Call us directly and submit a sample or email us
                </CardDescription>
                <Separator className="bg-slate-300/50 " />
              </CardHeader>
              <CardContent className="flex flex-col gap-8">
                {cardData?.map((items, i) => {
                  const Icons = items?.icon;
                  return (
                    <div
                      key={i + "cardData"}
                      className="flex items-center gap-6"
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-neutral-600 rounded-full">
                        <Icons className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">{items?.title}</h3>
                        <p className="text-slate-300">{items?.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="text-foreground rounded-full w-full"
                >
                  Get in tourch with us
                </Button>
              </CardFooter>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

const cardData = [
  {
    title: "Address Business",
    desc: (
      <span>
        Seven International University <br /> sable, Bonamoussadi
      </span>
    ),
    icon: MapPin,
  },
  {
    title: "Contact us",
    desc: (
      <span>
        Call us : (+237) 109-6666 ,<br /> Seveninternationaluniversity@gmail.com
      </span>
    ),
    icon: MessageCircle,
  },
  {
    title: "Working Time",
    desc: (
      <span>
        Mon - sat : 8.00am - 6.00pm <br /> Holiday : Closed
      </span>
    ),
    icon: AlarmClock,
  },
];

const faqData = [
  {
    title: "What is an ISA",
    desc: `We work with a variety of clients. We work with the heads of
              minucipalities transportation planning, traffic engineering or economic developement departments and with mayors' offices`,
    isOpen: true,
  },
  {
    title: "What is Chancen ISA",
    desc: `We work with a variety of clients. We work with the heads of
              minucipalities transportation planning, traffic engineering or economic developement departments and with mayors' offices`,
  },
  {
    title: "How do i became a Chancen international member",
    desc: `We work with a variety of clients. We work with the heads of
              minucipalities transportation planning, traffic engineering or economic developement departments and with mayors' offices`,
  },
  {
    title: "Is the ISA a scholarship?",
    desc: `We work with a variety of clients. We work with the heads of
              minucipalities transportation planning, traffic engineering or economic developement departments and with mayors' offices`,
  },
];

export default FAQPage;
