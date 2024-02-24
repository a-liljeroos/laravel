import React, { ButtonHTMLAttributes } from "react";
// icons
import { RiEdit2Line } from "react-icons/ri";

type TEditButton = ButtonHTMLAttributes<HTMLButtonElement> & {};

const EditButton = ({ className = "", disabled, ...props }: TEditButton) => {
    return (
        <button
            type="button"
            style={{ backgroundColor: "rgb(4, 139, 201)" }}
            disabled={disabled}
            className={`round-button ${disabled && "opacity-25"} ` + className}
            {...props}
        >
            <RiEdit2Line color="white" size={18} />
        </button>
    );
};

export default EditButton;
