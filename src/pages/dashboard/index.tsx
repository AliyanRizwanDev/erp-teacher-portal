import Calendar from "react-calendar";
import { useState } from "react";
import dayjs from "dayjs";
import { Card } from "../../components/dashboard/Card";
import { dashboardCards } from "../../utils/data";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Dashboard = () => {
  const formattedDate = dayjs().format("dddd, DD MMMM, YYYY");
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="h-auto bg-primaryBgColor">
      <div className="py-9 px-5 lg:px-10">
        <div className="font-bold text-3xl text-primaryHeadingColor md:flex justify-between">
          <h1>Education Portal - Faculty</h1>
          <h2 className="max-md:text-lg xl:hidden">{formattedDate}</h2>
        </div>
        <div className="flex mt-5 mb-12 gap-6">
          <div className=" xl:flex-[0.74] w-full !bg-mainColor rounded-2xl px-5 lg:px-10 xl:pt-8 py-8 relative overflow-hidden text-white items-center flex justify-center lg:min-h-[310px]">
            <div className="absolute bg-[#1290c3] w-64 h-64  rounded-full -right-1 -top-24 z-0"></div>

            <div className="flex flex-col md:flex-row gap-4 z-10 relative ">
              <div className="relative flex flex-col justify-center items-center md:items-start w-fit h-fit my-auto mx-auto">
                <img
                  src="/images/avatar.svg"
                  alt="user"
                  className="w-32 h-32 md:w-48 md:h-44 rounded-full"
                />
                <div className="absolute top-0 right-5 rounded-full bg-[#00DAA7] w-8 h-8 border-4"></div>
              </div>

              <hr className="hidden md:block h-auto border-2" />
              <div className="flex flex-col gap-5 text-center md:text-left">
                <h1 className="text-xl md:text-3xl font-bold">
                  Faculty Member (ERP-001)
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-sm md:text-base">
                  <div>
                    <span className="font-bold">ERP#:</span> ERP-001234
                  </div>
                  <div>
                    <span className="font-bold">Name:</span> Staff Member
                  </div>
                  <div>
                    <span className="font-bold">CNIC/Expiry:</span>{" "}
                    [CNIC_REMOVED_FOR_PRIVACY]
                  </div>
                  <div>
                    <span className="font-bold">Employment Date:</span>{" "}
                    08-06-2024
                  </div>
                  <div>
                    <span className="font-bold">Designation:</span> Senior
                    Educator
                  </div>
                  <div>
                    <span className="font-bold">Department:</span> Academic
                    Department
                  </div>
                  <div>
                    <span className="font-bold">Workplace:</span> North Campus
                    (Main Campus)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" hidden xl:flex lg:flex-[0.26] w-full bg-white rounded-2xl text-black text-sm">
            <Calendar
              calendarType="hebrew"
              prevLabel={<span className="nav-icon">‹</span>}
              nextLabel={<span className="nav-icon">›</span>}
              className="p-4"
              onChange={onChange}
              value={value}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((item) => (
            <Card
              key={item.title}
              image={item.image}
              title={item.title}
              navLink={item.navLink}
              onclick={item.onclick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
