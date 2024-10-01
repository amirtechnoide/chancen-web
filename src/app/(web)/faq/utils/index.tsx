import { AlarmClock, MapPin, MessageCircle } from "lucide-react";

export const cardData = [
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
      <span className="w-full">
        Call us : (+237) 109-6666 ,<br />
        <span className="desktop:text-sm lg-desktop:text-base text-xs ">
          Seveninternationaluniversity@gmail.com
        </span>
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

export const faqData = [
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
