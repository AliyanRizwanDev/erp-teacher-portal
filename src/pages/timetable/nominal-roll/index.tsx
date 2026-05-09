import { useForm, Controller } from "react-hook-form";
import { DropdownField } from "../../../components/common/DropdownField";
import { InputField } from "../../../components/common/InputField";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { loginDropdownOptions } from "../../../utils/data";
import { MonthPicker } from "@/components/ui/month-picker";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Pagination } from "../../../components/ui/pagination";
import { usePagination } from "../../../hooks/use-pagination";

interface NominalRollFormValues {
  program: string;
  discipline: string;
  section: string;
  month: Date | undefined;
}

interface NominalRollStudent {
  key: string;
  serialNumber: string;
  regNumber: string;
  rollNumber: string;
  name: string;
  fatherName: string;
  dateOfBirth: string;
  cnic: string;
  address: string;
  phoneNumber: string;
  admissionDate: string;
}

export const NominalRoll = () => {
  const { control, handleSubmit } = useForm<NominalRollFormValues>({
    defaultValues: {
      program: "",
      discipline: "",
      section: "",
      month: undefined,
    },
  });
  const [showReport, setShowReport] = useState(false);

  // Sample nominal roll data
  const nominalRollData: NominalRollStudent[] = [
    {
      key: "1",
      serialNumber: "1",
      regNumber: "24-4-S-1-000001",
      rollNumber: "001",
      name: "Student_001",
      fatherName: "Guardian_001",
      dateOfBirth: "15/08/2005",
      cnic: "[CNIC_REMOVED]",
      address: "[ADDRESS_REMOVED]",
      phoneNumber: "[PHONE_REMOVED]",
      admissionDate: "01/09/2024",
    },
    {
      key: "2",
      serialNumber: "2",
      regNumber: "24-4-S-1-000002",
      rollNumber: "002",
      name: "Student_002",
      fatherName: "Guardian_002",
      dateOfBirth: "22/07/2005",
      cnic: "[CNIC_REMOVED]",
      address: "[ADDRESS_REMOVED]",
      phoneNumber: "[PHONE_REMOVED]",
      admissionDate: "01/09/2024",
    },
    {
      key: "3",
      serialNumber: "3",
      regNumber: "24-4-S-1-000003",
      rollNumber: "003",
      name: "Student_003",
      fatherName: "Guardian_003",
      dateOfBirth: "10/06/2005",
      cnic: "[CNIC_REMOVED]",
      address: "[ADDRESS_REMOVED]",
      phoneNumber: "[PHONE_REMOVED]",
      admissionDate: "01/09/2024",
    },
    {
      key: "4",
      serialNumber: "4",
      regNumber: "24-4-S-1-000004",
      rollNumber: "004",
      name: "Student_004",
      fatherName: "Guardian_004",
      dateOfBirth: "05/09/2005",
      cnic: "[CNIC_REMOVED]",
      address: "[ADDRESS_REMOVED]",
      phoneNumber: "[PHONE_REMOVED]",
      admissionDate: "01/09/2024",
    },
    {
      key: "5",
      serialNumber: "5",
      regNumber: "24-4-S-1-000005",
      rollNumber: "005",
      name: "Student_005",
      fatherName: "Guardian_005",
      dateOfBirth: "18/04/2005",
      cnic: "[CNIC_REMOVED]",
      address: "[ADDRESS_REMOVED]",
      phoneNumber: "[PHONE_REMOVED]",
      admissionDate: "01/09/2024",
    },
    {
      key: "6",
      serialNumber: "6",
      regNumber: "24-4-S-1-000006",
      rollNumber: "006",
      name: "Student_006",
      fatherName: "Guardian_006",
      dateOfBirth: "30/11/2004",
      cnic: "[CNIC_REMOVED]",
      address: "[ADDRESS_REMOVED]",
      phoneNumber: "[PHONE_REMOVED]",
      admissionDate: "01/09/2024",
    },
    {
      key: "7",
      serialNumber: "7",
      regNumber: "24-4-S-1-000007",
      rollNumber: "007",
      name: "Student_007",
      fatherName: "Guardian_007",
      dateOfBirth: "12/12/2004",
      cnic: "[CNIC_REMOVED]",
      address: "[ADDRESS_REMOVED]",
      phoneNumber: "[PHONE_REMOVED]",
      admissionDate: "01/09/2024",
    },
    {
      key: "8",
      serialNumber: "8",
      regNumber: "24-4-S-1-000008",
      rollNumber: "008",
      name: "Student_008",
      fatherName: "Guardian_008",
      dateOfBirth: "25/03/2005",
      cnic: "[CNIC_REMOVED]",
      address: "[ADDRESS_REMOVED]",
      phoneNumber: "[PHONE_REMOVED]",
      admissionDate: "01/09/2024",
    },
    {
      key: "9",
      serialNumber: "9",
      regNumber: "24-4-S-1-000009",
      rollNumber: "009",
      name: "Student_009",
      fatherName: "Guardian_009",
      dateOfBirth: "08/01/2005",
      cnic: "[CNIC_REMOVED]",
      address: "[ADDRESS_REMOVED]",
      phoneNumber: "[PHONE_REMOVED]",
      admissionDate: "01/09/2024",
    },
    {
      key: "10",
      serialNumber: "10",
      regNumber: "24-4-S-1-000010",
      rollNumber: "010",
      name: "Student_010",
      fatherName: "Guardian_010",
      dateOfBirth: "16/10/2004",
      cnic: "[CNIC_REMOVED]",
      address: "[ADDRESS_REMOVED]",
      phoneNumber: "[PHONE_REMOVED]",
      admissionDate: "01/09/2024",
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
  } = usePagination<NominalRollStudent>({
    data: nominalRollData,
    initialItemsPerPage: 10,
  });

  const onSubmit = (_data: NominalRollFormValues) => {
    setShowReport(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-9 px-4 sm:px-5 lg:px-10 bg-primaryBgColor min-h-screen">
        <h1 className="font-bold text-2xl sm:text-3xl text-primaryHeadingColor flex bg-transparent">
          Student Nominal Roll
        </h1>

        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
            <InputField
              label="Campus"
              labelClassName="!font-medium"
              placeholder="Enter Campus"
              className="!rounded-lg !bg-[#e8ebef]"
              value={"North Campus"}
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
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl col">
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
          <div className="bg-white px-4 pt-4 pb-4 rounded-xl">
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
                    Generate Nominal Roll
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
                Student Nominal Roll
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
                    <TableHead className="text-white font-medium text-center">
                      Roll#
                    </TableHead>
                    <TableHead className="text-white font-medium text-left">
                      Name
                    </TableHead>
                    <TableHead className="text-white font-medium text-left">
                      Father Name
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      DOB
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      CNIC
                    </TableHead>
                    <TableHead className="text-white font-medium text-left">
                      Address
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      Phone
                    </TableHead>
                    <TableHead className="text-white font-medium text-center">
                      Admission Date
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
                      <TableCell className="text-center">
                        {student.rollNumber}
                      </TableCell>
                      <TableCell className="text-left">
                        {student.name}
                      </TableCell>
                      <TableCell className="text-left">
                        {student.fatherName}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.dateOfBirth}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.cnic}
                      </TableCell>
                      <TableCell className="text-left">
                        {student.address}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.phoneNumber}
                      </TableCell>
                      <TableCell className="text-center">
                        {student.admissionDate}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination for Nominal Roll */}
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
