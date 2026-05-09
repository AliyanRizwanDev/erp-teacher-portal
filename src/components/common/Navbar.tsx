import { FaBars, FaRegUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosLogOut } from "react-icons/io";
import {
  IoHomeOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/routes";
import { MdOutlineEmail } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { timeTableSideBarData } from "../../utils/data";

interface PropsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isOpen, setIsOpen }: PropsType) => {
  const location = useLocation();
  const isTimeTableRoute = /^\/timetable\/[^/]+/.test(location.pathname);

  const user = {
    name: "Faculty Member (ERP-001)",
    type: "Faculty",
  };

  const nav = useNavigate();

  const notifications = [
    {
      id: 1,
      icon: <MdOutlineEmail className="text-white text-lg" />,
      iconBg: "bg-mainColor",
      title: "No new message.",
      subtitle: "Recent activity",
      time: "",
    },
    {
      id: 2,
      icon: <RiErrorWarningLine className="text-white text-lg" />,
      iconBg: "bg-red-600",
      title: "Update Completed.",
      subtitle: "Server restart is due",
      time: "1 day ago",
    },
    {
      id: 3,
      icon: <IoHomeOutline className="text-white text-lg" />,
      iconBg: "bg-mainColor",
      title: "Login from 72.255.39.145",
      subtitle: "Logged in at 05:11:12pm",
      time: "2 day ago",
    },
    {
      id: 4,
      icon: <MdOutlineEmail className="text-white text-lg" />,
      iconBg: "bg-mainColor",
      title: "New email received",
      subtitle: "From system administrator",
      time: "3 days ago",
    },
    {
      id: 5,
      icon: <RiErrorWarningLine className="text-white text-lg" />,
      iconBg: "bg-red-600",
      title: "System maintenance",
      subtitle: "Scheduled for next week",
      time: "5 days ago",
    },
  ];

