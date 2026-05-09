import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { InputField } from "../../../components/common/InputField";
import { DropdownField } from "../../../components/common/DropdownField";
import { DatePicker } from "@/components/ui/date-picker";
import {
  TestTypeDropDownOptions,
  TestTypeNumberDropDownOptions,
} from "../../../utils/data";

interface TestReturnFormValues {
  campus: string;
  program: string;
  discipline: string;
  section: string;
  subject: string;
  teacherName: string;
  testType: string;
  testNumber: string;
  sectionStrength: string;
  testDate: Date | undefined;
  returnDate: Date | undefined;
  testReturned: string;
}

export const TestReturn = () => {
  const { control, handleSubmit } = useForm<TestReturnFormValues>({
    defaultValues: {
      campus: "North Campus",
      program: "Intermediate",
      discipline: "FSc (Pre-Med)",
      section: "RMB1",
      subject: "Chemistry",
      teacherName: "Faculty Member (ERP-001)",
      testType: "",
      testNumber: "",
      sectionStrength: "4",
      testDate: undefined,
      returnDate: undefined,
      testReturned: "",
    },
  });
  const onSubmit = (_data: TestReturnFormValues) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-9 px-4 sm:px-5 lg:px-10 bg-primaryBgColor min-h-screen">
        <h1 className="font-bold text-2xl sm:text-3xl text-primaryHeadingColor flex bg-transparent">
          Test Return Entry
        </h1>

        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <Controller
              name="campus"
              control={control}
              render={({ field }) => (
                <InputField
                  label="Campus"
                  labelClassName="!font-medium"
                  placeholder="Enter Campus"
                  className="!rounded-lg !bg-[#e8ebef]"
                  value={field.value}
                  disabled
                />
              )}
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <Controller
              name="program"
              control={control}
              render={({ field }) => (
                <InputField
                  label={
                    <>
                      Program <span className="text-red-500">*</span>
                    </>
                  }
                  labelClassName="!font-medium"
                  placeholder="Enter Program"
                  className="!rounded-lg !bg-[#e8ebef]"
                  value={field.value}
                  disabled
                />
              )}
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <Controller
              name="discipline"
              control={control}
              render={({ field }) => (
                <InputField
                  label={
                    <>
                      Discipline <span className="text-red-500">*</span>
                    </>
                  }
                  labelClassName="!font-medium"
                  placeholder="Enter Discipline"
                  className="!rounded-lg !bg-[#e8ebef]"
                  value={field.value}
                  disabled
                />
              )}
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <Controller
              name="section"
              control={control}
              render={({ field }) => (
                <InputField
                  label={
                    <>
                      Section <span className="text-red-500">*</span>
                    </>
                  }
                  labelClassName="!font-medium"
                  placeholder="Enter Section"
                  className="!rounded-lg !bg-[#e8ebef]"
                  value={field.value}
                  disabled
                />
              )}
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <InputField
                  label={
                    <>
                      Subject <span className="text-red-500">*</span>
                    </>
                  }
                  labelClassName="!font-medium"
                  placeholder="Enter Subject"
                  className="!rounded-lg !bg-[#e8ebef]"
                  value={field.value}
                  disabled
                />
              )}
            />
          </div>
        </div>

        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl col-span-1 lg:col-span-2">
            <Controller
              name="teacherName"
              control={control}
              render={({ field }) => (
                <InputField
                  label={
                    <>
                      Teacher Name <span className="text-red-500">*</span>
                    </>
                  }
                  labelClassName="!font-medium"
                  placeholder="Enter Teacher Name"
                  className="!rounded-lg !bg-[#e8ebef]"
                  value={field.value}
                  disabled
                />
              )}
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <Controller
              name="testType"
              control={control}
              render={({ field }) => (
                <DropdownField
                  options={TestTypeDropDownOptions}
                  label={
                    <>
                      Test Type <span className="text-red-500">*</span>
                    </>
                  }
                  labelClassName="!font-medium"
                  placeholder="Choose..."
                  className="!rounded-lg !bg-[#e8ebef]"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <Controller
              name="testNumber"
              control={control}
              render={({ field }) => (
                <DropdownField
                  options={TestTypeNumberDropDownOptions}
                  label={
                    <>
                      Test Number <span className="text-red-500">*</span>
                    </>
                  }
                  labelClassName="!font-medium"
                  placeholder="Choose..."
                  className="!rounded-lg !bg-[#e8ebef]"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <Controller
              name="sectionStrength"
              control={control}
              render={({ field }) => (
                <InputField
                  label="Section Strength"
                  labelClassName="!font-medium"
                  placeholder="Enter Section Strength"
                  className="!rounded-lg !bg-[#e8ebef]"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <label className="roboto-font text-base font-medium mb-1 block">
              Test Date <span className="text-red-500">*</span>
            </label>
            <Controller
              name="testDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  placeholder="YYYY-MM-DD"
                  className="!rounded-md h-10 !w-full !bg-[#e8ebef] cursor-pointer"
                  date={field.value}
                  onDateChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <label className="roboto-font text-base font-medium mb-1 block">
              Return Date <span className="text-red-500">*</span>
            </label>
            <Controller
              name="returnDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  placeholder="YYYY-MM-DD"
                  className="!rounded-md h-10 !w-full !bg-[#e8ebef] cursor-pointer"
                  date={field.value}
                  onDateChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <Controller
              name="testReturned"
              control={control}
              render={({ field }) => (
                <InputField
                  label={
                    <>
                      Test Returned <span className="text-red-500">*</span>
                    </>
                  }
                  labelClassName="!font-medium"
                  placeholder="Enter Test Returned"
                  className="!rounded-lg"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

        <div className="bg-white px-4 py-4 rounded-xl flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-3">
          <div className="w-full sm:w-auto flex gap-3 md:flex-row flex-col">
            <Button
              className="!w-full sm:!w-auto !border !border-primaryBtnBgColor !bg-white !text-primaryBtnBgColor roboto-font !text-base !py-3 lg:!py-5 !rounded-sm !flex-1 hover:!bg-primaryBtnBgColor hover:!text-white transition-colors cursor-pointer"
              type="button"
            >
              <span className="roboto-font leading-0">Load Test Date</span>
            </Button>
            <Button
              className="!w-full sm:!w-auto !bg-primaryBtnBgColor !text-white roboto-font !text-base !py-3 lg:!py-5 !rounded-sm !flex-1 cursor-pointer"
              type="submit"
            >
              <span className="roboto-font leading-0">Save Test Return</span>
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
