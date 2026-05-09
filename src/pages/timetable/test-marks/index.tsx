import { useForm, Controller, useFieldArray } from "react-hook-form";
import { InputField } from "../../../components/common/InputField";
import { Button } from "../../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { DropdownField } from "../../../components/common/DropdownField";
import {
  TestTypeDropDownOptions,
  TestTypeNumberDropDownOptions,
} from "../../../utils/data";
import { useState } from "react";
import { DatePicker } from "../../../components/ui/date-picker";

interface StudentData {
  key: string;
  index: number;
  register: number;
  regNumber: string;
  name: string;
  fatherName: string;
  discipline: string;
  total: number | string;
  subject: string;
  t1: number;
  t2: number;
  testMarks: number;
}

interface TestMarksFormValues {
  campus: string;
  program: string;
  discipline: string;
  section: string;
  date: Date | undefined;
  type: string;
  number: string;
  totalMarks: string;
  students: Array<{
    key: string;
    index: number;
    register: number;
    regNumber: string;
    name: string;
    fatherName: string;
    discipline: string;
    total: number | string;
    subject: string;
    t1: number;
    t2: number;
    testMarks: number;
  }>;
}

const sampleData: StudentData[] = [
  {
    key: "1",
    index: 1,
    register: 1,
    regNumber: "24-4-S-1-165914",
    name: "Muhammad Farooq",
    fatherName: "Abdul Hamid",
    discipline: "FSc (Pre-Med)",
    total: 0,
    subject: "-",
    t1: 10,
    t2: 7,
    testMarks: 17,
  },
  {
    key: "2",
    index: 2,
    register: 2,
    regNumber: "24-4-S-1-165914",
    name: "Murtaza",
    fatherName: "Ali Ahmad",
    discipline: "FSc (Pre-Med)",
    total: 400,
    subject: "-",
    t1: 11,
    t2: 0,
    testMarks: 23,
  },
  {
    key: "3",
    index: 3,
    register: 3,
    regNumber: "24-4-S-1-165914",
    name: "Rab Nawaz",
    fatherName: "Muhammad Ahmad",
    discipline: "FSc (Pre-Med)",
    total: 1001,
    subject: "-",
    t1: 12,
    t2: 0,
    testMarks: 21,
  },
  {
    key: "4",
    index: 4,
    register: 4,
    regNumber: "24-4-S-1-165914",
    name: "Mudasar Ahmad",
    fatherName: "Ahmad Ali",
    discipline: "FSc (Pre-Med)",
    total: 0,
    subject: "-",
    t1: 19,
    t2: 0,
    testMarks: 36,
  },
];

