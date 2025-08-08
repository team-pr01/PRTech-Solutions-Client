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
      link: "https://www.facebook.com/prtechsolutions01",
      icon: (
        <FaFacebook className=" text-white transition duration-300 text-[22px]" />
      ),
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/prtech_solutions",
      icon: (
        <FaInstagram className=" text-white transition duration-300 text-[22px]" />
      ),
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/prtech-solutions",
      icon: (
        <FaLinkedin className=" text-white transition duration-300 text-[22px]" />
      ),
    },
    {
      name: "WhatsApp",
      link: "https://wa.me/919359963665",
      icon: (
        <FaWhatsapp className=" text-white transition duration-300 text-[22px]" />
      ),
    },
  ];

  export const footerLinks = [
    {
      heading: "Company",
      links: [
        { name: "About Us", link: "/about-us" },
        { name: "Our Services", link: "/our-services" },
        // { name: "Recent Works", link: "/our-projects" },
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
      icon: <IoLocationSharp className="text-primary-50 group-hover:text-white" />,
      text: "Mumbai, India",
    },
    {
      label : "Phone Number",
      icon: <MdSettingsPhone className="text-primary-50 group-hover:text-white" />,
      href: "tel:+91 9359963665",
      text: "+91 9359963665",
    },
    {
      label : "Email",
      icon: <MdEmail className="text-primary-50 group-hover:text-white" />,
      href: "mailto:hello@prtech-solutions.com",
      text: "hello@prtech-solutions.com",
    },
    {
      label : "Working Hour",
      icon: <MdAccessTimeFilled className="text-primary-50 group-hover:text-white" />,
      text: "Monday - Saturday: 9:00 AM - 10:00 PM",
    },
  ];