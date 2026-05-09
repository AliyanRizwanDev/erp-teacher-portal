import React, { type ReactNode, useState, useRef, useEffect } from "react";
import { type FieldError } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface DropdownFieldProps {
  label?: ReactNode;
  className?: string;
  labelClassName?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string;
  options: { value: string; label: string }[];
  error?: string | FieldError | undefined;
  rowVariant?: boolean;
  sliceLength?: number;
  searchable?: boolean;
}

export const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  className = "",
  labelClassName = "",
  placeholder = "",
  onChange,
  value,
  options,
  error,
  rowVariant,
  sliceLength = 20,
  searchable = true,
}) => {
  const errorMessage = typeof error === "string" ? error : error?.message;
  const hasError = !!error;
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = searchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, searchable]);

  return (
    <div
      className={`flex ${
        rowVariant
          ? "lg:flex-row flex-col lg:!items-baseline lg:!justify-center flex-nowrap"
          : "flex-col"
      } gap-2.5 flex-1`}
    >
      <label className={`roboto-font text-base font-medium ${labelClassName}`}>
        {label}
      </label>
      <Select
        value={value}
        onValueChange={onChange}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <SelectTrigger
          className={cn(
            "w-full !rounded-md h-10 border-primaryBorderColor text-[#667797] font-roboto text-[15px] cursor-pointer",
            hasError && "border-red-500",
            className
          )}
        >
          <SelectValue
            placeholder={placeholder}
            className="text-[#667797] font-roboto text-[15px]"
          >
            {value && value.length > sliceLength
              ? `${value.slice(0, sliceLength)}...`
              : value || placeholder}
          </SelectValue>
        </SelectTrigger>
        <SelectContent
          className="bg-white border border-primaryBorderColor rounded-md shadow-lg max-h-80"
          onPointerDownOutside={(e) => {
            if (searchInputRef.current?.contains(e.target as Node)) {
              e.preventDefault();
            }
          }}
        >
          {searchable && (
            <div className="flex items-center px-2 py-2 sticky top-0 bg-white border-b border-primaryBorderColor z-10">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <input
                ref={searchInputRef}
                className="flex-1 border-none outline-none text-sm text-[#667797] placeholder:text-gray-400"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  e.stopPropagation();
                  setSearchQuery(e.target.value);
                }}
                onClick={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  e.stopPropagation();
                  if (e.key === "Enter" && filteredOptions.length > 0) {
                    onChange(filteredOptions[0].value);
                    setIsOpen(false);
                  }
                  if (e.key === "Escape") {
                    setIsOpen(false);
                  }
                }}
                onFocus={(e) => e.stopPropagation()}
                onBlur={(e) => e.stopPropagation()}
              />
            </div>
          )}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="text-[#667797] font-roboto text-[15px] cursor-pointer"
              >
                {option.label}
              </SelectItem>
            ))
          ) : (
            <div className="text-[#667797] font-roboto text-[15px] py-2 px-2 text-center">
              No results found
            </div>
          )}
        </SelectContent>
      </Select>
      {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </div>
  );
};
