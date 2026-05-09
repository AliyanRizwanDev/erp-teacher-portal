import React, { useState, type ReactNode } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { cn } from "@/lib/utils";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  className?: string;
  labelClassName?: string;
  placeholder?: string;
  isPassword?: boolean;
  isDatePicker?: boolean;
  customIconRender?: (visible: boolean) => React.ReactNode;
  rowVariant?: boolean;
  icon?: React.ReactNode;
  error?: string | { message: string };
  // Date picker specific props
  onDateChange?: (date: Date | undefined) => void;
  dateValue?: Date;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  className = "",
  labelClassName = "",
  placeholder = "",
  isPassword = false,
  isDatePicker = false,
  customIconRender,
  rowVariant,
  icon,
  error,
  onDateChange,
  dateValue,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const errorMessage =
    typeof error === "string" ? error : (error as { message: string })?.message;
  const hasError = !!error;

  return (
    <div
      className={`flex ${
        rowVariant
          ? "lg:flex-row flex-col lg:!items-baseline lg:!justify-center flex-nowrap"
          : "flex-col"
      }  gap-2.5 flex-1`}
    >
      <label className={`roboto-font text-base font-medium ${labelClassName}`}>
        {label}
      </label>

      {isDatePicker ? (
        <DatePicker
          placeholder="YYYY-MM-DD"
          className={cn(
            "rounded-md h-10 w-full bg-[#e8ebef] text-primaryParaColor",
            hasError && "border-red-500",
            className
          )}
          date={dateValue}
          onDateChange={onDateChange}
        />
      ) : isPassword ? (
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className={cn(
              "py-2 px-3 rounded-sm border-primaryBorderColor text-primaryPlaceHolderColor pr-10",
              hasError && "border-red-500",
              className
            )}
            {...props}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primaryPlaceHolderColor cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {customIconRender ? (
              customIconRender(showPassword)
            ) : showPassword ? (
              <FaRegEye className="text-primaryPlaceHolderColor cursor-pointer" />
            ) : (
              <FaRegEyeSlash className="text-primaryPlaceHolderColor cursor-pointer" />
            )}
          </button>
        </div>
      ) : (
        <div className="relative">
          <Input
            placeholder={placeholder}
            className={cn(
              "py-2 px-3 rounded-sm border-primaryBorderColor text-primaryPlaceHolderColor ",
              hasError && "border-red-500",
              icon && "pr-10",
              className
            )}
            {...props}
          />
          {icon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {icon}
            </div>
          )}
        </div>
      )}

      {errorMessage && (
        <p className="text-red-500 roboto-font text-xs">{errorMessage}</p>
      )}
    </div>
  );
};
