import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { InputField } from "../../../components/common/InputField";
import { DropdownField } from "../../../components/common/DropdownField";
import { topicOptions, TypeDropDownOptions } from "../../../utils/data";

interface CourseCoverageFormValues {
  campus: string;
  program: string;
  discipline: string;
  section: string;
  date: Date | undefined;
  topic: string;
  type: string;
}

export const CourseCoverage = () => {
  const { control, handleSubmit } = useForm<CourseCoverageFormValues>({
    defaultValues: {
      campus: "Campus_01",
      program: "Intermediate",
      discipline: "FSc (Pre-Med)",
      section: "RMB1",
      date: undefined,
      topic: "",
      type: "",
    },
  });

  const onSubmit = (data: CourseCoverageFormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-9 px-4 sm:px-5 lg:px-10 bg-primaryBgColor min-h-screen">
        <h1 className="font-bold text-2xl sm:text-3xl text-primaryHeadingColor flex bg-transparent">
          Course Coverage
        </h1>
        <div>
          <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
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
                    label="Program"
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
                    label="Discipline"
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
                    label="Section"
                    labelClassName="!font-medium"
                    placeholder="Enter Section"
                    className="!rounded-lg !bg-[#e8ebef]"
                    value={field.value}
                    disabled
                  />
                )}
              />
            </div>
            <div className="bg-white px-4 pt-4 pb-4 rounded-xl flex flex-col gap-2.5">
              <label className={`roboto-font text-base font-medium`}>
                Date <span className="text-red-500">*</span>
              </label>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    placeholder="YYYY-MM-DD"
                    className="!rounded-md h-10 !w-full !bg-[#e8ebef] !text-primaryParaColor"
                    date={field.value}
                    onDateChange={field.onChange}
                  />
                )}
              />
            </div>
            <div className="bg-white px-4 pt-4 pb-4 rounded-xl col-span-1 lg:col-span-2">
              <Controller
                name="topic"
                control={control}
                render={({ field }) => (
                  <DropdownField
                    sliceLength={100}
                    options={topicOptions}
                    label={
                      <>
                        Topic <span className="text-red-500">*</span>
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
                name="type"
                control={control}
                render={({ field }) => (
                  <DropdownField
                    options={TypeDropDownOptions}
                    label={
                      <>
                        Type <span className="text-red-500">*</span>
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
          </div>
          <div className="bg-white px-4 py-4 rounded-xl flex flex-col sm:flex-row justify-center sm:justify-end items-center">
            <div>
              <Button
                className="!bg-primaryBtnBgColor !text-white roboto-font !text-base !py-3 lg:!py-5 !rounded-lg !flex-1"
                type="submit"
              >
                <span className="roboto-font leading-0 cursor-pointer">
                  Save
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