  return (
    <div
      className={`h-20 text-primaryHeadingColor text-xl flex items-center border-b border-secondaryBorderColor px-4 sm:px-6 md:px-5 lg:px-10 bg-white ${
        isOpen
          ? "justify-between lg:justify-end"
          : "justify-between lg:justify-end"
      }`}
    >
      <FaBars
        onClick={() => setIsOpen((prev) => !prev)}
        className={`cursor-pointer text-2xl lg:hidden sidebar-toggle ${
          isOpen ? "" : "block"
        }`}
      />

      {isTimeTableRoute && (
        <div className="flex md:hidden items-center justify-center flex-1 ml-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-3.5 px-2.5 py-2 bg-mainColor/15 border border-mainColor/15 rounded-md cursor-pointer min-w-max justify-between">
                <span className="text-mainColor text-xs font-medium roboto-font">
                  {(() => {
                    // Find current active page
                    for (const item of timeTableSideBarData) {
                      if (item.children) {
                        const activeChild = item.children.find((child) =>
                          location.pathname.includes(child.path)
                        );
                        if (activeChild) return activeChild.text;
                        if (location.pathname.includes(item.path))
                          return item.text;
                      } else {
                        if (location.pathname.includes(item.path))
                          return item.text;
                      }
                    }
                    return "Student Attendance";
                  })()}
                </span>
                <IoIosArrowDown className="text-mainColor text-sm" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 bg-white shadow-lg p-0 mt-1 py-2 flex flex-col gap-2">
              {timeTableSideBarData.map((item) => {
                const isActiveItem = item.children
                  ? [
                      item.path,
                      ...item.children.map((child) => child.path),
                    ].some((path) => location.pathname.includes(path))
                  : location.pathname.includes(item.path);

                if (item.children) {
                  return (
                    <DropdownMenu key={item.text}>
                      <DropdownMenuTrigger asChild>
                        <DropdownMenuItem
                          className={`py-1.5 px-2.5 text-[#374151] hover:bg-[#f3f4f6] roboto-font font-normal text-xs cursor-pointer rounded-none ${
                            isActiveItem ? "bg-[#eff6ff] text-[#0070BF]" : ""
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span>{item.text}</span>
                            <IoIosArrowDown className="text-[#6b7280] text-xs rotate-[-90deg]" />
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        side="right"
                        sideOffset={5}
                        className="w-auto bg-white rounded-md shadow-lg p-0"
                      >
                        {item.children.map((child) => {
                          const isActiveChild = location.pathname.includes(
                            child.path
                          );
                          return (
                            <DropdownMenuItem
                              key={child.path}
                              onClick={() => nav(child.path)}
                              className={`py-1.5 px-2.5 text-[#374151] hover:bg-[#f3f4f6] roboto-font font-normal text-xs cursor-pointer rounded-none ${
                                isActiveChild
                                  ? "bg-[#eff6ff] text-[#0070BF]"
                                  : ""
                              }`}
                            >
                              {child.text}
                            </DropdownMenuItem>
                          );
                        })}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }

                const isActiveMenuItem = location.pathname.includes(item.path);
                return (
                  <DropdownMenuItem
                    key={item.text}
                    onClick={() => nav(item.path)}
                    className={`py-1.5 px-2.5 text-[#374151] hover:bg-[#f3f4f6] roboto-font font-normal text-xs cursor-pointer rounded-none ${
                      isActiveMenuItem ? "bg-[#eff6ff] text-[#0070BF]" : ""
                    }`}
                  >
                    {item.text}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      {/* Desktop navigation for timetable routes */}
      {isTimeTableRoute && (
        <div className="hidden md:flex items-center lg:mr-auto">
          {timeTableSideBarData.map((item, index) => {
            const isActive = item.children
              ? [item.path, ...item.children.map((child) => child.path)].some(
                  (path) => location.pathname.includes(path)
                )
              : location.pathname.includes(item.path);

            const isLast = index === timeTableSideBarData.length - 1;
            const commonClasses = `cursor-pointer flex flex-col items-center px-4 py-1 ${
              !isLast ? "border-r border-[#bfdbef]" : ""
            }`;

            if (item.children) {
              return (
                <DropdownMenu key={item.text}>
                  <DropdownMenuTrigger asChild>
                    <div className={commonClasses}>
                      <div className="flex items-center">
                        <span
                          className={`roboto-font font-normal text-xs lg:text-sm xl:text-[16px] ${
                            isActive ? "text-[#0070BF]" : "text-[#667797]"
                          }`}
                        >
                          {item.text}
                        </span>
                        <IoIosArrowDown
                          className={`ml-1 text-xs ${
                            isActive ? "text-[#0070BF]" : "text-[#667797]"
                          }`}
                        />
                      </div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.children.map((child) => (
                      <DropdownMenuItem
                        key={child.path}
                        onClick={() => nav(child.path)}
                        className="py-2 px-4 text-[#667797] hover:text-[#0070BF] roboto-font font-normal text-[16px] cursor-pointer"
                      >
                        {child.text}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            return (
              <div
                key={item.text}
                className={commonClasses}
                onClick={() => nav(item.path)}
              >
                <span
                  className={`roboto-font text-xs lg:text-sm xl:text-base font-normal hover:text-[#0070BF] transition-all ${
                    isActive ? "text-[#0070BF]" : "text-[#667797]"
                  }`}
                >
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex justify-end gap-3 sm:gap-4 md:gap-3 lg:gap-5 items-center w-full md:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative rounded-full bg-primaryBgColor h-fit p-2.5 cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full absolute bg-red-600 right-2 sm:right-3"></div>
              <IoNotificationsOutline className="bg-transparent text-lg sm:text-xl" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0 border-radius-12px overflow-hidden w-full sm:w-[450px] mt-2">
            <div className="p-4 pb-2">
              <div className="flex items-center">
                <span className="text-xl font-semibold">Notifications</span>
                <div className="bg-mainColor text-white rounded-full w-6 h-6 flex items-center justify-center ml-2">
                  {notifications.length}
                </div>
              </div>
            </div>
            <div>
              {notifications.slice(0, 3).map((notification, index) => (
                <div
                  key={notification.id}
                  className={`flex items-center justify-between px-5 py-4 ${
                    index % 2 === 0 ? "bg-[#e8ebef]" : "bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`${notification.iconBg} p-2.5 rounded-full flex items-center justify-center`}
                    >
                      {notification.icon}
                    </div>
                    <div>
                      <p className="roboto-font font-medium text-sm leading-5">
                        {notification.title}
                      </p>
                      <p className="roboto-font font-normal text-xs leading-5 text-[#717171]">
                        {notification.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="w-2 h-2 bg-mainColor rounded-full"></div>
                    {notification.time && (
                      <span className="text-gray-500 text-sm">
                        {notification.time}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div
                className="text-center py-3 text-mainColor font-medium cursor-pointer hover:bg-gray-50"
                onClick={() => nav(ROUTES.NOTIFICATIONS)}
              >
                See All Notifications
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="bg-mainColor rounded-full flex items-center py-[5px] px-2 w-fit justify-between cursor-pointer relative gap-2 md:gap-0">
              <div className="gap-1.5 flex items-center bg-transparent">
                <div className="w-fit rounded-full p-[1px] bg-white">
                  <img
                    src="/images/avatar.svg"
                    alt="user"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </div>
                <div className="text-white max-sm:hidden">
                  <h1 className="text-[11px] sm:text-[12px] md:text-[13px] leading-tight roboto-font hidden lg:block">
                    {user.name}
                  </h1>
                  <p className="text-[10px] sm:text-[11px] md:text-[12px] roboto-font leading-tight hidden lg:block">
                    {user.type}
                  </p>
                </div>
              </div>
              <IoIosArrowDown className="text-white bg-transparent text-sm sm:text-base md:text- md:ml-2" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white rounded-lg shadow-md w-64 py-2 select-none">
            <DropdownMenuItem
              onClick={() => nav(ROUTES.PROFILE)}
              className="flex items-center px-5 py-3 hover:bg-gray-50 cursor-pointer"
            >
              <FaRegUser className="text-[#6c7893] text-xl mr-3" />
              <span className="text-[#6c7893] text-base">Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => nav(ROUTES.CHANGE_PASSWORD)}
              className="flex items-center px-5 py-3 hover:bg-gray-50 cursor-pointer"
            >
              <IoSettingsOutline className="text-[#6c7893] text-xl mr-3" />
              <span className="text-[#6c7893] text-base">Change Password</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => nav(ROUTES.HOME)}
              className="flex items-center px-5 py-3 hover:bg-gray-50 cursor-pointer"
            >
              <IoIosLogOut className="text-[#6c7893] text-xl mr-3" />
              <span className="text-[#6c7893] text-base">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