export const TestMarks = () => {
  const { control, handleSubmit } = useForm<TestMarksFormValues>({
    defaultValues: {
      campus: "North Campus",
      program: "Intermediate",
      discipline: "FSc (Pre-Med)",
      section: "RMB1",
      date: undefined,
      type: "",
      number: "",
      totalMarks: "25",
      students: sampleData,
    },
  });
  const { fields } = useFieldArray({
    control,
    name: "students",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = () => {
    setIsSubmitting(true);
    // Simulate save
    setTimeout(() => {
      // You can handle the data here
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-9 px-5 lg:px-10 bg-primaryBgColor ">
        <h1 className="font-bold text-3xl text-primaryHeadingColor flex bg-transparent">
          Test Marks Entry
        </h1>
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <Controller
              name="campus"
              control={control}
              render={({ field }) => (
                <InputField
                  label="Campus"
                  labelClassName="!font-medium text-nowrap"
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
                  labelClassName="!font-medium text-nowrap"
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
        </div>
        <div className="bg-white rounded-xl justify-center sm:justify-end">
          <div className="my-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 px-4 pt-4">
            <div className="bg-white px-4 pt-4 pb-4 rounded-xl flex-1 ">
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center gap-2 w-full">
                    <span className="roboto-font text-base font-medium whitespace-nowrap">
                      Date:
                    </span>
                    <DatePicker
                      placeholder="YYYY-MM-DD"
                      className="!rounded-lg !bg-[#e8ebef] w-[90%] cursor-pointer"
                      date={field.value}
                      onDateChange={field.onChange}
                    />
                  </div>
                )}
              />
            </div>
            <div className="bg-white px-4 pt-4 pb-4 rounded-xl flex-1 ">
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <DropdownField
                    label="Type:"
                    options={TestTypeDropDownOptions}
                    labelClassName="!font-medium text-nowrap "
                    placeholder="Select Test Type"
                    className="!rounded-lg !bg-[#e8ebef]"
                    rowVariant
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            <div className="bg-white px-4 pt-4 pb-4 rounded-xl flex-1 ">
              <Controller
                name="number"
                control={control}
                render={({ field }) => (
                  <DropdownField
                    label="Number:"
                    options={TestTypeNumberDropDownOptions}
                    labelClassName="!font-medium text-nowrap "
                    placeholder="Select Test Number"
                    className="!rounded-lg !bg-[#e8ebef]"
                    rowVariant
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            <div className="bg-white px-4 pt-4 pb-4 rounded-xl flex-1 min-w-[50px]">
              <Controller
                name="totalMarks"
                control={control}
                render={({ field }) => (
                  <InputField
                    label="Total Marks:"
                    disabled
                    labelClassName="!font-medium text-nowrap "
                    placeholder="Enter Total Marks"
                    className="!rounded-lg !bg-[#e8ebef] !text-end"
                    rowVariant
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>
          <div className="px-4 pb-4 overflow-x-auto">
            <div className="shadow-sm bg-white rounded-md overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0070bf] hover:bg-[#0070bf]">
                    <TableHead className="text-white font-medium text-left">
                      #
                    </TableHead>
                    <TableHead className="text-white font-medium text-left">
                      R#
                    </TableHead>
                    <TableHead className="text-white font-medium text-left">
                      Reg#
                    </TableHead>
                    <TableHead className="text-white font-medium text-left">
                      Name
                    </TableHead>
                    <TableHead className="text-white font-medium text-left">
                      Father Name
                    </TableHead>
                    <TableHead className="text-white font-medium text-left">
                      Discipline
                    </TableHead>
                    <TableHead
                      className="text-white font-medium text-center"
                      colSpan={2}
                    >
                      <div className="urbanist-font">
                        <div>Potential</div>
                        <div>Matric</div>
                      </div>
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      T-1 (25)
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      T-2 (25)
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      Test Marks
                    </TableHead>
                  </TableRow>
                  <TableRow className="bg-[#0070bf] hover:bg-[#0070bf]">
                    <TableHead className="text-white font-medium text-center border-t-0"></TableHead>
                    <TableHead className="text-white font-medium text-center border-t-0"></TableHead>
                    <TableHead className="text-white font-medium text-center border-t-0"></TableHead>
                    <TableHead className="text-white font-medium text-center border-t-0"></TableHead>
                    <TableHead className="text-white font-medium text-center border-t-0"></TableHead>
                    <TableHead className="text-white font-medium text-center border-t-0"></TableHead>
                    <TableHead className="text-white font-medium text-center border-t-0">
                      Total
                    </TableHead>
                    <TableHead className="text-white font-medium text-center border-t-0">
                      Subject
                    </TableHead>
                    <TableHead className="text-white font-medium text-center border-t-0"></TableHead>
                    <TableHead className="text-white font-medium text-center border-t-0"></TableHead>
                    <TableHead className="text-white font-medium text-center border-t-0"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fields.map((student, idx) => (
                    <TableRow key={student.key}>
                      <TableCell className="text-center">
                        {student.index}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.register}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.regNumber}
                      </TableCell>
                      <TableCell className="text-left">
                        {student.name}
                      </TableCell>
                      <TableCell className="text-left">
                        {student.fatherName}
                      </TableCell>
                      <TableCell className="text-left">
                        {student.discipline}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.total}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.subject}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.t1}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.t2}
                      </TableCell>
                      <TableCell className="text-center">
                        <Controller
                          name={`students.${idx}.testMarks`}
                          control={control}
                          render={({ field }) => (
                            <input
                              type="number"
                              className="border h-8 w-[50px] outline-none focus:ring-0 text-center bg-white"
                              {...field}
                            />
                          )}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="px-4 py-4 rounded-xl flex justify-center sm:justify-end">
            <div className="w-full sm:w-auto">
              <Button
                className="!w-full sm:!w-auto !bg-primaryBtnBgColor !text-white roboto-font !text-base !py-3 lg:!py-5 !rounded-lg !flex-1"
                type="submit"
                disabled={isSubmitting}
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
