"use client";
import Textarea from "@/components/Reusable/TextArea/TextArea";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";
import "../../HomePage/OurProjects/OurProjects.css";

type TFormData = {
  name: string;
  email: string;
  phoneNumber?: string;
  company?: string;
  message: string;
};
const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const handleSendMessage = (data: TFormData) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="animated-gradient-border w-full rounded-2xl lg:w-1/2 z-0">
    <div className="font-Inter bg-faq-gradient p-5 rounded-2xl bg-secondary-60 z-50">
      <h1 className="text-2xl font-bold leading-9 text-white">
        Send Us Message
      </h1>

      <form onSubmit={handleSubmit(handleSendMessage)} className="flex flex-col gap-6 mt-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TextInput
            label="Full Name"
            placeholder="Your Name"
            error={errors.name}
            {...register("name", {
              required: "Name is required",
            })}
          />
          <TextInput
            label="Email"
            type="email"
            placeholder="Your Email"
            error={errors.email}
            {...register("email", {
              required: "Email is required",
            })}
          />
          <TextInput
            label="Phone Number"
            placeholder="Your Phone Number"
            error={errors.phoneNumber}
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
          />
          <TextInput
            label="Company"
            isRequired={false}
            placeholder="Your Company Name"
            error={errors.company}
            {...register("company", {
              required: "Company name is required",
            })}
          />
        </div>
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
      </form>
    </div>
    </div>
  );
};

export default ContactUsForm;
