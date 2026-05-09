import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/routes";
import { FaChevronLeft } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "@/components/ui/pagination";
import { usePagination } from "@/hooks/use-pagination";

interface AttendanceData {
  key: string;
  no: string;
  dateTime: string;
  inTime?: string;
  inCampus?: string;
  inType?: string;
  outTime?: string;
  outCampus?: string;
  outType?: string;
}

export const Attendance = () => {
  const nav = useNavigate();

  // Extended data for demonstration
  const allData: AttendanceData[] = [
    {
      key: "1",
      no: "1",
      dateTime: "2025-05-20",
      inTime: "09:00 AM",
      inCampus: "Main",
      inType: "Regular",
      outTime: "05:00 PM",
      outCampus: "Main",
      outType: "Regular",
    },
    {
      key: "2",
      no: "2",
      dateTime: "2025-05-19",
      inTime: "08:45 AM",
      inCampus: "Main",
      inType: "Regular",
      outTime: "04:30 PM",
      outCampus: "Main",
      outType: "Regular",
    },
    {
      key: "3",
      no: "3",
      dateTime: "2025-05-18",
      inTime: "09:15 AM",
      inCampus: "Main",
      inType: "Late",
      outTime: "05:15 PM",
      outCampus: "Main",
      outType: "Regular",
    },
    {
      key: "4",
      no: "4",
      dateTime: "2025-05-17",
      inTime: "08:30 AM",
      inCampus: "Main",
      inType: "Regular",
      outTime: "05:00 PM",
      outCampus: "Main",
      outType: "Regular",
    },
    {
      key: "5",
      no: "5",
      dateTime: "2025-05-16",
      inTime: "09:10 AM",
      inCampus: "Main",
      inType: "Regular",
      outTime: "04:45 PM",
      outCampus: "Main",
      outType: "Regular",
    },
    {
      key: "6",
      no: "6",
      dateTime: "2025-05-15",
      inTime: "08:55 AM",
      inCampus: "Main",
      inType: "Regular",
      outTime: "05:30 PM",
      outCampus: "Main",
      outType: "Regular",
    },
    {
      key: "7",
      no: "7",
      dateTime: "2025-05-14",
      inTime: "09:05 AM",
      inCampus: "Main",
      inType: "Regular",
      outTime: "05:10 PM",
      outCampus: "Main",
      outType: "Regular",
    },
    {
      key: "8",
      no: "8",
      dateTime: "2025-05-13",
      inTime: "08:40 AM",
      inCampus: "Main",
      inType: "Regular",
      outTime: "04:50 PM",
      outCampus: "Main",
      outType: "Regular",
    },
    {
      key: "9",
      no: "9",
      dateTime: "2025-05-12",
      inTime: "09:20 AM",
      inCampus: "Main",
      inType: "Late",
      outTime: "05:20 PM",
      outCampus: "Main",
      outType: "Regular",
    },
    {
      key: "10",
      no: "10",
      dateTime: "2025-05-11",
      inTime: "08:50 AM",
      inCampus: "Main",
      inType: "Regular",
      outTime: "05:05 PM",
      outCampus: "Main",
      outType: "Regular",
    },
    {
      key: "11",
      no: "11",
      dateTime: "2025-05-10",
      inTime: "09:00 AM",
      inCampus: "Main",
      inType: "Regular",
      outTime: "05:00 PM",
      outCampus: "Main",
      outType: "Regular",
    },
    {
      key: "12",
      no: "12",
      dateTime: "2025-05-09",
      inTime: "08:35 AM",
      inCampus: "Main",
      inType: "Regular",
      outTime: "04:55 PM",
      outCampus: "Main",
      outType: "Regular",
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
  } = usePagination<AttendanceData>({
    data: allData,
    initialItemsPerPage: 10,
  });

  return (
    <div className="py-9 px-5 lg:px-10 bg-primaryBgColor min-h-screen ">
      <button
        onClick={() => {
          nav(ROUTES.DASHBOARD);
        }}
        className="flex items-center gap-2 mb-4 text-black text-base hover:text-gray-800 cursor-pointer roboto-font"
      >
        <FaChevronLeft size={18} />
        Back to Dashboard
      </button>
      <h1 className="font-bold text-3xl text-primaryHeadingColor bg-transparent mb-6">
        My Attendance Summary{" "}
        <span className="text-primaryParaColor text-xl">(May-2025)</span>
      </h1>

      <div className="shadow-sm bg-white rounded-md overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-[#0070bf] text-white text-center">
                Sr#
              </TableHead>
              <TableHead className="bg-[#0070bf] text-white text-center">
                DateTime
              </TableHead>
              <TableHead
                className="bg-[#0070bf] text-white text-center"
                colSpan={3}
              >
                In
              </TableHead>
              <TableHead
                className="bg-[#0070bf] text-white text-center"
                colSpan={3}
              >
                Out
              </TableHead>
            </TableRow>
            <TableRow>
              <TableHead className="bg-[#0070bf] text-white text-center"></TableHead>
              <TableHead className="bg-[#0070bf] text-white text-center"></TableHead>
              <TableHead className="bg-[#0070bf] text-white text-center">
                Time
              </TableHead>
              <TableHead className="bg-[#0070bf] text-white text-center">
                Campus
              </TableHead>
              <TableHead className="bg-[#0070bf] text-white text-center">
                Type
              </TableHead>
              <TableHead className="bg-[#0070bf] text-white text-center">
                Time
              </TableHead>
              <TableHead className="bg-[#0070bf] text-white text-center">
                Campus
              </TableHead>
              <TableHead className="bg-[#0070bf] text-white text-center">
                Type
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.key}>
                <TableCell className="text-center">{row.no}</TableCell>
                <TableCell className="text-center">{row.dateTime}</TableCell>
                <TableCell className="text-center">{row.inTime}</TableCell>
                <TableCell className="text-center">{row.inCampus}</TableCell>
                <TableCell className="text-center">{row.inType}</TableCell>
                <TableCell className="text-center">{row.outTime}</TableCell>
                <TableCell className="text-center">{row.outCampus}</TableCell>
                <TableCell className="text-center">{row.outType}</TableCell>
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
};
