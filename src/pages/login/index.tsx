import { InputField } from "../../components/common/InputField";
import { DropdownField } from "../../components/common/DropdownField";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/routes";
import { useForm, Controller } from "react-hook-form";
import {
  CampusDropdownOptions,
  ProjectDropdownOptions,
} from "../../utils/data";
import { toast } from "@/hooks/use-toast";

export const Login = () => {
  const nav = useNavigate();

  const { control, handleSubmit, reset } = useForm<{
    userId: string;
    password: string;
    project: string;
    campus: string;
  }>({
    defaultValues: {
      userId: "",
      password: "",
      project: "",
      campus: "",
    },
  });

  const onSubmit = () => {
    nav(ROUTES.DASHBOARD);
    toast({
      title: "Login Successful",
      description: "You have successfully logged in!",
    });
  };

  const onReset = () => {
    reset(
      {
        userId: "",
        password: "",
        project: "",
        campus: "",
      },
      {
        keepErrors: false,
        keepDirty: false,
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
        keepSubmitCount: false,
      },
    );
  };

  return (
    <div className="2xl:container 2xl:mx-auto flex min-h-screen flex-col lg:flex-row">
      <div className="hidden flex-1 items-center justify-center bg-primaryBgColor xl:flex min-h-screen">
        <img
          src="/images/login/auth-img.png"
          alt="auth-image"
          className="h-full w-full object-contain object-center bg-transparent"
        />
      </div>
      <div className="w-full bg-white p-8 xl:w-[600px] xl:px-16 xl:py-10 min-h-screen flex flex-col justify-center">
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 mb-6 text-center">
          <p className="text-sm font-semibold text-black">Demo Version</p>
          <p className="text-xs text-gray-700">Portfolio demonstration build</p>
        </div>

        <div className="flex flex-col gap-2 py-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl lg:text-[32px] font-bold text-black">
              Welcome to Education Portal
            </h1>
            <img
              src="/images/hand.svg"
              alt="hand"
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
          </div>
          <p className="font-normal text-sm lg:text-base roboto-font text-primaryParaColor">
            Sign in to your account to continue
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            <Controller
              name="userId"
              control={control}
              render={({ field }) => (
                <InputField
                  label="User ID"
                  placeholder="Enter any value"
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                />
              )}
            />
          </div>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <InputField
                label="Password"
                placeholder="Enter any password"
                isPassword
                {...field}
              />
            )}
          />
          <div className="flex gap-6 lg:gap-4 flex-col lg:flex-row">
            <Controller
              name="project"
              control={control}
              render={({ field }) => (
                <DropdownField
                  label="Project"
                  placeholder="Select user type"
                  options={ProjectDropdownOptions}
                  onChange={(value) => field.onChange(value)}
                  value={field.value}
                />
              )}
            />
            <Controller
              name="campus"
              control={control}
              render={({ field }) => (
                <DropdownField
                  label="Campus/Workplace"
                  placeholder="Select user type"
                  options={CampusDropdownOptions}
                  onChange={(value) => field.onChange(value)}
                  value={field.value}
                />
              )}
            />
          </div>
          <div className="flex gap-6 lg:gap-4 flex-col lg:flex-row">
            <Button
              type="submit"
              className="bg-primaryBtnBgColor text-white roboto-font text-base py-5 flex-1 rounded-sm hover:bg-primaryBtnHoverColor transition duration-300 cursor-pointer hover:bg-[#005a99] "
            >
              <span className="roboto-font leading-0">Sign In</span>
            </Button>
            <Button
              type="button"
              onClick={onReset}
              className="bg-primaryBtnBgColor text-white roboto-font text-base py-5 rounded-sm flex-1 transition duration-300 cursor-pointer hover:bg-[#005a99]"
            >
              <span className="roboto-font leading-0">Reset</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
