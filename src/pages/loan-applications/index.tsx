import { useState, useMemo } from "react";
import { LoanApplicationModal } from "../../components/modals/LoanApplicationModal";
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
import DeleteModal from "@/components/common/DeleteModal";

interface LoanData {
  key: string;
  no: string;
  dateTime: string;
  reason: string;
  from: string;
  to: string;
  days: number;
  amount: string;
  status: "In-Process" | "Accepted" | "Canceled";
}

type SortDirection = "asc" | "desc" | "none";

interface SortConfig {
  key: keyof LoanData | null;
  direction: SortDirection;
}

export const LoanApplication = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "none",
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Extended data for pagination demonstration
  const allData = useMemo<LoanData[]>(
    () => [
      {
        key: "1",
        no: "01",
        dateTime: "2025-04-25 15:09:04",
        reason: "Personal Loan",
        from: "2025-04-01",
        to: "2025-04-17",
        days: 92,
        amount: "100,000",
        status: "In-Process",
      },
      {
        key: "2",
        no: "02",
        dateTime: "2025-04-24 14:30:22",
        reason: "Emergency Fund",
        from: "2025-04-02",
        to: "2025-04-18",
        days: 85,
        amount: "75,000",
        status: "Accepted",
      },
      {
        key: "3",
        no: "03",
        dateTime: "2025-04-23 10:15:45",
        reason: "Medical Emergency",
        from: "2025-04-03",
        to: "2025-04-19",
        days: 78,
        amount: "150,000",
        status: "In-Process",
      },
      {
        key: "4",
        no: "04",
        dateTime: "2025-04-22 16:45:12",
        reason: "Education Loan",
        from: "2025-04-04",
        to: "2025-04-20",
        days: 65,
        amount: "200,000",
        status: "Canceled",
      },
      {
        key: "5",
        no: "05",
        dateTime: "2025-04-21 11:20:33",
        reason: "Home Improvement",
        from: "2025-04-05",
        to: "2025-04-21",
        days: 120,
        amount: "300,000",
        status: "Accepted",
      },
      {
        key: "6",
        no: "06",
        dateTime: "2025-04-20 13:55:18",
        reason: "Business Loan",
        from: "2025-04-06",
        to: "2025-04-22",
        days: 180,
        amount: "500,000",
        status: "In-Process",
      },
      {
        key: "7",
        no: "07",
        dateTime: "2025-04-19 09:40:27",
        reason: "Vehicle Purchase",
        from: "2025-04-07",
        to: "2025-04-23",
        days: 150,
        amount: "250,000",
        status: "Accepted",
      },
      {
        key: "8",
        no: "08",
        dateTime: "2025-04-18 15:25:44",
        reason: "Wedding Expenses",
        from: "2025-04-08",
        to: "2025-04-24",
        days: 90,
        amount: "180,000",
        status: "In-Process",
      },
      {
        key: "9",
        no: "09",
        dateTime: "2025-04-17 12:10:15",
        reason: "Travel Loan",
        from: "2025-04-09",
        to: "2025-04-25",
        days: 60,
        amount: "80,000",
        status: "Canceled",
      },
      {
        key: "10",
        no: "10",
        dateTime: "2025-04-16 08:35:52",
        reason: "Debt Consolidation",
        from: "2025-04-10",
        to: "2025-04-26",
        days: 200,
        amount: "400,000",
        status: "Accepted",
      },
      {
        key: "11",
        no: "11",
        dateTime: "2025-04-15 14:50:38",
        reason: "Investment Loan",
        from: "2025-04-11",
        to: "2025-04-27",
        days: 240,
        amount: "600,000",
        status: "In-Process",
      },
      {
        key: "12",
        no: "12",
        dateTime: "2025-04-14 17:15:29",
        reason: "Equipment Purchase",
        from: "2025-04-12",
        to: "2025-04-28",
        days: 100,
        amount: "120,000",
        status: "Accepted",
      },
    ],
    []
  );

  // Sort function
  const requestSort = (key: keyof LoanData) => {
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
          item.to.toLowerCase().includes(lowerCaseSearch) ||
          item.amount.toLowerCase().includes(lowerCaseSearch)
      );
    }
    // Apply sorting
    if (sortConfig.key && sortConfig.direction !== "none") {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof LoanData];
        const bValue = b[sortConfig.key as keyof LoanData];
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
  } = usePagination<LoanData>({ data: filteredData, initialItemsPerPage: 10 });

  // Get sort icon
  const getSortIcon = (key: keyof LoanData) => {
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
            Loan Applications
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
            placeholder="Search by reason, date, status, amount..."
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
                  onClick={() => requestSort("amount")}
                >
                  Amount {getSortIcon("amount")}
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
                      {record.amount}
                    </TableCell>
                    <TableCell className="py-4 px-6 text-md">
                      {record.status === "In-Process" && (
                        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-md whitespace-nowrap">
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
                        <button
                          onClick={() => setIsDeleteModalOpen(true)}
                          className="bg-red-600 hover:bg-red-700 text-white font-normal px-4 py-1 rounded-md cursor-pointer"
                        >
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
                    colSpan={9}
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
              Submit Loan Application
            </DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <LoanApplicationModal
              onSubmit={() => setIsModalOpen(false)}
              onCancel={() => setIsModalOpen(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
      <DeleteModal
        isModalOpen={isDeleteModalOpen}
        setIsModalOpen={setIsDeleteModalOpen}
      />
    </>
  );
};
