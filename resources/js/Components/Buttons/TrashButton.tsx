import React, { ButtonHTMLAttributes } from "react";
// icons
import { TbTrash } from "react-icons/tb";

type TTrashButton = ButtonHTMLAttributes<HTMLButtonElement> & {};

const TrashButton = ({ className = "", disabled, ...props }: TTrashButton) => {
    return (
        <button
            style={{ backgroundColor: "rgb(235, 65, 35)" }}
            type="button"
            disabled={disabled}
            className={`round-button ${disabled && "opacity-25"} ` + className}
            {...props}
        >
            <TbTrash color="white" size={18} />
        </button>
    );
};

export default TrashButton;
