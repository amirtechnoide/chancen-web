import { chancenlogo } from "@/lib/web/images";
import { headerLinks } from "@/lib/web/navLinks";
import Image from "next/image";
import React from "react";
const Nav = () => {
  return (
    <div className="w-[92%] mx-auto">
      <section className="flex items-center justify-between relative z-50">
        <div>
          <Image alt="" src={chancenlogo} width={200} height={200} />
        </div>
        <ul className="flex items-center gap-4">
          {headerLinks.map((linkObj) => {
            return (
              <li
                key={linkObj.name}
                className="hover:text-primary text-white"
              >
                <a href={linkObj.route}>{linkObj.name}</a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Nav;
