import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { CiCircleCheck } from "react-icons/ci";

interface propTypes {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const ConfirmationModal = ({ isModalOpen, setIsModalOpen }: propTypes) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="max-w-[460px] p-0 rounded-[25px]">
        <div className="px-6 py-7 flex flex-col items-center gap-4">
          <CiCircleCheck className="!bg-green-500 !text-4xl rounded-full !h-14 !w-14 p-3 text-white" />
          <p className="text-center text-primaryTextColor text-lg">
            Changes have been saved successfully.
          </p>
          <Button
            onClick={() => setIsModalOpen(false)}
            type="submit"
            className="w-full bg-primaryBtnBgColor hover:bg-[#005a99] text-white roboto-font text-base py-3 rounded-md flex-1 cursor-pointer"
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
