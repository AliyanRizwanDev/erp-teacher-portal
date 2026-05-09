import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/routes";
import { FaChevronLeft } from "react-icons/fa";
import { DropdownField } from "../../components/common/DropdownField";
import { loginDropdownOptions } from "../../utils/data";
import { Button } from "@/components/ui/button";
import { InputField } from "../../components/common/InputField";
import { MonthPicker } from "@/components/ui/month-picker";
import { useState } from "react";

interface NominalFormValues {
  program: string;
  discipline: string;
  section: string;
  month: Date | undefined;
}

export const Nominal = () => {
  const nav = useNavigate();
  const { control, handleSubmit } = useForm<NominalFormValues>({
    defaultValues: {
      program: "",
      discipline: "",
      section: "",
      month: undefined,
    },
  });
  const [showReport, setShowReport] = useState(false);

  const onSubmit = (data: NominalFormValues) => {
    // handle form submit
    setShowReport(true);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-9 px-5 lg:px-10 bg-primaryBgColor min-h-screen ">
        <button
          onClick={() => {
            nav(ROUTES.DASHBOARD);
          }}
          className="flex items-center gap-2 mb-4 text-black text-base hover:text-gray-800 cursor-pointer roboto-font"
          type="button"
        >
          <FaChevronLeft size={18} />
          Back to Dashboard
        </button>
        <h1 className="font-bold text-3xl text-primaryHeadingColor flex bg-transparent">
          Student Nominal Roll Report
        </h1>

        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white px-4 pt-4 pb-6 rounded-xl">
            <InputField
              label="Campus"
              labelClassName="!font-medium"
              placeholder="Enter Campus"
              disabled
              className="!rounded-lg !bg-[#e8ebef]"
              value="Campus_01"
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-8 rounded-xl">
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
          <div className="bg-white px-4 pt-4 pb-8 rounded-xl">
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
          <div className="bg-white px-4 pt-4 pb-8 rounded-xl">
            <Controller
              name="section"
              control={control}
              render={({ field }) => (
                <DropdownField
                  label="Section"
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
        </div>
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="bg-white px-4 pt-4 p-4 rounded-xl col-span-1 sm:col-span-2 flex flex-col gap-4">
            <label className={`roboto-font text-base font-medium`}>
              Select Month
            </label>
            <Controller
              name="month"
              control={control}
              render={({ field }) => (
                <MonthPicker
                  placeholder="Select month"
                  className="!rounded-md h-10 !w-full !bg-[#e8ebef] cursor-pointer"
                  date={field.value}
                  onDateChange={field.onChange}
                />
              )}
            />
            <div className="flex justify-end items-center gap-2">
              <div>
                <Button
                  className="!bg-primaryBtnBgColor !text-white roboto-font !text-sm sm:!text-base !py-2 sm:!py-3 lg:!py-5 !rounded-lg !flex-1  !w-fit cursor-pointer"
                  type="submit"
                >
                  <span className="roboto-font leading-0">
                    Generate Attendance Report
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl col-span-1 sm:col-span-2 flex justify-end items-end">
            <div>
              <Button
                className="!bg-primaryBtnBgColor !text-white roboto-font !text-sm sm:!text-base !py-2 sm:!py-3 lg:!py-5 !rounded-lg !flex-1 !opacity-50 !w-fit cursor-pointer"
                disabled={!showReport}
                type="button"
              >
                <span className="roboto-font leading-0">Print Report</span>
              </Button>
            </div>
          </div>
        </div>
        {/* ...existing code... */}
      </div>
    </form>
  );
};
