import { useState, useMemo } from "react";
import { SuggestionApplicationModal } from "../../components/modals/SuggestionsApplicationModal";
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

interface SuggestionData {
  key: string;
  no: string;
  dateTime: string;
  reason: string;
  status: "In-Process" | "Accepted" | "Canceled";
}

type SortDirection = "asc" | "desc" | "none";

interface SortConfig {
  key: keyof SuggestionData | null;
  direction: SortDirection;
}

export const Suggestions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "none",
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Extended data as per pagination requirements
  const allData = useMemo<SuggestionData[]>(
    () => [
      {
        key: "1",
        no: "01",
        dateTime: "2025-05-18 10:30:00",
        reason: "Course Material Update",
        status: "In-Process",
      },
      {
        key: "2",
        no: "02",
        dateTime: "2025-05-17 14:15:22",
        reason: "UI Improvement",
        status: "Accepted",
      },
      {
        key: "3",
        no: "03",
        dateTime: "2025-05-15 09:45:11",
        reason: "New Feature Request",
        status: "In-Process",
      },
      {
        key: "4",
        no: "04",
        dateTime: "2025-05-14 16:22:33",
        reason: "System Performance",
        status: "Canceled",
      },
      {
        key: "5",
        no: "05",
        dateTime: "2025-05-13 11:18:45",
        reason: "Dashboard Enhancement",
        status: "Accepted",
      },
      {
        key: "6",
        no: "06",
        dateTime: "2025-05-12 08:55:12",
        reason: "Mobile App Integration",
        status: "In-Process",
      },
      {
        key: "7",
        no: "07",
        dateTime: "2025-05-11 13:40:28",
        reason: "User Interface Redesign",
        status: "Accepted",
      },
      {
        key: "8",
        no: "08",
        dateTime: "2025-05-10 15:33:17",
        reason: "Database Optimization",
        status: "In-Process",
      },
      {
        key: "9",
        no: "09",
        dateTime: "2025-05-09 12:20:05",
        reason: "Security Enhancement",
        status: "Canceled",
      },
      {
        key: "10",
        no: "10",
        dateTime: "2025-05-08 09:14:52",
        reason: "Notification System",
        status: "Accepted",
      },
      {
        key: "11",
        no: "11",
        dateTime: "2025-05-07 14:27:39",
        reason: "Report Generation",
        status: "In-Process",
      },
      {
        key: "12",
        no: "12",
        dateTime: "2025-05-06 10:45:21",
        reason: "API Documentation",
        status: "Accepted",
      },
      {
        key: "13",
        no: "13",
        dateTime: "2025-05-05 16:08:44",
        reason: "Testing Framework",
        status: "Canceled",
      },
      {
        key: "14",
        no: "14",
        dateTime: "2025-05-04 11:52:16",
        reason: "Backup System",
        status: "In-Process",
      },
      {
        key: "15",
        no: "15",
        dateTime: "2025-05-03 13:35:58",
        reason: "Analytics Dashboard",
        status: "Accepted",
      },
    ],
    []
  );

  // Sort function
  const requestSort = (key: keyof SuggestionData) => {
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
        const aValue = a[sortConfig.key as keyof SuggestionData];
        const bValue = b[sortConfig.key as keyof SuggestionData];
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
  } = usePagination<SuggestionData>({
    data: filteredData,
    initialItemsPerPage: 10,
  });

  // Get sort icon
  const getSortIcon = (key: keyof SuggestionData) => {
    if (sortConfig.key !== key) return <FaSort className="inline ml-1" />;
    if (sortConfig.direction === "asc")
      return <FaSortUp className="inline ml-1" />;
    if (sortConfig.direction === "desc")
      return <FaSortDown className="inline ml-1" />;
    return <FaSort className="inline ml-1" />;
  };

  const getStatusBadge = (status: "In-Process" | "Accepted" | "Canceled") => {
    if (status === "In-Process") {
      return (
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-md">
          In-Process
        </span>
      );
    }
    if (status === "Accepted") {
      return (
        <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-md">
          Accepted
        </span>
      );
    }
    if (status === "Canceled") {
      return (
        <span className="inline-block bg-red-100 text-red-800 px-4 py-1 rounded-md">
          Canceled
        </span>
      );
    }
    return null;
  };

  return (
    <>
      <div className="py-9 px-4 sm:px-5 lg:px-10 bg-primaryBgColor min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-2xl sm:text-3xl text-primaryHeadingColor bg-transparent text-left ">
            Suggestions
          </h1>
          <div className="w-fit">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-primaryBtnBgColor hover:bg-[#005a99] text-white text-base py-3 lg:py-5 px-5 roboto-font rounded-lg cursor-pointer"
            >
              <span className="roboto-font leading-0">
                Submit New Suggestions
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

        <div className="shadow-sm bg-white rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#0070bf] hover:bg-[#0070bf]">
                <TableHead
                  className="text-white font-medium text-md py-4 px-6 cursor-pointer"
                  onClick={() => requestSort("no")}
                >
                  No# {getSortIcon("no")}
                </TableHead>
                <TableHead
                  className="text-white font-medium text-md py-4 px-6 cursor-pointer"
                  onClick={() => requestSort("dateTime")}
                >
                  DateTime {getSortIcon("dateTime")}
                </TableHead>
                <TableHead
                  className="text-white font-medium text-md py-4 px-6 cursor-pointer"
                  onClick={() => requestSort("reason")}
                >
                  Reason {getSortIcon("reason")}
                </TableHead>
                <TableHead
                  className="text-white font-medium text-md py-4 px-6 cursor-pointer"
                  onClick={() => requestSort("status")}
                >
                  Status {getSortIcon("status")}
                </TableHead>
                <TableHead className="text-white font-medium text-md py-4 px-6">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((record) => (
                  <TableRow
                    key={record.key}
                    className="hover:bg-gray-50 border-b"
                  >
                    <TableCell className="py-4 px-6 text-md">
                      {record.no}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-md">
                      {record.dateTime}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-md">
                      {record.reason}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-md">
                      {getStatusBadge(record.status)}
                    </TableCell>
                    <TableCell className="py-4 px-6">
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
                    className="py-8 text-center text-gray-500"
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
              Submit New Suggestions
            </DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <SuggestionApplicationModal />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
