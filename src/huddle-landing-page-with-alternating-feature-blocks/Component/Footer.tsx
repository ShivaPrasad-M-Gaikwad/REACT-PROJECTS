import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailSharp } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import FooterCard from "./FooterCard";

interface FooterListItem {
  content: string;
  href: string;
}

function Footer(): JSX.Element {
  const footerlist: FooterListItem[] = [
    { content: "About Us", href: "#" },
    { content: "What We Do", href: "#" },
    { content: "FAQ", href: "#" },
    { content: "Career", href: "#" },
    { content: "Blog", href: "#" },
    { content: "Contact Us", href: "#" },
  ];

  return (
    <>
      <FooterCard />
      <div className="h-fit md:h-[60vh] lg:p-48 md:px-24 md:py-48 w-full bg-slate-800 text-white py-2 pt-24 mt-3 flex md:flex-row md:items-center flex-col ymg">
        <div className="ymg">
          <div className="filter contrast-0 scale-150 h-[24px] w-[154px] pl-10">
            <img
              src="./huddle-landing-page-with-alternating-feature-blocks-Assets/Logo.svg"
              alt="Huddle Logo"
            />
          </div>
          <div className="location flex justify-around">
            <FaLocationDot className="w-[24px] h-[24px]" />
            <p className="leading-6 font-normal w-[85%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="phno flex justify-around">
            <FiPhoneCall className="w-[24px] h-[24px]" />
            <p className="leading-6 font-normal w-[85%]">+1-543-123-4567</p>
          </div>
          <div className="mail flex justify-around">
            <IoMailSharp className="w-[24px] h-[24px]" />
            <p className="leading-6 font-normal w-[85%]">example@huddle.com</p>
          </div>
        </div>

        <div className="links flex justify-start pl-10 md:pl-0 w-full md:justify-center md:flex-wrap">
          <ol className="flex flex-wrap flex-col md:items-center md:h-[130px] md:w-full">
            {footerlist.map((footitem, index) => (
              <li key={index} className="mb-3">
                <a href={footitem.href} className="hover:underline">
                  {footitem.content}
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div className="w-full ymg">
          <div className="Social w-full flex gap-5 justify-center">
            <FaFacebookF className="h-8 w-8 border rounded-full p-1 hover:text-pink-600 hover:border-pink-600" />
            <FaTwitter className="h-8 w-8 border rounded-full p-1 hover:text-pink-600 hover:border-pink-600" />
            <FaInstagram className="h-8 w-8 border rounded-full p-1 hover:text-pink-600 hover:border-pink-600" />
          </div>
          <div className="Copyright w-full flex justify-center mt-10">
            <p>&#169; Copyright 2018 Huddle. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
