"use client";
import React, { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Map, MapPin, X } from "lucide-react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactInfo = [
  {
    icons: <MdOutlineMail className="w-8 h-8" />,
    bgcolor: "#ff9590",
    link: "mailto:adesuwaaiwerioghene12@gmail.com",
    linkName: "adesuwaaiwerioghene12@gmail.com",
  },
  {
    icons: <FaGithub className="w-8 h-8" />,
    bgcolor: "#a1e7cf",
    link: "https://github.com/daysuwaa",
    linkName: "daysuwaa",
  },
  {
    icons: <MapPin className="w-7 h-7" />,
    bgcolor: "#ffb4e6",
    link: "map:lagos, nigeria",
    linkName: "Lagos, Nigeria",
  },
];

const ContactDisplay = ({
  icons,
  bgcolor,
  link,
  linkName,
  link2,
  linkName2,
}) => {
  return (
    <div className="inter-font  my-4 md:my-6  font-extralight text-[14px]">
      <div className="flex items-center gap-[10px] mb-2 ">
        <p
          style={{ backgroundColor: bgcolor }}
          className="p-2 rounded-lg text-white"
        >
          {icons}
        </p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-medium hover:text-rose-700 dark:hover:text-rose-200]`}
        >
          {linkName}
        </Link>
      </div>
      <div className="flex gap-4">
        {link2 && (
          <Link
            href={link2}
            rel="noopener noreferrer"
            target="_blank"
            className="font-medium hover:text-rose-700 dark:hover:text-rose-200"
          >
            {linkName2}
          </Link>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const [fname, setFname] = useState("");
  const [emaila, setEmaila] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const toastId = toast.loading("Sending message...");

    emailjs
      .send(
        "service_gs4zw5w",
        "template_pzsa7dm",
        {
          name: fname,
          email: emaila,
          message: message,
        },
        "7N9NF5iWRaVmXltM_"
      )
      .then(() => {
        toast.success("Message sent!", { id: toastId });
        setFname("");
        setEmaila("");
        setMessage("");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Something went wrong. Try again.", { id: toastId });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section id="section5">
      <div className="flex flex-col items-ceter justify-center min-h-screen w-full">
        <div className="text-center mb-6">
          <h2 className="text-4xl pompiere-font font-inter dark:text-white text-black mb-4">
            Let&apos;s Work Together 🚀
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        <p className="text-[14px] lg:text-[16px] inter-font font-medium text-center leading-6">
          Have a project in mind? I&apos;d love to hear about it. Send me a
          message and let&apos;s create something amazing together!
          <br></br>
          <i className="text-rose-500  leading-[40px] font-semibold">
            Looking forward to hearing from you!
          </i>
        </p>
        <div className=" grid lg:grid-cols-2 gap-6 mt-10 ">
          <div className="w-full rounded-xl shadow-lg dark:shadow-lg  bg-gradient-to-tr from-white via-gray-50 to-white dark:from-black dark:via-[#1c1c1c] dark:to-black text-black dark:text-white transition-colors duration-500 p-5">
            <h1 className="font-semibold text-3xl">Get in Touch ✨</h1>
            {ContactInfo.map((informations, index) => {
              return (
                <ContactDisplay
                  key={index}
                  icons={informations.icons}
                  bgcolor={informations.bgcolor}
                  link={informations.link}
                  linkName={informations.linkName}
                  link2={informations.link2}
                  linkName2={informations.linkName2}
                />
              );
            })}
            <h1 className="font-semibold text-2xl mb-4">Follow Me ⚡️ </h1>
            <div className="flex items-center ">
              <Link href="https://www.linkedin.com/in/adesuwa-aiwerioghene-04538b268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <CiLinkedin className=" bg-[#4c8eff] hover:bg-blue-400 text-white h-12 w-12 rounded-lg p-2 mr-4" />
              </Link>
              <Link href="https://x.com/daysuwaa_a?s=21&t=rDVI_vsgbDJYyKXnHKavNg">
                <X className="bg-[#262626] hover:bg-gray-900 h-12 w-12 rounded-lg p-1 text-white" />
              </Link>
            </div>
          </div>
          {/* form */}
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xwpbrobj"
            method="POST"
            className="w-fll rounded-xl shadow-lg dark:shadow-lg  bg-gradient-to-tr from-white via-gray-50 to-white dark:from-black dark:via-[#1c1c1c] dark:to-black text-black dark:text-white transition-colors duration-500 p-5"
          >
            <div className="mb-3">
              <label className="mb-10">Full Name</label>
              <input
                type="text"
                id="name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder="Full Name"
                className="w-full mt-4 p-2.5 lg:p-4 placeholder:text-[14px] text-[14px] bg-[white] border-[#6c6c6c] rounded border focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="mb-10">Email Address</label>
              <input
                type="email"
                id="email"
                value={emaila}
                onChange={(e) => setEmaila(e.target.value)}
                placeholder="Email Address"
                className="w-full p-2.5 mt-4 lg:p-4 placeholder:text-[14px] text-[12px] bg-[white] border-[#6c6c6c] rounded border focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="mb-10">Message</label>
              <textarea
                rows={4}
                id="message"
                value={message}
                placeholder=" Tell me about your project"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2.5 mt-4 bg-[white] placeholder:text-[14px] text-black text-[14px] border-[#6c6c6c] rounded border focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-2.5 lg:p-4 text-[14px] font-semibold text-white rounded-lg transition
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-black hover:bg-[#262626] dark:bg-rose-500/80 dark:hover:bg-rose-400/80"
    }`}
            >
              {loading ? "Sending..." : "Get in Touch"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
