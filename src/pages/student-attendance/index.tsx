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
import { Button } from "../../components/ui/button";
import { InputField } from "../../components/common/InputField";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { MonthPicker } from "@/components/ui/month-picker";
import { Pagination } from "@/components/ui/pagination";
import { usePagination } from "@/hooks/use-pagination";

interface AllocatedTeachersData {
  key: string;
  phy: string;
  chem: string;
  bioMath: string;
  urdu: string;
  eng: string;
  isPs: string;
}

interface StudentAttendanceData {
  key: string;
  serialNumber: string;
  regNumber: string;
  roomNumber: string;
  name: string;
  [key: string]: string;
}

interface StudentAttendanceFormValues {
  program: string;
  discipline: string;
  section: string;
  month: Date | undefined;
}

export const StudentAttendance = () => {
  const nav = useNavigate();
  const { control, handleSubmit } = useForm<StudentAttendanceFormValues>({
    defaultValues: {
      program: "",
      discipline: "",
      section: "",
      month: undefined,
    },
  });
  const [showReport, setShowReport] = useState(false);

  const data: AllocatedTeachersData[] = [
    { key: "1", phy: "", chem: "", bioMath: "/", urdu: "", eng: "", isPs: "/" },
  ];

  const attendanceData: StudentAttendanceData[] = [
    {
      key: "1",
      serialNumber: "1",
      regNumber: "24-4-5-1-116594",
      roomNumber: "2",
      name: "Murtaza",
      ...Object.fromEntries(
        Array(31) // Update to 31 days
          .fill(0)
          .map((_, i) => [`day${i + 1}`, "-"]),
      ),
    },
    {
      key: "2",
      serialNumber: "2",
      regNumber: "25-4-5-1-1204495",
      roomNumber: "1",
      name: "Muhammad Farooq",
      ...Object.fromEntries(
        Array(31)
          .fill(0)
          .map((_, i) => [`day${i + 1}`, "-"]),
      ),
    },
    {
      key: "3",
      serialNumber: "3",
      regNumber: "25-4-5-1-1207771",
      roomNumber: "3",
      name: "Rab Nawaz",
      ...Object.fromEntries(
        Array(31)
          .fill(0)
          .map((_, i) => [`day${i + 1}`, "-"]),
      ),
    },
    {
      key: "4",
      serialNumber: "4",
      regNumber: "25-4-5-1-1216387",
      roomNumber: "4",
      name: "Muddasir Ahmed",
      ...Object.fromEntries(
        Array(31)
          .fill(0)
          .map((_, i) => [`day${i + 1}`, "-"]),
      ),
    },
    {
      key: "5",
      serialNumber: "5",
      regNumber: "25-4-5-1-1216388",
      roomNumber: "5",
      name: "Ahmed Ali",
      ...Object.fromEntries(
        Array(31)
          .fill(0)
          .map((_, i) => [`day${i + 1}`, "-"]),
      ),
    },
    {
      key: "6",
      serialNumber: "6",
      regNumber: "25-4-5-1-1216389",
      roomNumber: "6",
      name: "Hassan Khan",
      ...Object.fromEntries(
        Array(31)
          .fill(0)
          .map((_, i) => [`day${i + 1}`, "-"]),
      ),
    },
    {
      key: "7",
      serialNumber: "7",
      regNumber: "25-4-5-1-1216390",
      roomNumber: "7",
      name: "Ali Raza",
      ...Object.fromEntries(
        Array(31)
          .fill(0)
          .map((_, i) => [`day${i + 1}`, "-"]),
      ),
    },
    {
      key: "8",
      serialNumber: "8",
      regNumber: "25-4-5-1-1216391",
      roomNumber: "8",
      name: "Muhammad Usman",
      ...Object.fromEntries(
        Array(31)
          .fill(0)
          .map((_, i) => [`day${i + 1}`, "-"]),
      ),
    },
    {
      key: "9",
      serialNumber: "9",
      regNumber: "25-4-5-1-1216392",
      roomNumber: "9",
      name: "Fahad Malik",
      ...Object.fromEntries(
        Array(31)
          .fill(0)
          .map((_, i) => [`day${i + 1}`, "-"]),
      ),
    },
    {
      key: "10",
      serialNumber: "10",
      regNumber: "25-4-5-1-1216393",
      roomNumber: "10",
      name: "Bilal Ahmed",
      ...Object.fromEntries(
        Array(31)
          .fill(0)
          .map((_, i) => [`day${i + 1}`, "-"]),
      ),
    },
    {
      key: "11",
      serialNumber: "11",
      regNumber: "25-4-5-1-1216394",
      roomNumber: "11",
      name: "Omar Farooq",
      ...Object.fromEntries(
        Array(31)
          .fill(0)
          .map((_, i) => [`day${i + 1}`, "-"]),
      ),
    },
    {
      key: "12",
      serialNumber: "12",
      regNumber: "25-4-5-1-1216395",
      roomNumber: "12",
      name: "Zain Abbas",
      ...Object.fromEntries(
        Array(31)
          .fill(0)
          .map((_, i) => [`day${i + 1}`, "-"]),
      ),
    },
  ];

  const {
    currentPage: attendancePage,
    totalPages: attendanceTotalPages,
    totalItems: attendanceTotalItems,
    itemsPerPage: attendanceItemsPerPage,
    paginatedData: paginatedAttendanceData,
    setCurrentPage: setAttendancePage,
    setItemsPerPage: setAttendanceItemsPerPage,
  } = usePagination<StudentAttendanceData>({
    data: attendanceData,
    initialItemsPerPage: 10,
  });

  const onSubmit = (_data: StudentAttendanceFormValues) => {
    setShowReport(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-9 px-4 sm:px-5 lg:px-10 bg-primaryBgColor min-h-screen">
        <button
          onClick={() => nav(ROUTES.DASHBOARD)}
          className="flex items-center gap-2 mb-4 text-black text-sm sm:text-base hover:text-gray-800 cursor-pointer roboto-font"
          type="button"
        >
          <FaChevronLeft size={16} /> Back to Dashboard
        </button>
        <h1 className="font-bold text-3xl text-primaryHeadingColor bg-transparent mb-6">
          Student Attendance Summary Report
        </h1>

        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <InputField
              label="Campus"
              labelClassName="!font-medium"
              value="North Campus"
              className="!rounded-lg !bg-[#e8ebef] cursor-pointer"
              disabled
            />
          </div>
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
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
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
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
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
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

        {showReport && (
          <>
            <div className="mt-6">
              <div className="shadow-sm bg-white rounded-md overflow-x-auto">
                <span className="bg-[#0070bf] text-white p-3 block font-semibold text-center rounded-t-md text-[18px]">
                  Allocated Teachers
                </span>
                <Table className="border rounded-b-md">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center w-1/6">PHY</TableHead>
                      <TableHead className="text-center w-1/6">CHEM</TableHead>
                      <TableHead className="text-center w-1/6">
                        BIO / MATH
                      </TableHead>
                      <TableHead className="text-center w-1/6">URDU</TableHead>
                      <TableHead className="text-center w-1/6">ENG</TableHead>
                      <TableHead className="text-center w-1/6">
                        IS / PS
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.key}>
                        <TableCell className="text-center">{row.phy}</TableCell>
                        <TableCell className="text-center">
                          {row.chem}
                        </TableCell>
                        <TableCell className="text-center">
                          {row.bioMath}
                        </TableCell>
                        <TableCell className="text-center">
                          {row.urdu}
                        </TableCell>
                        <TableCell className="text-center">{row.eng}</TableCell>
                        <TableCell className="text-center">
                          {row.isPs}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="mt-6 p-6 bg-white rounded-xl overflow-hidden">
              <div className="max-w-full text-center mx-auto">
                <div className="shadow-sm bg-white rounded-md">
                  <span className="bg-[#0070bf] text-white p-3 block font-medium text-center rounded-t-md">
                    Period Number / Time
                  </span>
                  <div className="overflow-x-auto">
                    <Table className="border rounded-b-md">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-left w-[3%]">
                            <span className="font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0%]">
                              #
                            </span>
                          </TableHead>
                          <TableHead className="text-left w-[10%]">
                            <span className="font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0%]">
                              Reg#
                            </span>
                          </TableHead>
                          <TableHead className="text-left w-[5%]">
                            <span className="font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0%]">
                              Room#
                            </span>
                          </TableHead>
                          <TableHead className="text-left w-[15%]">
                            <span className="font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0%]">
                              Name
                            </span>
                          </TableHead>
                          {Array.from({ length: 31 }, (_, i) => {
                            const dayNum = i + 1;
                            const isColoredColumn =
                              (dayNum - 2) % 7 === 0 && dayNum >= 2;
                            return (
                              <TableHead
                                key={`day${dayNum}`}
                                className={`text-center w-[2%] ${
                                  isColoredColumn ? "bg-gray-100" : ""
                                }`}
                              >
                                <span className="font-urbanist font-semibold text-[14px] leading-[100%] tracking-[0%]">
                                  {dayNum}
                                </span>
                              </TableHead>
                            );
                          })}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paginatedAttendanceData.map((row) => (
                          <TableRow key={row.key}>
                            <TableCell className="text-center">
                              {row.serialNumber}
                            </TableCell>
                            <TableCell className="text-center">
                              {row.regNumber}
                            </TableCell>
                            <TableCell className="text-center">
                              {row.roomNumber}
                            </TableCell>
                            <TableCell className="text-left">
                              {row.name}
                            </TableCell>
                            {Array.from({ length: 31 }, (_, i) => {
                              const dayNum = i + 1;
                              const isColoredColumn =
                                (dayNum - 2) % 7 === 0 && dayNum >= 2;
                              return (
                                <TableCell
                                  key={`day${dayNum}`}
                                  className={`text-center ${
                                    isColoredColumn ? "bg-gray-100" : ""
                                  }`}
                                >
                                  {row[`day${dayNum}`]}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>

                    {/* Pagination for Student Attendance */}
                    <Pagination
                      currentPage={attendancePage}
                      totalPages={attendanceTotalPages}
                      totalItems={attendanceTotalItems}
                      itemsPerPage={attendanceItemsPerPage}
                      onPageChange={setAttendancePage}
                      onItemsPerPageChange={setAttendanceItemsPerPage}
                      className="border-t border-primaryBorderColor"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </form>
  );
};
