import FAGHero from "@/assets/images/FAQheroimage.png";
import cardImage from "@/assets/images/cardImage.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CustomCollapsible from "./components/Colapsible";
import { cardData, faqData } from "./utils";

const FAQPage = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${FAGHero.src})`,
        }}
        className=" min-h-[70vh] bg-no-repeat bg-top desktop:bg-[length:100vw_auto] bg-cover flex flex-col"
      >
        <div className="flex-grow bg-slate-950/60 flex px-8">
          <div className="container mx-auto flex flex-grow flex-col text-neutral-400 justify-end my-28 gap-12">
            <h2 className="text-6xl font-semibold">FAQs</h2>
            <p className="laptop:w-1/2 w-2/3 text-xl font-semibold">
              Everything you need to know about Chancen and Seven international
              University
            </p>
            <div className="laptop:w-1/2 w-2/3">
              <div className="w-[5rem] h-1 bg-zinc" />
              <Separator className="bg-zinc" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-auto grid laptop:grid-cols-2 grid-cols-1 laptop:gap-4 gap-12 container mx-auto py-24 px-6">
        <div className="flex-3 ">
          <CustomCollapsible
            data={faqData}
            describtion="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              temporibus similique eius"
            title="Common Questions"
          />
        </div>
        <div className="flex w-full lg-desktop:justify-end justify-center ">
          <Card
            style={{
              backgroundImage: `url(${cardImage.src})`,
            }}
            className="text-background overflow-hidden bg-no-repeat bg-cover bg-top laptop:w-2/3 w-full h-fit"
          >
            <div className="bg-slate-800/90 p-4">
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
                      className="grid desktop:grid-cols-[1fr,7fr] laptop:grid-cols-1 grid-cols-[1fr,7fr] items-center gap-2 lg-desktop:gap-2 desktop:gap-4 "
                    >
                      <div className="  self-center justify-self-center ">
                        <div className="w-8 h-8 flex items-center justify-center  bg-neutral-600 rounded-full">
                          <Icons className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 w-full text-start desktop:text-start laptop:text-center ">
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

export default FAQPage;
