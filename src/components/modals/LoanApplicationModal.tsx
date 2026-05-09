import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo, memo } from "react";
import {
  useForm,
  Controller,
  useWatch,
  type SubmitHandler,
} from "react-hook-form";
import { LoanTypeDropDownOptions } from "../../utils/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { InputNumber } from "@/components/ui/input-number";

interface LoanFormData {
  loanReason: string;
  loanDetail: string;
  loanFrom: Date | null;
  loanTo: Date | null;
  loanDuration: number;
  loanAmount: number;
  monthlyInstallment: number;
}

// Yup validation schema
const loanSchema: yup.ObjectSchema<LoanFormData> = yup.object({
  loanReason: yup.string().required("Loan reason is required"),
  loanDetail: yup
    .string()
    .required("Loan details are required")
    .min(10, "Details must be at least 10 characters")
    .max(500, "Details cannot exceed 500 characters"),
  loanFrom: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Start date is required")
    .typeError("Please enter a valid date"),
  loanTo: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("End date is required")
    .typeError("Please enter a valid date")
    .test(
      "is-after-or-equal",
      "End date must be after or equal to start date",
      function (value) {
        const loanFrom = this.parent.loanFrom as Date | null;
        if (!loanFrom || !value) return true;
        const loanTo = value as Date;
        return loanTo >= loanFrom;
      },
    ),
  loanDuration: yup
    .number()
    .min(1, "Loan duration must be at least 1 day")
    .required(),
  loanAmount: yup
    .number()
    .min(0, "Loan amount cannot be less than 0")
    .required("Loan amount is required"),
  monthlyInstallment: yup
    .number()
    .min(0, "Monthly installment cannot be less than 0")
    .required("Monthly installment is required"),
});

interface LoanApplicationModalProps {
  onSubmit?: (data: LoanFormData) => void;
  onCancel?: () => void;
}

