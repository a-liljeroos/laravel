import React, { ButtonHTMLAttributes } from "react";
// icons
import { MdSaveAlt } from "react-icons/md";

type TSaveButton = ButtonHTMLAttributes<HTMLButtonElement> & {};

const SaveButton = ({ className = "", disabled, ...props }: TSaveButton) => {
    return (
        <button
            type="button"
            style={{ backgroundColor: "rgb(4, 201, 93)" }}
            disabled={disabled}
            className={`round-button ${disabled && "opacity-25"} ` + className}
            {...props}
        >
            <MdSaveAlt color="white" size={18} />
        </button>
    );
};

export default SaveButton;
