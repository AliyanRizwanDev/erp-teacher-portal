import { useState, useMemo } from "react";
import { ComplaintsApplicationModal } from "../../components/modals/ComplaintsApplicationModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Pagination } from "../../components/ui/pagination";
import { usePagination } from "../../hooks/use-pagination";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

interface ComplaintData {
  key: string;
  no: string;
  dateTime: string;
  reason: string;
  status: "In-Process" | "Accepted" | "Canceled";
}

type SortDirection = "asc" | "desc" | "none";

interface SortConfig {
  key: keyof ComplaintData | null;
  direction: SortDirection;
}

export const Complaints = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "none",
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Extended data for pagination demonstration
  const allData = useMemo<ComplaintData[]>(
    () => [
      {
        key: "1",
        no: "01",
        dateTime: "2025-04-25 15:09:04",
        reason: "Administrative Complaint",
        status: "In-Process",
      },
      {
        key: "2",
        no: "02",
        dateTime: "2025-04-24 14:30:22",
        reason: "Faculty Issue",
        status: "Canceled",
      },
      {
        key: "3",
        no: "03",
        dateTime: "2025-04-23 10:15:45",
        reason: "Infrastructure Problem",
        status: "Accepted",
      },
      {
        key: "4",
        no: "04",
        dateTime: "2025-04-22 16:45:12",
        reason: "System Error",
        status: "In-Process",
      },
      {
        key: "5",
        no: "05",
        dateTime: "2025-04-21 11:20:33",
        reason: "Course Content Issue",
        status: "Accepted",
      },
      {
        key: "6",
        no: "06",
        dateTime: "2025-04-20 13:55:18",
        reason: "Examination Complaint",
        status: "In-Process",
      },
      {
        key: "7",
        no: "07",
        dateTime: "2025-04-19 09:40:27",
        reason: "Grading Issue",
        status: "Canceled",
      },
      {
        key: "8",
        no: "08",
        dateTime: "2025-04-18 15:25:44",
        reason: "Library Services",
        status: "Accepted",
      },
      {
        key: "9",
        no: "09",
        dateTime: "2025-04-17 12:10:15",
        reason: "Registration Problem",
        status: "In-Process",
      },
      {
        key: "10",
        no: "10",
        dateTime: "2025-04-16 08:35:52",
        reason: "Payment Issue",
        status: "Accepted",
      },
      {
        key: "11",
        no: "11",
        dateTime: "2025-04-15 14:50:38",
        reason: "Schedule Conflict",
        status: "In-Process",
      },
      {
        key: "12",
        no: "12",
        dateTime: "2025-04-14 17:15:29",
        reason: "Resource Shortage",
        status: "Canceled",
      },
    ],
    []
  );

  // Sort function
  const requestSort = (key: keyof ComplaintData) => {
    let direction: SortDirection = "asc";
    if (sortConfig.key === key) {
      if (sortConfig.direction === "asc") {
        direction = "desc";
      } else if (sortConfig.direction === "desc") {
        direction = "none";
      } else {
        direction = "asc";
      }
    }
    setSortConfig({ key, direction });
  };

  // Get sorted and filtered data
  const filteredData = useMemo(() => {
    let filtered = [...allData];
    // Apply search filter
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.reason.toLowerCase().includes(lowerCaseSearch) ||
          item.dateTime.toLowerCase().includes(lowerCaseSearch) ||
          item.status.toLowerCase().includes(lowerCaseSearch) ||
          item.no.toLowerCase().includes(lowerCaseSearch)
      );
    }
    // Apply sorting
    if (sortConfig.key && sortConfig.direction !== "none") {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof ComplaintData];
        const bValue = b[sortConfig.key as keyof ComplaintData];
        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return filtered;
  }, [allData, sortConfig, searchTerm]);

  // Use pagination hook
  const {
    currentPage,
    totalPages,
    paginatedData,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
  } = usePagination<ComplaintData>({
    data: filteredData,
    initialItemsPerPage: 10,
  });

  // Get sort icon
  const getSortIcon = (key: keyof ComplaintData) => {
    if (sortConfig.key !== key) return <FaSort className="inline ml-1" />;
    if (sortConfig.direction === "asc")
      return <FaSortUp className="inline ml-1" />;
    if (sortConfig.direction === "desc")
      return <FaSortDown className="inline ml-1" />;
    return <FaSort className="inline ml-1" />;
  };

  return (
    <>
      <div className="py-9 px-4 sm:px-5 lg:px-10 bg-primaryBgColor min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-2xl sm:text-3xl text-primaryHeadingColor bg-transparent text-left ">
            Complaints
          </h1>
          <div className="w-fit">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-primaryBtnBgColor hover:bg-[#005a99] text-white text-base py-3 lg:py-5 px-5 roboto-font rounded-lg cursor-pointer"
            >
              <span className="roboto-font leading-0">
                Submit New Complaints
              </span>
            </Button>
          </div>
        </div>

        <div className="mb-4 flex justify-end">
          <Input
            type="text"
            placeholder="Search by reason, date, status..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-2xs bg-white"
          />
        </div>

        <div className="shadow-sm bg-white rounded-xl overflow-hidden border border-gray-200">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-[#0070bf] hover:bg-[#0070bf]">
                <TableHead
                  className="text-white font-medium text-md py-4 px-6 cursor-pointer border-l border-r border-gray-200 first:border-l-0 last:border-r-0"
                  onClick={() => requestSort("no")}
                >
                  No# {getSortIcon("no")}
                </TableHead>
                <TableHead
                  className="text-white font-medium text-md py-4 px-6 cursor-pointer border-l border-r border-gray-200 first:border-l-0 last:border-r-0"
                  onClick={() => requestSort("dateTime")}
                >
                  DateTime {getSortIcon("dateTime")}
                </TableHead>
                <TableHead
                  className="text-white font-medium text-md py-4 px-6 cursor-pointer border-l border-r border-gray-200 first:border-l-0 last:border-r-0"
                  onClick={() => requestSort("reason")}
                >
                  Reason {getSortIcon("reason")}
                </TableHead>
                <TableHead
                  className="text-white font-medium text-md py-4 px-6 cursor-pointer border-l border-r border-gray-200 first:border-l-0 last:border-r-0"
                  onClick={() => requestSort("status")}
                >
                  Status {getSortIcon("status")}
                </TableHead>
                <TableHead className="text-white font-medium text-md py-4 px-6 border-l border-r border-gray-200 first:border-l-0 last:border-r-0">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((record) => (
                  <TableRow
                    key={record.key}
                    className="hover:bg-gray-50 border-b border-gray-200"
                  >
                    <TableCell className="py-4 px-6 text-md border-l border-r border-gray-200 first:border-l-0 last:border-r-0">
                      {record.no}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-md border-l border-r border-gray-200 first:border-l-0 last:border-r-0">
                      {record.dateTime}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-md border-l border-r border-gray-200 first:border-l-0 last:border-r-0">
                      {record.reason}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-md border-l border-r border-gray-200 first:border-l-0 last:border-r-0">
                      {record.status === "In-Process" && (
                        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-md">
                          In-Process
                        </span>
                      )}
                      {record.status === "Accepted" && (
                        <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-md">
                          Accepted
                        </span>
                      )}
                      {record.status === "Canceled" && (
                        <span className="inline-block bg-red-100 text-red-800 px-4 py-1 rounded-md">
                          Canceled
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="py-4 px-6 border-l border-r border-gray-200 first:border-l-0 last:border-r-0">
                      {record.status === "In-Process" ? (
                        <button className="bg-red-600 hover:bg-red-700 text-white font-normal px-4 py-1 rounded-md cursor-pointer">
                          Cancel
                        </button>
                      ) : (
                        <button
                          className="bg-gray-200 text-gray-400 font-normal px-4 py-1 rounded-md"
                          disabled
                        >
                          Cancel
                        </button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="py-8 text-center text-gray-500 border-l border-r border-gray-200 first:border-l-0 last:border-r-0"
                  >
                    No data found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Standardized Pagination */}
          <div className="px-6 py-4 bg-white border-t">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              itemsPerPage={itemsPerPage}
              totalItems={filteredData.length}
              onPageChange={setCurrentPage}
              onItemsPerPageChange={setItemsPerPage}
            />
          </div>
        </div>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[660px] p-0 rounded-[25px] dialog-white-cross">
          <DialogHeader className="bg-[#0070bf] text-white p-4 rounded-t-[10px]">
            <DialogTitle className="font-urbanist font-semibold text-xl">
              Submit New Complaints
            </DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <ComplaintsApplicationModal />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
