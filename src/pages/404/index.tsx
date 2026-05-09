import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full flex flex-col items-center px-12 md:px-0 min-h-screen">
      <img
        className="h-80 w-80 md:h-[450px] md:w-[450px] 2xl:h-7/12 2xl:w-7/12"
        src="/images/404.jpg"
      />
      <p className="text-black text-xl md:text-2xl font-bold mb-3">
        404 — Page not found.
      </p>
      <Link to={ROUTES.DASHBOARD} className="w-full sm:w-auto">
        <Button
          type="submit"
          className="w-full sm:w-auto bg-primaryBtnBgColor hover:bg-[#005a99] text-white roboto-font text-sm py-5 rounded-md flex-1 cursor-pointer"
        >
          Go Back to Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
