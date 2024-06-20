import CustomButton from "../CustomButton";
import CarInfo from "./CarInfo";
import { motion } from "framer-motion";
import { useState } from "react";
import DetailModal from "./DetailModal";
import { CarType } from "../../types";
import { generateImage } from "../../utils";

type CardProps = {
  car: CarType;
};
const Card = ({ car }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="car-card group"
    >
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      <p className="flex mt-6 text-[32px]">
        <span className="text-[19px] font-semibold">₺</span>
        {Math.round(Math.random() * 5000) + 500}
        <span className="text-[14px] self-end font-medium">/gün</span>
      </p>

      <div className="relative w-full h-40 my-3">
        <img
          src={generateImage(car)}
          alt="car-pic"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="group-hover:invisible flex justify-between w-full mt-2 text-gray">
          <CarInfo title={"Otomatik"} icon="/steering-wheel.svg" />
          <CarInfo title="RwD" icon="/tire.svg" />
          <CarInfo title="MPG" icon="/gas.svg" />
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="Daha Fazla"
            design="w-full py-[16px]"
            rIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <DetailModal
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </motion.div>
  );
};

export default Card;
