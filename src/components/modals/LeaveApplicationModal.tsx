import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo, memo } from "react";
import {
  useForm,
  Controller,
  useWatch,
  type SubmitHandler,
} from "react-hook-form";
import { LeaveTypeDropDownOptions } from "../../utils/data";
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

interface LeaveFormData {
  leaveReason: string;
  leaveDetail: string;
  leaveFrom: Date | null;
  leaveTo: Date | null;
  leaveDuration: number;
}

// Yup validation schema
const leaveSchema: yup.ObjectSchema<LeaveFormData> = yup.object({
  leaveReason: yup.string().required("Leave reason is required"),
  leaveDetail: yup
    .string()
    .required("Leave details are required")
    .min(10, "Details must be at least 10 characters")
    .max(500, "Details cannot exceed 500 characters"),
  leaveFrom: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("Start date is required")
    .typeError("Please enter a valid date"),
  leaveTo: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .required("End date is required")
    .typeError("Please enter a valid date")
    .test(
      "is-after-or-equal",
      "End date must be after or equal to start date",
      function (value) {
        const leaveFrom = this.parent.leaveFrom as Date | null;
        if (!leaveFrom || !value) return true;
        const leaveTo = value as Date;
        return leaveTo >= leaveFrom;
      }
    ),
  leaveDuration: yup
    .number()
    .min(1, "Leave duration must be at least 1 day")
    .required(),
});

interface LeaveApplicationModalProps {
  onSubmit?: (data: LeaveFormData) => void;
  onCancel?: () => void;
}

const LeaveApplicationModalComponent = ({
  onSubmit: externalSubmit,
  onCancel,
}: LeaveApplicationModalProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitted },
  } = useForm<LeaveFormData>({
    resolver: yupResolver(leaveSchema),
    mode: "onSubmit", // explicitly set to onSubmit
    defaultValues: {
      leaveReason: "",
      leaveDetail: "",
      leaveFrom: null,
      leaveTo: null,
      leaveDuration: 0,
    },
  });

  // Use useWatch for better performance
  const leaveFrom = useWatch({ control, name: "leaveFrom" });
  const leaveTo = useWatch({ control, name: "leaveTo" });

  // Memoize leave duration calculation
  const calculatedDuration = useMemo(() => {
    if (leaveFrom && leaveTo && leaveFrom <= leaveTo) {
      const timeDiff = leaveTo.getTime() - leaveFrom.getTime();
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
      return days > 0 ? days : 0;
    }
    return 0;
  }, [leaveFrom, leaveTo]);

  // Only update leaveDuration if it actually changed
  useEffect(() => {
    setValue("leaveDuration", calculatedDuration, { shouldValidate: true });
  }, [calculatedDuration, setValue]);

  const onSubmit: SubmitHandler<LeaveFormData> = (data) => {
    console.log("Form submitted:", data);
    // Call external submit handler if provided
    if (externalSubmit) {
      externalSubmit(data);
    }
  };

  return (
    <div className="leave-application-modal">
      <div className="px-5 lg:px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Leave Reason Field */}
          <div className="grid md:grid-cols-[100px_1fr] gap-4 items-center mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Leave Reason
            </div>
            <Controller
              name="leaveReason"
              control={control}
              render={({ field }) => (
                <div>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-10 w-full cursor-pointer">
                      <SelectValue placeholder="Choose..." />
                    </SelectTrigger>
                    <SelectContent>
                      {LeaveTypeDropDownOptions.map((option) => (
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
                  {isSubmitted && errors.leaveReason && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.leaveReason.message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>

          {/* Leave Reason Detail Field */}
          <div className="grid md:grid-cols-[100px_1fr] gap-4 items-start mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Leave Reason Detail
            </div>
            <Controller
              name="leaveDetail"
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
                    {isSubmitted && errors.leaveDetail && (
                      <div className="text-red-500 text-xs">
                        {errors.leaveDetail.message}
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

          {/* Leave From Field */}
          <div className="grid md:grid-cols-[100px_1fr] gap-4 items-center mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Leave From
            </div>
            <Controller
              name="leaveFrom"
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
                  {isSubmitted && errors.leaveFrom && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.leaveFrom.message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>

          {/* Leave To Field */}
          <div className="grid md:grid-cols-[100px_1fr] gap-4 items-center mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Leave To
            </div>
            <Controller
              name="leaveTo"
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
                  {isSubmitted && errors.leaveTo && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.leaveTo.message}
                    </div>
                  )}
                </div>
              )}
            />
          </div>

          {/* Leave Days Field */}
          <div className="grid md:grid-cols-[100px_1fr] gap-4 items-center mb-4">
            <div className="font-semibold font-urbanist text-[16px] leading-[100%] tracking-[0%]">
              Leave Days
            </div>
            <div>
              <InputNumber
                placeholder="0"
                readOnly
                className="h-10 py-1 w-full"
                value={calculatedDuration}
                disabled
              />
              {isSubmitted && errors.leaveDuration && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.leaveDuration.message}
                </div>
              )}
            </div>
          </div>

          {/* Form Buttons */}
          <div className="bg-white rounded-xl flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-3">
            <div className="w-full sm:w-auto flex gap-3 md:flex-row flex-col">
              <Button
                type="button"
                onClick={onCancel}
                className="w-full sm:w-auto text-primaryParaColor bg-white  border  hover:bg-primaryBtnBgColor hover:text-white cursor-pointer
              roboto-font text-base py-3 lg:py-5 rounded-md flex-1"
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
// Memoize the component to prevent unnecessary re-renders
export const LeaveApplicationModal = memo(LeaveApplicationModalComponent);
