import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ROUTES, TIMETABLE_ROUTES } from "../../config/routes";
import { Pagination } from "../../components/ui/pagination";
import { usePagination } from "../../hooks/use-pagination";

interface TimeTableRowData {
  key: string;
  section: string;
  room: string;
  periods: string[];
}

export const TimeTable = () => {
  const nav = useNavigate();

  // Sample data
  const sampleData = [
    {
      key: "1",
      section: "A",
      room: "101",
      periods: ["Math", "Eng", "Sci", "Bio", "Chem", "Hist", "Geo", "PE"],
    },
    {
      key: "2",
      section: "B",
      room: "102",
      periods: ["Eng", "Math", "Hist", "Geo", "Sci", "PE", "Bio", "Chem"],
    },
    {
      key: "3",
      section: "C",
      room: "103",
      periods: ["Sci", "Bio", "Math", "Eng", "PE", "Hist", "Chem", "Geo"],
    },
    {
      key: "4",
      section: "D",
      room: "104",
      periods: ["Bio", "Chem", "Eng", "Math", "Geo", "Sci", "PE", "Hist"],
    },
    {
      key: "5",
      section: "E",
      room: "105",
      periods: ["Chem", "Sci", "PE", "Bio", "Hist", "Math", "Eng", "Geo"],
    },
    {
      key: "6",
      section: "F",
      room: "106",
      periods: ["Hist", "Geo", "Bio", "Chem", "Eng", "PE", "Math", "Sci"],
    },
  ];

  const testStaffData = [
    {
      key: "1",
      section: "RMB1",
      room: "B-1 (4/60)",
      periods: [
        "07:00 - 07:50 Chem (1-6)",
        "07:50 - 08:30\nBio\n(1-6)",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    },
    {
      key: "2",
      section: "RMB2",
      room: "B-2 (4/55)",
      periods: [
        "08:00 - 08:50 Math (1-5)",
        "08:50 - 09:30\nPhys\n(1-5)",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    },
    {
      key: "3",
      section: "RMB3",
      room: "B-3 (4/50)",
      periods: [
        "09:00 - 09:50 Eng (1-4)",
        "09:50 - 10:30\nUrdu\n(1-4)",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    },
  ];

  const {
    currentPage: classCurrentPage,
    totalPages: classTotalPages,
    totalItems: classTotalItems,
    itemsPerPage: classItemsPerPage,
    paginatedData: classPaginatedData,
    setCurrentPage: setClassCurrentPage,
    setItemsPerPage: setClassItemsPerPage,
  } = usePagination<TimeTableRowData>({
    data: sampleData,
    initialItemsPerPage: 10,
  });

  const {
    currentPage: staffCurrentPage,
    totalPages: staffTotalPages,
    totalItems: staffTotalItems,
    itemsPerPage: staffItemsPerPage,
    paginatedData: staffPaginatedData,
    setCurrentPage: setStaffCurrentPage,
    setItemsPerPage: setStaffItemsPerPage,
  } = usePagination<TimeTableRowData>({
    data: testStaffData,
    initialItemsPerPage: 10,
  });

  const renderTable = (
    data: TimeTableRowData[],
    title: string,
    currentPage: number,
    totalPages: number,
    totalItems: number,
    itemsPerPage: number,
    setCurrentPage: (page: number) => void,
    setItemsPerPage: (itemsPerPage: number) => void
  ) => (
    <div className="mb-8">
      <h1 className="text-mainColor text-xl font-bold mb-4">{title}</h1>
      <div className="shadow-sm bg-white rounded-md overflow-x-auto">
        <Table className="table-fixed w-full">
          <TableHeader>
            <TableRow className="bg-[#0070bf] hover:bg-[#0070bf]">
              <TableHead className="text-white font-medium text-center w-20">
                Section
              </TableHead>
              <TableHead className="text-white font-medium text-center w-20">
                Room#
              </TableHead>
              {Array.from({ length: 8 }, (_, index) => (
                <TableHead
                  key={index + 1}
                  className="text-white font-medium text-center w-20"
                >
                  {index + 1}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.key}>
                <TableCell className="text-center w-20">
                  {row.section}
                </TableCell>
                <TableCell className="text-center w-20">{row.room}</TableCell>
                {row.periods.map((period: string, index: number) => (
                  <TableCell key={index} className="text-center w-20">
                    {period && (
                      <span
                        className={`whitespace-pre-line roboto-font font-medium ${
                          period.includes("07:00") || period.includes("07:50")
                            ? "text-mainColor cursor-pointer"
                            : "text-mainColor"
                        }`}
                        onClick={
                          period.includes("07:00") || period.includes("07:50")
                            ? () => nav(TIMETABLE_ROUTES.STUDENT_ATTENDANCE)
                            : undefined
                        }
                      >
                        {period}
                      </span>
                    )}
                  </TableCell>
                ))}
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
    </div>
  );

  return (
    <div className="py-9 px-4 sm:px-5 lg:px-10 bg-primaryBgColor min-h-screen">
      <button
        onClick={() => {
          nav(ROUTES.DASHBOARD);
        }}
        className="flex items-center gap-2 mb-4 text-black text-base hover:text-gray-800 cursor-pointer roboto-font"
      >
        <FaChevronLeft size={18} />
        Back to Dashboard
      </button>

      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-2xl sm:text-3xl text-primaryHeadingColor">
          Education Portal - Faculty
        </h1>
      </div>

      <div className="p-6 bg-white rounded-2xl flex-col gap-4 flex">
        {renderTable(
          classPaginatedData,
          "Class Time Table",
          classCurrentPage,
          classTotalPages,
          classTotalItems,
          classItemsPerPage,
          setClassCurrentPage,
          setClassItemsPerPage
        )}
        {renderTable(
          staffPaginatedData,
          "Faculty Member (Session: 2024)",
          staffCurrentPage,
          staffTotalPages,
          staffTotalItems,
          staffItemsPerPage,
          setStaffCurrentPage,
          setStaffItemsPerPage
        )}
      </div>
    </div>
  );
};
