import Container from "@/components/Reusable/Container/Container";
import ContactUsForm from "./ContactUsForm";
import {
  contactInfo,
  socialLinks,
} from "@/components/Shared/Footer/footer.data";
import clsx from "clsx";
import { RocketArrowIcon } from "@/components/Shared/Footer/Footer";

const ContactUs = () => {
  return (
    <div className="bg-secondary-50 font-Inter py-20 w-full overflow-hidden">
      <div className="w-full relative">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12 2xl:gap-16">
            {/* Left side */}
            <ContactUsForm />

            {/* Right side */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-2xl font-bold leading-9 text-white">
                Send Us Message
              </h1>
              <p className="text-primary-50 text-lg font-Inter mt-2 w-full max-w-full lg:max-w-[500px]">
                Our team is ready to assist you with any questions you might
                have about our services.
              </p>

              {/* Data */}
              <div className="flex flex-col gap-6 mt-[44px]">
                {contactInfo?.map((info, index) => (
                  <a
                    key={index}
                    href={info?.href ? info?.href : ""}
                    className="text-primary-50 font-medium leading-[30px] flex items-center gap-3 relative group w-fit"
                  >
                    <div className="bg-primary-40 size-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 text-xl">
                      {info?.icon}
                    </div>
                    <div>
                      <h1 className="font-semibold text-white leading-normal">
                        {info?.label === "Email"
                          ? "Email"
                          : info?.label === "Address"
                          ? "Address"
                          : info?.label === "Phone Number"
                          ? "Phone Number"
                          : "Working Hour"}
                      </h1>
                      <span className="text-sm">
                        {info?.href ? info?.href : info?.text}
                      </span>
                    </div>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary-whites-30 to-primary-20 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    <span
                      className={clsx(
                        "absolute -right-4 top-[11px]",
                        "opacity-0", // Start hidden
                        "-translate-x-2 translate-y-2",
                        "group-hover:opacity-100",
                        // On hover, translate UP (-y) and RIGHT (+x) significantly
                        "group-hover:-translate-y-1 group-hover:translate-x-1",
                        "transition-all duration-300 ease-out",
                        "pointer-events-none"
                      )}
                      aria-hidden="true"
                    >
                      <RocketArrowIcon />
                    </span>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <h1 className="font-semibold text-white leading-normal mt-[50px]">
                Follow us On
              </h1>
              <div className="flex items-center gap-4 mt-6">
                {socialLinks?.map((item) => (
                  <a
                    href={item?.link}
                    key={item?.name}
                    className="size-[40px] rounded-full hover:bg-primary-50 bg-primary-20 transition-all duration-300 cursor-pointer flex items-center justify-center group"
                  >
                    {item?.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
        {/* Bg gradient */}
        <div className="bg-primary-20 absolute top-36 bottom-0 right-0 z-0 w-[239px] h-[318px] rounded-full opacity-30 blur-[150px]"></div>
      </div>
    </div>
  );
};

export default ContactUs;
