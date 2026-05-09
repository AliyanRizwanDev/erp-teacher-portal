import { SideLink } from "./SideLink";
import { sideBarData } from "../../utils/data";
import { Link } from "react-router-dom";
import { ROUTES } from "../../config/routes";
import { RxCross1 } from "react-icons/rx";

interface PropsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar = ({ isOpen, setIsOpen }: PropsType) => {
  return (
    <div
      className={`fixed lg:relative top-0 left-0 z-40 transition-transform duration-300 ease-in-out min-h-screen w-64 px-5 flex flex-col items-center border-r border-secondaryBorderColor bg-white h-full 
      ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
    >
      <Link to={ROUTES.HOME}>
        <h1 className="mx-auto py-6 text-xl font-bold text-primaryHeadingColor">
          Education Portal
        </h1>
      </Link>

      <RxCross1
        className="absolute text-black z-30 text-xl right-4 top-4 cursor-pointer font-bold lg:hidden"
        onClick={() => setIsOpen(false)}
      />

      {sideBarData.map((item) => (
        <div key={item.text} className="w-full">
          <SideLink
            text={item.text}
            src={item.src || ""}
            path={item.path}
            children={item.children}
            isImage={item.isImage}
          />
        </div>
      ))}
    </div>
  );
};
