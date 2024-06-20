import { AnimatePresence, motion } from "framer-motion";
import { CarType } from "../../types";
import { generateImage } from "../../utils";

type DetailProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: CarType;
};
const DetailModal = ({ isOpen, closeModal, car }: DetailProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 bg-black p-4 flex items-center justify-center z-20 bg-opacity-25"
        >
          <div className="bg-white max-w-lg w-full rounded-2xl flex flex-col gap-5 shadow-xl p-6 relative max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-1 end-1 rounded-full bg-white cursor-pointer z-10 p-1"
            >
              <img src="/close.svg" alt="" />
            </button>

            <div className="flex-1 flex flex-col gap-3">
              <div className="w-full relative h-40 bg-pattern bg-cover bg-center rounded-lg">
                <img
                  src={generateImage(car)}
                  alt=""
                  className="h-full mx-auto"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1 flex relative w-full h-24 bg-primary-100">
                  <img
                    src={generateImage(car, "29")}
                    alt=""
                    className="h-full object-contain mx-auto"
                  />
                </div>
                <div className="flex-1 flex relative w-full h-24 bg-primary-100">
                  <img
                    src={generateImage(car, "33")}
                    alt=""
                    className="h-full object-contain mx-auto"
                  />
                </div>
                <div className="flex-1 flex relative w-full h-24 bg-primary-100">
                  <img
                    src={generateImage(car, "13")}
                    alt=""
                    className="h-full object-contain mx-auto"
                  />
                </div>
              </div>
            </div>

            {Object.entries(car).map(([key, value]) => (
              <div className="flex justify-between">
                <h4 className="capitalize text-gray">
                  {key.replace("_", " ")}
                </h4>
                <p className="text-black-100 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
