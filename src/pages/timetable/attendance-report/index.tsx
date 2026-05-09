import { useForm, Controller } from "react-hook-form";
import { DropdownField } from "../../../components/common/DropdownField";
import { InputField } from "../../../components/common/InputField";
import { DatePicker } from "@/components/ui/date-picker";
import { loginDropdownOptions } from "../../../utils/data";

interface AttendanceReportFormValues {
  program: string;
  discipline: string;
  section: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
}

export const AttendanceReport = () => {
  const { control, handleSubmit } = useForm<AttendanceReportFormValues>({
    defaultValues: {
      program: "",
      discipline: "",
      section: "",
      startDate: undefined,
      endDate: undefined,
    },
  });

  const onSubmit = (_data: AttendanceReportFormValues) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-6 sm:py-9 px-3 sm:px-5 lg:px-10 bg-primaryBgColor min-h-screen overflow-auto">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-primaryHeadingColor flex bg-transparent">
          Attendance Report
        </h1>
        <div className="my-4 sm:my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          <div className="bg-white px-3 sm:px-4 pt-3 sm:pt-4 pb-3 sm:pb-4 rounded-xl">
            <InputField
              label="Campus"
              labelClassName="!font-medium"
              placeholder="Enter Campus"
              className="!rounded-lg !bg-[#e8ebef]"
              value={"North Campus"}
              disabled
            />
          </div>
          <div className="bg-white px-3 sm:px-4 pt-3 sm:pt-4 pb-3 sm:pb-4 rounded-xl">
            <Controller
              name="program"
              control={control}
              render={({ field }) => (
                <DropdownField
                  label="Program"
                  options={loginDropdownOptions}
                  labelClassName="!font-medium"
                  placeholder="Choose..."
                  className="rounded cursor-pointer"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="bg-white px-3 sm:px-4 pt-3 sm:pt-4 pb-3 sm:pb-4 rounded-xl">
            <Controller
              name="discipline"
              control={control}
              render={({ field }) => (
                <DropdownField
                  label="Discipline"
                  options={loginDropdownOptions}
                  labelClassName="!font-medium"
                  placeholder="Choose..."
                  className="rounded cursor-pointer"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="bg-white px-3 sm:px-4 pt-3 sm:pt-4 pb-3 sm:pb-4 rounded-xl">
            <Controller
              name="section"
              control={control}
              render={({ field }) => (
                <DropdownField
                  label="Section"
                  options={loginDropdownOptions}
                  labelClassName="!font-medium"
                  placeholder="Choose..."
                  className="rounded cursor-pointer "
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="bg-white px-3 sm:px-4 pt-3 sm:pt-4 pb-3 sm:pb-4 rounded-xl col-span-1 sm:col-span-2">
            <label className="roboto-font text-base font-medium mb-5">
              Starting Date
            </label>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  placeholder="YYYY-MM-DD"
                  className="!rounded-md h-10 !w-full !bg-[#e8ebef] cursor-pointer mt-3"
                  date={field.value}
                  onDateChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="bg-white px-3 sm:px-4 pt-3 sm:pt-4 pb-3 sm:pb-4 rounded-xl col-span-1 sm:col-span-2">
            <label className="roboto-font text-base font-medium">
              Ending Date
            </label>
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  placeholder="YYYY-MM-DD"
                  className="!rounded-md h-10 !w-full !bg-[#e8ebef] cursor-pointer mt-3"
                  date={field.value}
                  onDateChange={field.onChange}
                />
              )}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
