import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MonthPickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function MonthPicker({
  date,
  onDateChange,
  placeholder,
  className,
  disabled,
}: MonthPickerProps) {
  const [selectedMonth, setSelectedMonth] = useState<number>(
    date ? date.getMonth() : new Date().getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    date ? date.getFullYear() : new Date().getFullYear()
  );

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const years = Array.from({ length: 31 }, (_, i) => 2000 + i);

  useEffect(() => {
    if (date) {
      setSelectedMonth(date.getMonth());
      setSelectedYear(date.getFullYear());
    }
  }, [date]);

  const handlePrevious = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth((prev) => prev + 1);
    }
  };

  const handleToday = () => {
    const today = new Date();
    setSelectedMonth(today.getMonth());
    setSelectedYear(today.getFullYear());
    if (onDateChange) {
      onDateChange(today);
    }
  };

  const handleDone = () => {
    if (onDateChange) {
      const newDate = new Date(selectedYear, selectedMonth, 1);
      onDateChange(newDate);
    }
  };

  const [open, setOpen] = useState(false);

  const handleSelectMonth = (value: string) => {
    setSelectedMonth(parseInt(value));
  };

  const handleSelectYear = (value: string) => {
    setSelectedYear(parseInt(value));
  };

  const handleDoneAndClose = () => {
    handleDone();
    setOpen(false);
  };

  const handleTodayAndClose = () => {
    handleToday();
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal bg-white border border-blue-100 text-gray-500 rounded-md h-10 cursor-pointer",
            !date && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <span>{date ? format(date, "MMMM yyyy") : placeholder}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-0 bg-transparent shadow-none">
        <div className="bg-white p-0 rounded-md border border-gray-200 shadow-md">
          <div className="flex items-center justify-between p-2 bg-gray-100 rounded-t-md">
            <button
              onClick={handlePrevious}
              className="p-1 rounded-md hover:bg-gray-300 cursor-pointer text-gray-600 bg-gray-200"
              type="button"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-1">
              <Select
                value={selectedMonth.toString()}
                onValueChange={handleSelectMonth}
              >
                <SelectTrigger className="w-[80px] border border-gray-300 bg-white h-8 text-gray-800 cursor-pointer">
                  <SelectValue placeholder={months[selectedMonth]} />
                </SelectTrigger>
                <SelectContent className="cursor-pointer">
                  {months.map((month, index) => (
                    <SelectItem
                      key={month}
                      value={index.toString()}
                      className="cursor-pointer"
                    >
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedYear.toString()}
                onValueChange={handleSelectYear}
              >
                <SelectTrigger className="w-[80px] border border-gray-300 bg-white h-8 text-gray-800 cursor-pointer">
                  <SelectValue placeholder={selectedYear.toString()} />
                </SelectTrigger>
                <SelectContent className="cursor-pointer">
                  {years.map((year) => (
                    <SelectItem
                      key={year}
                      value={year.toString()}
                      className="cursor-pointer"
                    >
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <button
              onClick={handleNext}
              className="p-1 rounded-md hover:bg-gray-300 cursor-pointer text-gray-600 bg-gray-200"
              type="button"
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-between px-4 gap-2 py-2 bg-white">
            <Button
              onClick={handleTodayAndClose}
              className="px-8 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 cursor-pointer text-gray-700"
              type="button"
            >
              Today
            </Button>

            <Button
              onClick={handleDoneAndClose}
              className="px-8 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 cursor-pointer font-medium text-gray-700"
              type="button"
            >
              Done
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
