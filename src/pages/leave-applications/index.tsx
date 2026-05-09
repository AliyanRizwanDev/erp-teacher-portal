import { useState, useMemo } from "react";
import { LeaveApplicationModal } from "../../components/modals/LeaveApplicationModal";
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
import ConfirmationModal from "@/components/common/ConfirmationModal";
interface LeaveApplicationData {
  key: string;
  no: string;
  dateTime: string;
  reason: string;
  from: string;
  to: string;
  days: number;
  status: "In-Process" | "Accepted" | "Canceled";
}

type SortDirection = "asc" | "desc" | "none";

interface SortConfig {
  key: keyof LeaveApplicationData | null;
  direction: SortDirection;
}

export const LeaveApplications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "none",
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Extended data for pagination demonstration
  const allData = useMemo<LeaveApplicationData[]>(
    () => [
      {
        key: "1",
        no: "01",
        dateTime: "2025-04-25 15:09:04",
        reason: "Sick Leave",
        from: "2025-04-01",
        to: "2025-04-17",
        days: 17,
        status: "In-Process",
      },
      {
        key: "2",
        no: "02",
        dateTime: "2025-04-24 14:30:22",
        reason: "Annual Leave",
        from: "2025-04-02",
        to: "2025-04-18",
        days: 17,
        status: "Accepted",
      },
      {
        key: "3",
        no: "03",
        dateTime: "2025-04-23 10:15:45",
        reason: "Emergency Leave",
        from: "2025-04-03",
        to: "2025-04-19",
        days: 17,
        status: "In-Process",
      },
      {
        key: "4",
        no: "04",
        dateTime: "2025-04-22 16:45:12",
        reason: "Casual Leave",
        from: "2025-04-04",
        to: "2025-04-20",
        days: 17,
        status: "Canceled",
      },
      {
        key: "5",
        no: "05",
        dateTime: "2025-04-21 11:20:33",
        reason: "Maternity Leave",
        from: "2025-04-05",
        to: "2025-04-21",
        days: 17,
        status: "Accepted",
      },
      {
        key: "6",
        no: "06",
        dateTime: "2025-04-20 13:55:18",
        reason: "Personal Leave",
        from: "2025-04-06",
        to: "2025-04-22",
        days: 17,
        status: "In-Process",
      },
      {
        key: "7",
        no: "07",
        dateTime: "2025-04-19 09:40:27",
        reason: "Medical Leave",
        from: "2025-04-07",
        to: "2025-04-23",
        days: 17,
        status: "Accepted",
      },
      {
        key: "8",
        no: "08",
        dateTime: "2025-04-18 15:25:44",
        reason: "Bereavement Leave",
        from: "2025-04-08",
        to: "2025-04-24",
        days: 17,
        status: "In-Process",
      },
      {
        key: "9",
        no: "09",
        dateTime: "2025-04-17 12:10:15",
        reason: "Study Leave",
        from: "2025-04-09",
        to: "2025-04-25",
        days: 17,
        status: "Canceled",
      },
      {
        key: "10",
        no: "10",
        dateTime: "2025-04-16 08:35:52",
        reason: "Compensatory Leave",
        from: "2025-04-10",
        to: "2025-04-26",
        days: 17,
        status: "Accepted",
      },
      {
        key: "11",
        no: "11",
        dateTime: "2025-04-15 14:50:38",
        reason: "Sabbatical Leave",
        from: "2025-04-11",
        to: "2025-04-27",
        days: 17,
        status: "In-Process",
      },
      {
        key: "12",
        no: "12",
        dateTime: "2025-04-14 17:15:29",
        reason: "Vacation Leave",
        from: "2025-04-12",
        to: "2025-04-28",
        days: 17,
        status: "Accepted",
      },
    ],
    []
  );

  // Sort function
  const requestSort = (key: keyof LeaveApplicationData) => {
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
          item.from.toLowerCase().includes(lowerCaseSearch) ||
          item.to.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // Apply sorting
    if (sortConfig.key && sortConfig.direction !== "none") {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof LeaveApplicationData];
        const bValue = b[sortConfig.key as keyof LeaveApplicationData];

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
  } = usePagination<LeaveApplicationData>({
    data: filteredData,
    initialItemsPerPage: 10,
  });

  // Get sort icon
  const getSortIcon = (key: keyof LeaveApplicationData) => {
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
            Leave Applications
          </h1>
          <div className="w-fit">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-primaryBtnBgColor hover:bg-[#005a99] text-white text-base py-3 lg:py-5 px-5 roboto-font rounded-lg cursor-pointer"
            >
              <span className="roboto-font leading-0">
                Submit New Application
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
                  onClick={() => requestSort("from")}
                >
                  From {getSortIcon("from")}
                </TableHead>
                <TableHead
                  className="text-white font-medium text-md py-4 px-6 cursor-pointer"
                  onClick={() => requestSort("to")}
                >
                  To {getSortIcon("to")}
                </TableHead>
                <TableHead
                  className="text-white font-medium text-md py-4 px-6 cursor-pointer"
                  onClick={() => requestSort("days")}
                >
                  Days {getSortIcon("days")}
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
                      {record.from}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-md">
                      {record.to}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-md">
                      {record.days}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-md">
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
                    colSpan={8}
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
              Submit Leave Application
            </DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <LeaveApplicationModal
              onSubmit={(data) => {
                console.log("Leave application submitted:", data);
                setConfirmationModal(true);
                setIsModalOpen(false);
              }}
              onCancel={() => setIsModalOpen(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
      <ConfirmationModal
        isModalOpen={confirmationModal}
        setIsModalOpen={setConfirmationModal}
      />
    </>
  );
};
