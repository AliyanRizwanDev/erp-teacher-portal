import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/routes";
import { FaChevronLeft } from "react-icons/fa";
import { DropdownField } from "../../components/common/DropdownField";
import {
  disciplineDropdownOptions,
  programDropdownOptions,
  sectionDropdownOptions,
} from "../../utils/data";
import { Button } from "@/components/ui/button";
import { InputField } from "../../components/common/InputField";
import { useState } from "react";
import { MonthPicker } from "@/components/ui/month-picker";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Pagination } from "../../components/ui/pagination";
import { usePagination } from "../../hooks/use-pagination";

interface ResultsFormValues {
  program: string;
  discipline: string;
  section: string;
  month: Date | undefined;
}

interface StudentResult {
  key: string;
  serialNumber: string;
  regNumber: string;
  name: string;
  fatherName: string;
  mathMarks: number;
  physicsMarks: number;
  chemistryMarks: number;
  biologyMarks: number;
  englishMarks: number;
  urduMarks: number;
  totalMarks: number;
  percentage: number;
  grade: string;
}

export const Results = () => {
  const nav = useNavigate();
  const { control, handleSubmit } = useForm<ResultsFormValues>({
    defaultValues: {
      program: "",
      discipline: "",
      section: "",
      month: undefined,
    },
  });
  const [showReport, setShowReport] = useState(false);

  // Sample results data
  const resultsData: StudentResult[] = [
    {
      key: "1",
      serialNumber: "1",
      regNumber: "24-4-S-1-116594",
      name: "Muhammad Farooq",
      fatherName: "Abdul Hamid",
      mathMarks: 85,
      physicsMarks: 78,
      chemistryMarks: 92,
      biologyMarks: 88,
      englishMarks: 75,
      urduMarks: 80,
      totalMarks: 498,
      percentage: 83.0,
      grade: "A",
    },
    {
      key: "2",
      serialNumber: "2",
      regNumber: "24-4-S-1-116595",
      name: "Murtaza Ali",
      fatherName: "Ali Ahmad",
      mathMarks: 72,
      physicsMarks: 85,
      chemistryMarks: 78,
      biologyMarks: 90,
      englishMarks: 82,
      urduMarks: 88,
      totalMarks: 495,
      percentage: 82.5,
      grade: "A",
    },
    {
      key: "3",
      serialNumber: "3",
      regNumber: "24-4-S-1-116596",
      name: "Ahmed Hassan",
      fatherName: "Hassan Khan",
      mathMarks: 90,
      physicsMarks: 88,
      chemistryMarks: 85,
      biologyMarks: 92,
      englishMarks: 78,
      urduMarks: 85,
      totalMarks: 518,
      percentage: 86.3,
      grade: "A+",
    },
    {
      key: "4",
      serialNumber: "4",
      regNumber: "24-4-S-1-116597",
      name: "Bilal Ahmed",
      fatherName: "Ahmed Ali",
      mathMarks: 68,
      physicsMarks: 72,
      chemistryMarks: 75,
      biologyMarks: 80,
      englishMarks: 70,
      urduMarks: 73,
      totalMarks: 438,
      percentage: 73.0,
      grade: "B",
    },
    {
      key: "5",
      serialNumber: "5",
      regNumber: "24-4-S-1-116598",
      name: "Omar Malik",
      fatherName: "Malik Saeed",
      mathMarks: 95,
      physicsMarks: 92,
      chemistryMarks: 88,
      biologyMarks: 94,
      englishMarks: 85,
      urduMarks: 90,
      totalMarks: 544,
      percentage: 90.7,
      grade: "A+",
    },
    {
      key: "6",
      serialNumber: "6",
      regNumber: "24-4-S-1-116599",
      name: "Zain Abbas",
      fatherName: "Abbas Ali",
      mathMarks: 78,
      physicsMarks: 82,
      chemistryMarks: 80,
      biologyMarks: 85,
      englishMarks: 76,
      urduMarks: 79,
      totalMarks: 480,
      percentage: 80.0,
      grade: "A",
    },
    {
      key: "7",
      serialNumber: "7",
      regNumber: "24-4-S-1-116600",
      name: "Fahad Raza",
      fatherName: "Raza Ahmad",
      mathMarks: 65,
      physicsMarks: 70,
      chemistryMarks: 68,
      biologyMarks: 72,
      englishMarks: 67,
      urduMarks: 70,
      totalMarks: 412,
      percentage: 68.7,
      grade: "B",
    },
    {
      key: "8",
      serialNumber: "8",
      regNumber: "24-4-S-1-116601",
      name: "Ali Khan",
      fatherName: "Khan Muhammad",
      mathMarks: 88,
      physicsMarks: 85,
      chemistryMarks: 90,
      biologyMarks: 87,
      englishMarks: 82,
      urduMarks: 86,
      totalMarks: 518,
      percentage: 86.3,
      grade: "A+",
    },
    {
      key: "9",
      serialNumber: "9",
      regNumber: "24-4-S-1-116602",
      name: "Hassan Ali",
      fatherName: "Ali Raza",
      mathMarks: 75,
      physicsMarks: 78,
      chemistryMarks: 82,
      biologyMarks: 80,
      englishMarks: 74,
      urduMarks: 77,
      totalMarks: 466,
      percentage: 77.7,
      grade: "B+",
    },
    {
      key: "10",
      serialNumber: "10",
      regNumber: "24-4-S-1-116603",
      name: "Usman Ahmad",
      fatherName: "Ahmad Khan",
      mathMarks: 92,
      physicsMarks: 89,
      chemistryMarks: 94,
      biologyMarks: 91,
      englishMarks: 87,
      urduMarks: 93,
      totalMarks: 546,
      percentage: 91.0,
      grade: "A+",
    },
  ];

  const {
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    paginatedData,
    setCurrentPage,
    setItemsPerPage,
  } = usePagination<StudentResult>({
    data: resultsData,
    initialItemsPerPage: 10,
  });

  const onSubmit = (_data: ResultsFormValues) => {
    setShowReport(true);
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
          Student Test Report
        </h1>

        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white px-4 pt-4 pb-6  rounded-xl">
            <InputField
              label="Campus"
              labelClassName="!font-medium"
              placeholder="Enter Campus"
              className="!rounded-lg !bg-[#e8ebef]"
              value="North Campus"
              disabled
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-8 rounded-xl">
            <Controller
              name="program"
              control={control}
              render={({ field }) => (
                <DropdownField
                  label="Program"
                  options={programDropdownOptions}
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
                  options={disciplineDropdownOptions}
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
                  options={sectionDropdownOptions}
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
                    Generate Test Report
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

        {showReport && (
          <div className="mt-6 bg-white rounded-xl p-6">
            <div className="shadow-sm bg-white rounded-md overflow-x-auto">
              <span className="bg-[#0070bf] text-white p-3 block font-semibold text-center rounded-t-md text-[18px]">
                Student Test Results
              </span>
              <Table className="border rounded-b-md">
                <TableHeader>
                  <TableRow className="bg-[#0070bf] hover:bg-[#0070bf]">
                    <TableHead className="text-white font-medium text-center">
                      #
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      Reg#
                    </TableHead>
                    <TableHead className="text-white font-medium text-left">
                      Name
                    </TableHead>
                    <TableHead className="text-white font-medium text-left">
                      Father Name
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      Math
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      Physics
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      Chemistry
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      Biology
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      English
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      Urdu
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      Total
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      %
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      Grade
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedData.map((student) => (
                    <TableRow key={student.key}>
                      <TableCell className="text-center">
                        {student.serialNumber}
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
                      <TableCell className="text-center">
                        {student.mathMarks}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.physicsMarks}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.chemistryMarks}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.biologyMarks}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.englishMarks}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.urduMarks}
                      </TableCell>
                      <TableCell className="text-center font-semibold">
                        {student.totalMarks}
                      </TableCell>
                      <TableCell className="text-center font-semibold">
                        {student.percentage}%
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`px-2 py-1 rounded text-white text-sm font-medium ${
                            student.grade === "A+"
                              ? "bg-green-600"
                              : student.grade === "A"
                                ? "bg-green-500"
                                : student.grade === "B+"
                                  ? "bg-blue-500"
                                  : student.grade === "B"
                                    ? "bg-blue-400"
                                    : "bg-gray-500"
                          }`}
                        >
                          {student.grade}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination for Results */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={setItemsPerPage}
                className="border-t border-primaryBorderColor"
              />
            </div>
          </div>
        )}
      </div>
    </form>
  );
};
