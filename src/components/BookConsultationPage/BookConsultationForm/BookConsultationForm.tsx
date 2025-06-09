"use client";
import Textarea from "@/components/Reusable/TextArea/TextArea";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import "../../HomePage/OurProjects/OurProjects.css";
import FillBgOnHover from "@/components/AnimatedButtons/FillBgOnHover/FillBgOnHover";
import { CgArrowTopRight } from "react-icons/cg";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

type TFormData = {
  name: string;
  email: string;
  phoneNumber?: string;
  company?: string;
  message: string;
};

const BookConsultationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormData>();

  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail: SubmitHandler<TFormData> = () => {
    if (!form.current) {
      toast.error(
        "An unexpected error occurred. Please refresh and try again."
      );
      return;
    }

    setIsLoading(true);

    // Make sure your EmailJS credentials are correct and are stored
    // securely, for example, in environment variables.
    emailjs
      .sendForm(
        "service_35a8sxq",
        "template_0743afm",
        form.current,
        "i-4z2W4xgSOfPtEtl"
      )
      .then(
        () => {
          toast.success("Message sent successfully! We'll be in touch soon.");
          reset(); // Clear the form fields on success
        },
        (error) => {
          console.error("EMAILJS FAILED...", error);
          toast.error("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        // This ensures setIsLoading(false) is called whether it succeeds or fails.
        setIsLoading(false);
      });
  };
  const slideUpVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: (delay = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const viewportSettings = {
    once: true,
    amount: 0.1,
  };

  return (
    // Keep the outer div structure as is
    <div className="animated-gradient-border w-full rounded-2xl lg:w-1/2 p-1">
      <div className="font-Inter p-5 rounded-2xl bg-secondary-60 z-50 w-full h-full">
        <motion.h1
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={slideUpVariant}
          className="text-2xl font-bold leading-9 text-white"
        >
          Have A Doubt? Clear It Today With Our Experts.
        </motion.h1>
        <motion.p
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={slideUpVariant}
          className="text-primary-50 text-sm lg:text-base font-Inter mt-3 w-full max-w-full lg:max-w-[500px]"
        >
          Our team is ready to assist you with any questions you might have
          about our services.
        </motion.p>

        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className="flex flex-col gap-6 mt-[50px]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={slideUpVariant}
            >
              <TextInput
                label="Full Name"
                placeholder="Your Name"
                error={errors.name}
                {...register("name", {
                  required: "Name is required",
                })}
              />
            </motion.div>
            <motion.div
              custom={0.35}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={slideUpVariant}
            >
              <TextInput
                label="Email"
                type="email"
                placeholder="Your Email"
                error={errors.email}
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </motion.div>
            <motion.div
              custom={0.4}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={slideUpVariant}
            >
              <TextInput
                label="Phone Number"
                placeholder="Your Phone Number"
                error={errors.phoneNumber}
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                })}
              />
            </motion.div>
            <motion.div
              custom={0.45}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={slideUpVariant}
            >
              <TextInput
                label="Company"
                isRequired={false}
                placeholder="Your Company Name"
                error={errors.company}
                {...register("company")}
              />
            </motion.div>
          </div>
          <motion.div
            custom={0.5}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={slideUpVariant}
          >
            <Textarea
              label="Message"
              placeholder="Write message here..."
              rows={6}
              error={errors.message}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 15,
                  message: "Message must be at least 15 characters",
                },
              })}
            />
          </motion.div>

          {/* Animate the button */}
             <motion.button
            type="submit"
            disabled={isLoading} // FIX 3: Disable button during submission
            custom={0.6}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={slideUpVariant}
            className="justify-self-end"
          >
            <FillBgOnHover classNames="w-fit text-sm md:text-base px-5 lg:px-[35px] py-3 md:py-3 lg:py-[15px] group bg-primary-20 border-none text-white flex items-center gap-1 justify-self-end rounded-xl">
              {isLoading ? "Scheduling Consultation..." : "Schedule Consultation "}
              {!isLoading && (
                <CgArrowTopRight className="text-2xl group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-2" />
              )}
            </FillBgOnHover>
          </motion.button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default BookConsultationForm;
