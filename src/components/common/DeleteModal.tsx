import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";

interface propTypes {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const DeleteModal = ({ isModalOpen, setIsModalOpen }: propTypes) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="max-w-[460px] p-0 rounded-[25px]">
        <div className="px-6 py-7 flex flex-col items-center gap-3">
          <RiDeleteBin6Line className="!bg-red-500 !text-4xl rounded-full !h-14 !w-14 p-3 text-white" />
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-black font-semibold text-2xl">
              Delete Confirmation
            </h1>
            <p className="text-center text-primaryTextColor text-lg mb-2">
              Are you sure you want to delete this item?
            </p>
          </div>

          <div className="w-full flex gap-3 md:flex-row flex-col">
            <Button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="w-full text-primaryParaColor bg-white  border  hover:bg-primaryBtnBgColor hover:text-white cursor-pointer
              roboto-font text-base py-3 lg:py-5 rounded-md flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setIsModalOpen(false)}
              type="submit"
              className="w-full bg-red-500 hover:bg-red-700 text-white roboto-font text-base py-3 lg:py-5 rounded-md flex-1 cursor-pointer"
            >
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
