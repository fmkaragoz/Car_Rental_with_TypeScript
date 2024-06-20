import { ButtonProps } from "../../types";

const CustomButton = ({
  title,
  btnType,
  design,
  rIcon,
  handleClick,
}: ButtonProps) => {
  return (
    <div>
      <button
        onClick={handleClick}
        type={btnType || "button"}
        className={`custom-btn bg-[#2B59FF] rounded-full hover:bg-blue-800 transition text-white ${design}`}
      >
        <span>{title}</span>
        {rIcon && (
          <div className="relative w-6 h-6">
            <img src={rIcon} alt="right-arrow" />
          </div>
        )}
      </button>
    </div>
  );
};

export default CustomButton;
