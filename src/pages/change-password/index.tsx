import { Button } from "@/components/ui/button";
import { InputField } from "../../components/common/InputField";

export const ChangePassword = () => {
  return (
    <div className="py-9 px-4 sm:px-5 lg:px-10 bg-primaryBgColor min-h-screen">
      <h1 className="font-bold text-2xl sm:text-3xl text-primaryHeadingColor bg-transparent text-center sm:text-left">
        Change User Password
      </h1>

      <div className="rounded-2xl shadow-lg my-7 w-full bg-white py-7 px-4 sm:px-6">
        <div className="mb-5 flex flex-col sm:flex-row items-start sm:items-center">
          <label className="text-base font-semibold mb-2 sm:mb-0 sm:flex-[0.2]">
            Old Password
          </label>
          <div className="flex-1 w-full">
            <InputField placeholder="Enter old password" type="password" />
          </div>
        </div>
        <div className="mb-5 flex flex-col sm:flex-row items-start sm:items-center">
          <label className="text-base font-semibold mb-2 sm:mb-0 sm:flex-[0.2]">
            New Password
          </label>
          <div className="flex-1 w-full">
            <InputField placeholder="Enter new password" type="password" />
          </div>
        </div>
        <div className="mb-5 flex flex-col sm:flex-row items-start sm:items-center">
          <label className="text-base font-semibold mb-2 sm:mb-0 sm:flex-[0.2]">
            Confirm New Password
          </label>
          <div className="flex-1 w-full">
            <InputField placeholder="Confirm new password" type="password" />
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="flex justify-end w-full sm:w-fit">
            <Button
              className="bg-primaryBtnBgColor text-white roboto-font text-base py-3 lg:py-5 w-full sm:w-auto rounded-sm"
              onClick={() => console.log("Clicked")}
            >
              <span className="roboto-font leading-0">Change Password</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
