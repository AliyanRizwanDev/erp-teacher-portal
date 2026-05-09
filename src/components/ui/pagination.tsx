import React from "react";
import { Button } from "./button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  className?: string;
  showPageInfo?: boolean;
  showItemsPerPage?: boolean;
  itemsPerPageOptions?: number[];
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  className = "",
  showPageInfo = true,
  showItemsPerPage = true,
  itemsPerPageOptions = [10, 25, 50, 100],
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page numbers to show
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  // Always show pagination, just disable buttons when needed

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-2 bg-white ${className}`}
    >
      {/* Left side: Items per page and page info */}
      <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-primaryParaColor">
        {showItemsPerPage && (
          <div className="flex items-center gap-2">
            <span className="roboto-font">Show</span>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => onItemsPerPageChange(parseInt(value))}
            >
              <SelectTrigger className="w-20 h-8 border border-primaryBorderColor rounded-md bg-white focus:ring-2 focus:ring-mainColor/20 focus:border-mainColor">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border border-primaryBorderColor shadow-lg">
                {itemsPerPageOptions.map((option) => (
                  <SelectItem
                    key={option}
                    value={option.toString()}
                    className="hover:bg-primaryBgColor cursor-pointer"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="roboto-font">entries</span>
          </div>
        )}

        {showPageInfo && totalItems > 0 && (
          <div className="roboto-font">
            Showing {startItem} to {endItem} of {totalItems} entries
          </div>
        )}
      </div>

      {/* Right side: Pagination controls */}
      <div className="flex items-center gap-1">
        {/* Previous button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || totalPages <= 1}
          className="flex items-center gap-1 px-3 py-1.5 text-sm border border-primaryBorderColor hover:bg-primaryBgColor disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="roboto-font">Previous</span>
        </Button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {visiblePages.map((page, index) => {
            if (page === "...") {
              return (
                <span
                  key={`dots-${index}`}
                  className="px-2 py-1 text-primaryParaColor"
                >
                  ...
                </span>
              );
            }

            const pageNumber = page as number;
            const isActive = pageNumber === currentPage;

            return (
              <Button
                key={pageNumber}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => onPageChange(pageNumber)}
                disabled={totalPages <= 1}
                className={`
                  min-w-[32px] h-8 px-2 text-sm font-medium roboto-font
                  ${
                    isActive
                      ? "bg-mainColor text-white hover:bg-mainColor/90 border-mainColor"
                      : "border border-primaryBorderColor hover:bg-primaryBgColor text-primaryTextColor"
                  }
                  ${totalPages <= 1 ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                {pageNumber}
              </Button>
            );
          })}
        </div>

        {/* Next button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages <= 1}
          className="flex items-center gap-1 px-3 py-1.5 text-sm border border-primaryBorderColor hover:bg-primaryBgColor disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="roboto-font">Next</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