const LoanApplicationModalComponent = ({
  onSubmit: externalSubmit,
  onCancel,
}: LoanApplicationModalProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitted },
  } = useForm<LoanFormData>({
    resolver: yupResolver(loanSchema),
    mode: "onSubmit",
    defaultValues: {
      loanReason: "",
      loanDetail: "",
      loanFrom: null,
      loanTo: null,
      loanDuration: 0,
      loanAmount: 0,
      monthlyInstallment: 0,
    },
  });

  // Use useWatch for better performance
  const loanFrom = useWatch({ control, name: "loanFrom" });
  const loanTo = useWatch({ control, name: "loanTo" });

  // Memoize loan duration calculation
  const calculatedDuration = useMemo(() => {
    if (loanFrom && loanTo && loanFrom <= loanTo) {
      const timeDiff = loanTo.getTime() - loanFrom.getTime();
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
      return days > 0 ? days : 0;
    }
    return 0;
  }, [loanFrom, loanTo]);

  // Only update loanDuration if it actually changed
  useEffect(() => {
    setValue("loanDuration", calculatedDuration, { shouldValidate: true });
  }, [calculatedDuration, setValue]);

  const onSubmit: SubmitHandler<LoanFormData> = (data) => {
    if (externalSubmit) {
      externalSubmit(data);
    }
  };

  return (
    <div className="loan-application-modal">
      <div className="px-5 lg:px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Loan Reason Field */}
          <div className="grid md:grid-cols-[100px_1fr] gap-4 items-center mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Loan Reason
            </div>
            <Controller
              name="loanReason"
              control={control}
              render={({ field }) => (
                <div>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-10 w-full cursor-pointer">
                      <SelectValue placeholder="Choose..." />
                    </SelectTrigger>
                    <SelectContent>
                      {LoanTypeDropDownOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="cursor-pointer"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {isSubmitted && errors.loanReason && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.loanReason.message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>

          {/* Loan Reason Detail Field */}
          <div className="grid md:grid-cols-[100px_1fr] gap-4 items-start mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Loan Reason Detail
            </div>
            <Controller
              name="loanDetail"
              control={control}
              render={({ field }) => (
                <div className="w-full">
                  <Textarea
                    placeholder="Write here..."
                    rows={4}
                    className="w-full resize-none"
                    {...field}
                  />
                  <div className="flex justify-between mt-1">
                    {isSubmitted && errors.loanDetail && (
                      <div className="text-red-500 text-xs">
                        {errors.loanDetail.message}
                      </div>
                    )}
                    <div className="text-xs text-gray-500 ml-auto">
                      {field.value?.length || 0}/500
                    </div>
                  </div>
                </div>
              )}
            />
          </div>

          {/* Loan From Field */}
          <div className="grid md:grid-cols-[100px_1fr] gap-4 items-center mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Loan From
            </div>
            <Controller
              name="loanFrom"
              control={control}
              render={({ field }) => (
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={
                          "w-full justify-start text-left font-normal h-10 " +
                          (!field.value ? "text-muted-foreground" : "")
                        }
                        type="button"
                      >
                        {field.value ? format(field.value, "PPP") : "Choose..."}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ?? undefined}
                        onSelect={field.onChange}
                        initialFocus
                        disabled={field.disabled}
                      />
                    </PopoverContent>
                  </Popover>
                  {isSubmitted && errors.loanFrom && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.loanFrom.message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>

          {/* Loan To Field */}
          <div className="grid md:grid-cols-[100px_1fr] gap-4 items-center mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Loan To
            </div>
            <Controller
              name="loanTo"
              control={control}
              render={({ field }) => (
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={
                          "w-full justify-start text-left font-normal h-10 " +
                          (!field.value ? "text-muted-foreground" : "")
                        }
                        type="button"
                      >
                        {field.value ? format(field.value, "PPP") : "Choose..."}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ?? undefined}
                        onSelect={field.onChange}
                        initialFocus
                        disabled={field.disabled}
                      />
                    </PopoverContent>
                  </Popover>
                  {isSubmitted && errors.loanTo && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.loanTo.message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>

          {/* Loan Duration Field */}
          <div className="grid md:grid-cols-[100px_1fr] gap-4 items-center mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Loan Duration
            </div>
            <div>
              <InputNumber
                placeholder="0"
                readOnly
                className="h-10 py-1 w-full"
                value={calculatedDuration}
                disabled
              />
              {isSubmitted && errors.loanDuration && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.loanDuration.message}
                </div>
              )}
            </div>
          </div>

          {/* Loan Amount Field */}
          <div className="grid md:grid-cols-[100px_1fr] gap-4 items-center mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Loan Amount
            </div>
            <Controller
              name="loanAmount"
              control={control}
              render={({ field }) => (
                <div>
                  <InputNumber
                    placeholder="Enter loan amount"
                    className="h-10 w-full"
                    min={0}
                    {...field}
                  />
                  {isSubmitted && errors.loanAmount && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.loanAmount.message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>

          {/* Monthly Installment Field */}
          <div className="grid md:grid-cols-[100px_1fr] gap-4 items-center mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Monthly Installment
            </div>
            <Controller
              name="monthlyInstallment"
              control={control}
              render={({ field }) => (
                <div>
                  <InputNumber
                    placeholder="Enter monthly installment"
                    className="h-10 w-full"
                    min={0}
                    {...field}
                  />
                  {isSubmitted && errors.monthlyInstallment && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.monthlyInstallment.message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>

          {/* Form Buttons */}
          <div className="bg-white rounded-xl flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-3">
            <div className="w-full sm:w-auto flex gap-3 md:flex-row flex-col">
              <Button
                type="button"
                onClick={onCancel}
                className="w-full sm:w-auto text-primaryParaColor bg-white  border  hover:bg-primaryBtnBgColor hover:text-white cursor-pointer roboto-font text-base py-3 lg:py-5 rounded-md flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full sm:w-auto bg-primaryBtnBgColor hover:bg-[#005a99] text-white roboto-font text-base py-3 lg:py-5 rounded-md flex-1 cursor-pointer"
              >
                Submit Application
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export const LoanApplicationModal = memo(LoanApplicationModalComponent);
