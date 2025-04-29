import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAccessTimeFilled, MdEmail, MdSettingsPhone } from "react-icons/md"; 
 
 export const socialLinks = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/prtechsolutions/",
      icon: (
        <FaFacebook className="group-hover:text-secondary-30 text-white transition duration-300 text-[22px]" />
      ),
    },
    {
      name: "Instagram",
      link: "https://www.facebook.com/prtechsolutions/",
      icon: (
        <FaInstagram className="group-hover:text-secondary-30 text-white transition duration-300 text-[22px]" />
      ),
    },
    {
      name: "Linkedin",
      link: "https://www.facebook.com/prtechsolutions/",
      icon: (
        <FaLinkedin className="group-hover:text-secondary-30 text-white transition duration-300 text-[22px]" />
      ),
    },
    {
      name: "WhatsApp",
      link: "https://www.facebook.com/prtechsolutions/",
      icon: (
        <FaWhatsapp className="group-hover:text-secondary-30 text-white transition duration-300 text-[22px]" />
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
      label : "Address",
      icon: <IoLocationSharp className="text-primary-50" />,
      text: "Kathmandu, Nepal",
    },
    {
      label : "Phone Number",
      icon: <MdSettingsPhone className="text-primary-50" />,
      href: "cell:+91 673463746",
    },
    {
      label : "Email",
      icon: <MdEmail className="text-primary-50" />,
      href: "mailto:hello@prtech-solutions.com",
    },
    {
      label : "Working Hour",
      icon: <MdAccessTimeFilled className="text-primary-50" />,
      text: "Monday - Saturday: 9:00 AM - 10:00 PM",
    },
  ];