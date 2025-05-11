"use client";
import Textarea from "@/components/Reusable/TextArea/TextArea";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";
import "../../HomePage/OurProjects/OurProjects.css";
import FillBgOnHover from "@/components/AnimatedButtons/FillBgOnHover/FillBgOnHover";
import { CgArrowTopRight } from "react-icons/cg";
import { motion } from "framer-motion";

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
    formState: { errors },
  } = useForm<TFormData>();

  const handleSendMessage = (data: TFormData) => {
    console.log("Form Data:", data);
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
          onSubmit={handleSubmit(handleSendMessage)}
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
                {...register("company", {
                  required: "Company name is required",
                })}
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
          <motion.div
            custom={0.6}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={slideUpVariant}
            className="justify-self-end"
            // type="submit"
          >
            <FillBgOnHover classNames="w-fit text-sm md:text-base px-5 lg:px-[35px] py-3 md:py-3 lg:py-[15px] group bg-primary-20 border-none text-white flex items-center gap-1 justify-self-end rounded-xl">
              Schedule Consultation
              <CgArrowTopRight className="text-2xl group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-2" />
            </FillBgOnHover>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default BookConsultationForm;
