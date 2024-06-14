import React from "react";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import Link from "next/link";

const ContactInfo = [
  {
    icons: <MdOutlineMail className="w-8 h-8" />,
    name: "Email",
    link: "mailto:daysuwaaiwerioghene@icloud.com",
    linkName: "daysuwaaiwerioghene@icloud.com",
  },
  {
    icons: <FaGithub className="w-8 h-8" />,
    name: "Github",
    link: "https://github.com/daysuwaa",
    linkName: "daysuwaa",
  },
  {
    icons: <CiShare2 className="w-7 h-7" />,
    name: "Social Medias",
    link: "https://www.linkedin.com/in/adesuwa-aiwerioghene-04538b268",
    link2: "https://x.com/daysuwaa_a",
    linkName: <CiLinkedin className="w-8 h-8" />,
    linkName2: <FaXTwitter className="w-8 h-8" />,
  },
];

const ContactDisplay = ({ icons, name, link, linkName, link2, linkName2 }) => {
  return (
    <div className="inter-font my-4 md:my-10 md:mx-auto  justify-center font-extralight text-[14px]">
      <div className="flex items-center gap-[10px] mb-2">
        <p className="text-fuchsia-700 dark:text-fuchsia-300 ">{icons}</p>
        <p>{name}</p>
      </div>
      <div className="flex gap-4">
        {link && (
          <Link
            href={link}
            className="font-medium hover:text-fuchsia-700 dark:hover:text-fuchsia-200"
          >
            {linkName}
          </Link>
        )}
        {link2 && (
          <Link
            href={link2}
            className="font-medium hover:text-fuchsia-700 dark:hover:text-fuchsia-200"
          >
            {linkName2}
          </Link>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="section4">
      <h1 className="text-3xl text-center pompiere-font">
        -{" "}
        <span className="mx-3 font-inter gradienttext dark:bg-gradient-to-r from-fuchsia-400 to-[#251729]">
          Get in Touch.
        </span>
      </h1>
      <p className="text-[13px] inter-font font-medium text-center leading-6">
        I am always open to new opportunities and collaborations. If you are
        interested in working with me or have any questions about my projects,
        feel free to reach out to me through any of these platforms!
        <br></br>
        <i className="text-fuchsia-400 font-semibold">
          Looking forward to hearing from you!
        </i>
      </p>
      <div className="grid md:grid-cols-3 items-center">
        {ContactInfo.map((informations, index) => {
          return (
            <ContactDisplay
              key={index}
              icons={informations.icons}
              name={informations.name}
              link={informations.link}
              linkName={informations.linkName}
              link2={informations.link2}
              linkName2={informations.linkName2}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
