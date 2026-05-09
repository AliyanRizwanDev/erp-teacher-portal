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
import { useState } from "react";
import { Pagination } from "../../../components/ui/pagination";
import { usePagination } from "../../../hooks/use-pagination";

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
}

export const StudentAttendanceTimeTable = () => {
  const [attendance, setAttendance] = useState<Record<string, string>>({
    "1": "P",
    "2": "P",
    "3": "P",
    "4": "L",
  });

  const handleAttendanceChange = (studentKey: string, value: string) => {
    setAttendance((prev) => ({
      ...prev,
      [studentKey]: value,
    }));
  };

  const renderAttendanceRadios = (studentKey: string) => {
    return (
      <div className="flex justify-center gap-2">
        <button
          type="button"
          className={`w-6 h-6 rounded-full border-2 ${
            attendance[studentKey] === "A"
              ? "bg-red-200 border-red-300"
              : "bg-red-100 border-red-200"
          }`}
          onClick={() => handleAttendanceChange(studentKey, "A")}
        >
          {attendance[studentKey] === "A" && (
            <div className="w-2 h-2 bg-white rounded-full mx-auto "></div>
          )}
        </button>
        <button
          type="button"
          className={`w-6 h-6 rounded-full border-2 ${
            attendance[studentKey] === "L"
              ? "bg-blue-200 border-blue-300"
              : "bg-blue-100 border-blue-200"
          }`}
          onClick={() => handleAttendanceChange(studentKey, "L")}
        >
          {attendance[studentKey] === "L" && (
            <div className="w-2 h-2 bg-white rounded-full mx-auto "></div>
          )}
        </button>
        <button
          type="button"
          className={`w-6 h-6 rounded-full border-2 ${
            attendance[studentKey] === "P"
              ? "bg-green-300 border-green-400"
              : "bg-green-200 border-green-300"
          }`}
          onClick={() => handleAttendanceChange(studentKey, "P")}
        >
          {attendance[studentKey] === "P" && (
            <div className="w-2 h-2 bg-white rounded-full mx-auto "></div>
          )}
        </button>
      </div>
    );
  };

  const sampleData: StudentData[] = [
    {
      key: "1",
      index: 1,
      register: 1,
      regNumber: "24-4-S-1-116594",
      name: "Muhammad Farooq",
      fatherName: "Abdul Hamid",
      discipline: "FSc (Pre-Med)",
      total: 0,
      subject: "-",
    },
    {
      key: "2",
      index: 2,
      register: 2,
      regNumber: "24-4-S-1-116595",
      name: "Murtaza",
      fatherName: "Ali Ahmad",
      discipline: "FSc (Pre-Med)",
      total: 400,
      subject: "-",
    },
    {
      key: "3",
      index: 3,
      register: 3,
      regNumber: "24-4-S-1-116596",
      name: "Rab Nawaz",
      fatherName: "Muhammad Ahmad",
      discipline: "FSc (Pre-Med)",
      total: 1001,
      subject: "-",
    },
    {
      key: "4",
      index: 4,
      register: 4,
      regNumber: "24-4-S-1-116597",
      name: "Mudasar Ahmad",
      fatherName: "Ahmad Ali",
      discipline: "FSc (Pre-Med)",
      total: 0,
      subject: "-",
    },
    {
      key: "5",
      index: 5,
      register: 5,
      regNumber: "24-4-S-1-116598",
      name: "Ahmed Hassan",
      fatherName: "Hassan Ali",
      discipline: "FSc (Pre-Med)",
      total: 250,
      subject: "-",
    },
    {
      key: "6",
      index: 6,
      register: 6,
      regNumber: "24-4-S-1-116599",
      name: "Ali Khan",
      fatherName: "Khan Muhammad",
      discipline: "FSc (Pre-Med)",
      total: 150,
      subject: "-",
    },
    {
      key: "7",
      index: 7,
      register: 7,
      regNumber: "24-4-S-1-116600",
      name: "Bilal Ahmed",
      fatherName: "Ahmed Khan",
      discipline: "FSc (Pre-Med)",
      total: 500,
      subject: "-",
    },
    {
      key: "8",
      index: 8,
      register: 8,
      regNumber: "24-4-S-1-116601",
      name: "Omar Malik",
      fatherName: "Malik Saeed",
      discipline: "FSc (Pre-Med)",
      total: 300,
      subject: "-",
    },
    {
      key: "9",
      index: 9,
      register: 9,
      regNumber: "24-4-S-1-116602",
      name: "Zain Abbas",
      fatherName: "Abbas Ali",
      discipline: "FSc (Pre-Med)",
      total: 450,
      subject: "-",
    },
    {
      key: "10",
      index: 10,
      register: 10,
      regNumber: "24-4-S-1-116603",
      name: "Fahad Raza",
      fatherName: "Raza Ahmad",
      discipline: "FSc (Pre-Med)",
      total: 200,
      subject: "-",
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
  } = usePagination<StudentData>({
    data: sampleData,
    initialItemsPerPage: 10,
  });

  return (
    <div className="py-9 px-5 lg:px-10 bg-primaryBgColor min-h-screen ">
      <h1 className="font-bold text-3xl text-primaryHeadingColor flex bg-transparent">
        Student Attendance
      </h1>

      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
          <InputField
            label="Campus"
            disabled
            labelClassName="!font-medium"
            placeholder="Enter Campus"
            className="!rounded-lg !bg-[#e8ebef]"
            value={"North Campus"}
          />
        </div>
        <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
          <InputField
            label="Program"
            disabled
            labelClassName="!font-medium"
            placeholder="Enter Program"
            className="!rounded-lg !bg-[#e8ebef]"
            value={"Intermediate"}
          />
        </div>
        <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
          <InputField
            label="Discipline"
            disabled
            labelClassName="!font-medium"
            placeholder="Enter Discipline"
            className="!rounded-lg !bg-[#e8ebef]"
            value={"FSc (Pre-Med)"}
          />
        </div>
        <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
          <InputField
            label="Section"
            disabled
            labelClassName="!font-medium"
            placeholder="Enter Section"
            className="!rounded-lg !bg-[#e8ebef]"
            value={"RMB1"}
          />
        </div>
      </div>
      <div className="bg-white px-5 py-5 rounded-xl justify-center sm:justify-end">
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
                  A-L-P
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((student) => (
                <TableRow key={student.key}>
                  <TableCell className="text-center">{student.index}</TableCell>
                  <TableCell className="text-center">
                    {student.register}
                  </TableCell>
                  <TableCell className="text-center">
                    {student.regNumber}
                  </TableCell>
                  <TableCell className="text-left">{student.name}</TableCell>
                  <TableCell className="text-left">
                    {student.fatherName}
                  </TableCell>
                  <TableCell className="text-left">
                    {student.discipline}
                  </TableCell>
                  <TableCell className="text-center">{student.total}</TableCell>
                  <TableCell className="text-center">
                    {student.subject}
                  </TableCell>
                  <TableCell className="text-center">
                    {renderAttendanceRadios(student.key)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
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
        <div className=" px-4 py-4 rounded-xl flex justify-center sm:justify-end">
          <div>
            <Button className="!bg-primaryBtnBgColor !text-white roboto-font !text-base !py-3 lg:!py-5 !rounded-lg !flex-1">
              <span className="roboto-font leading-0 cursor-pointer">Save</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
