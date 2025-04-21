import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdSettingsPhone } from "react-icons/md"; 
 
 export const socialLinks = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/prtechsolutions/",
      icon: (
        <FaFacebook className="text-secondary-30 group-hover:text-white transition duration-300 text-[22px]" />
      ),
    },
    {
      name: "Instagram",
      link: "https://www.facebook.com/prtechsolutions/",
      icon: (
        <FaInstagram className="text-secondary-30 group-hover:text-white transition duration-300 text-[22px]" />
      ),
    },
    {
      name: "Linkedin",
      link: "https://www.facebook.com/prtechsolutions/",
      icon: (
        <FaLinkedin className="text-secondary-30 group-hover:text-white transition duration-300 text-[22px]" />
      ),
    },
    {
      name: "WhatsApp",
      link: "https://www.facebook.com/prtechsolutions/",
      icon: (
        <FaWhatsapp className="text-secondary-30 group-hover:text-white transition duration-300 text-[22px]" />
      ),
    },
  ];

  export const footerLinks = [
    {
      heading: "Company",
      links: [
        { name: "About Us", link: "/about-us" },
        { name: "Our Services", link: "/our-services" },
        { name: "Recent Works", link: "/our-works" },
        { name: "Blogs", link: "/blogs" },
        { name: "Contact Us", link: "/contact-us" },
      ],
    },
    {
      heading: "Services",
      links: [
        { name: "Web Development", link: "/our-services" },
        { name: "Mobile Development", link: "/our-services" },
        { name: "UI/UX Design", link: "/our-services" },
        { name: "Digital Marketing", link: "/our-services" },
        { name: "SEO & Analysis", link: "/our-services" },
      ],
    },
  ];

  export const contactInfo = [
    {
      icon: <IoLocationSharp className="text-primary-50" />,
      text: "Kathmandu, Nepal",
    },
    {
      icon: <MdSettingsPhone className="text-primary-50" />,
      href: "+91 673463746",
    },
    {
      icon: <MdEmail className="text-primary-50" />,
      href: "hello@prtech-solutions.com",
    },
  ];