import { Button } from "@/components/ui/button";
import { InputField } from "../../components/common/InputField";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

export const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "Staff Member",
    erp: "ERP-001234",
    cnic: "[CNIC_REMOVED_FOR_PRIVACY]",
    employmentDate: "08-06-2024",
    designation: "Senior Educator - Physics",
    department: "Academic Department",
    workplace: "North Campus",
  });

  return (
    <div className="py-9 px-4 sm:px-5 lg:px-10 bg-primaryBgColor min-h-screen">
      <h1 className="font-bold text-2xl sm:text-3xl text-primaryHeadingColor bg-transparent text-center sm:text-left">
        Personal Information
      </h1>
      <div className="rounded-2xl shadow-lg my-7 w-full bg-white p-7">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
              {/* Profile image placeholder - replace with actual image component */}
              <img
                src="/images/avatar.svg"
                alt="user"
                className="w-32 h-32 md:w-28 md:h-28 bg-white rounded-full"
              />{" "}
            </div>
            <div className="absolute top-2 right-3 rounded-full bg-mainColor !w-3 !h-3 border-2 border-white"></div>
            <button className="absolute bottom-0 right-0 bg-mainColor text-white rounded-full p-1 w-7 h-7 flex items-center justify-center">
              <FiEdit />
            </button>
          </div>
          <h1 className="font-urbanist font-extrabold text-[32px] leading-[100%] tracking-[0%] mt-2">
            {profileData.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          <div>
            <InputField
              label="Name"
              className="!text-base"
              labelClassName="font-urbanist font-semibold text-[16px] leading-[100%] tracking-[0%] urbanist-font"
              placeholder="Enter name"
              value={profileData.name}
              onChange={(e) =>
                setProfileData({ ...profileData, name: e.target.value })
              }
              icon={<FiEdit className="text-primaryParaColor text-base" />}
            />
          </div>
          <div>
            <InputField
              label="ERP"
              className="!text-base"
              labelClassName="font-urbanist font-semibold text-[16px] leading-[100%] tracking-[0%] urbanist-font"
              placeholder="Enter ERP"
              value={profileData.erp}
              onChange={(e) =>
                setProfileData({ ...profileData, erp: e.target.value })
              }
            />
          </div>
          <div>
            <InputField
              label="CNIC/Expiry"
              className="!text-base"
              labelClassName="font-urbanist font-semibold text-[16px] leading-[100%] tracking-[0%] urbanist-font"
              placeholder="Enter CNIC/Expiry"
              value={profileData.cnic}
              onChange={(e) =>
                setProfileData({ ...profileData, cnic: e.target.value })
              }
            />
          </div>
          <div>
            <InputField
              label="Employment Date"
              className="!text-base"
              labelClassName="font-urbanist font-semibold text-[16px] leading-[100%] tracking-[0%] urbanist-font"
              placeholder="Enter employment date"
              value={profileData.employmentDate}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  employmentDate: e.target.value,
                })
              }
            />
          </div>
          <div>
            <InputField
              label="Designation"
              className="!text-base"
              labelClassName="font-urbanist font-semibold text-[16px] leading-[100%] tracking-[0%] urbanist-font"
              placeholder="Enter designation"
              value={profileData.designation}
              onChange={(e) =>
                setProfileData({ ...profileData, designation: e.target.value })
              }
            />
          </div>
          <div>
            <InputField
              label="Department"
              className="!text-base"
              labelClassName="font-urbanist font-semibold text-[16px] leading-[100%] tracking-[0%] urbanist-font"
              placeholder="Enter department"
              value={profileData.department}
              onChange={(e) =>
                setProfileData({ ...profileData, department: e.target.value })
              }
            />
          </div>
          <div>
            <InputField
              label="Workplace"
              className="!text-base"
              labelClassName="font-urbanist font-semibold text-[16px] leading-[100%] tracking-[0%] urbanist-font"
              placeholder="Enter workplace"
              value={profileData.workplace}
              onChange={(e) =>
                setProfileData({ ...profileData, workplace: e.target.value })
              }
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-end mt-8">
          <Button
            className="bg-primaryBtnBgColor text-white roboto-font text-base py-3 lg:py-5 w-full sm:w-auto rounded-sm lg:px-12"
            onClick={() => {}}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};
