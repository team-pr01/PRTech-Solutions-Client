import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  error?: FieldError;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, name, placeholder = "", rows = 4, error, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2 font-Inter">
        <label htmlFor={name} className="text-neutral-65">
          {label}
          <span className="text-neutral-30"> *</span>
        </label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={rows}
          ref={ref}
          className={`px-[18px] py-[14px] rounded-lg bg-secondary-10 border border-neutral-70/30 focus:outline-none focus:border-primary-20/50 transition duration-300 text-neutral-50 ${error ? "border-red-500" : "border-neutral-75"
          }`}
          {...rest}
        ></textarea>
        {error && <span className="text-red-500 text-sm">{error.message}</span>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
