import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { LuArrowRightFromLine } from "react-icons/lu";
import { FaSquareGithub, FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { SiGmail, SiMedium } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";
const links: { name: string; url: string; icon: IconType; user: string }[] = [
  {
    name: "GitHub",
    url: "https:github.com/yansh07/",
    user: "@yansh07",
    icon: FaSquareGithub,
  },
  {
    name: "E-Mail",
    url: "mailto:pksingh69313@gmail.com",
    user: "pksingh69313@gmail.com",
    icon: SiGmail,
  },
  {
    name: "Twitter(X)",
    url: "https://x.com/yansh_08/",
    user: "@yansh_08",
    icon: FaSquareXTwitter,
  },
  {
    name: "Medium",
    url: "https://medium.com/@yansh08/",
    user: "@yansh08",
    icon: SiMedium,
  },
  {
    name: "Discord",
    url: "https://discord.gg/Yzupbvgs",
    user: "@yansh8",
    icon: FaDiscord,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/916203617455?text=Hi%20I%20want%20to%20connect!",
    user: "priyanshu",
    icon: FaWhatsappSquare,
  },
];

const Contact = () => {
  return (
    <div className="mt-16">
      <div className="border border-neutral-200 dark:border-neutral-800 ">
        <h1 className="m-4 font-mono font-bold text-2xl dark:text-neutral-100">
          Contact me
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {links.map((icons, idx) => {
          const Icon = icons.icon;
          return (
            <div
              key={idx}
              className="dark:text-neutral-300 cursor-pointer border-b md:border-r border-neutral-200 dark:border-neutral-800 p-6 flex gap-6"
            >
              {/* link icons */}
              <div className="hover:scale-125 transition-all duration-300 hover:rotate-3">
                <Icon className="text-4xl" />
              </div>

              {/* link name  */}
              <div className="font-mono font-semibold text-lg tracking-tighter">
                {icons.name}
                <div className="text-sm font-medium flex gap-8">
                  <Link href={`${icons.url}`} className="flex gap-8">
                    <span>{icons.user}</span>
                    <span>
                      <LuArrowRightFromLine className="text-lg  hover:scale-125 transition-all duration-300" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
