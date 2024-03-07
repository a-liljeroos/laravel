import { LabelHTMLAttributes } from "react";

export default function InputLabel({
    value,
    className = "",
    children,
    error,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string; error?: string }) {
    return (
        <label
            {...props}
            className={
                `block font-medium text-sm text-gray-700 mt-4 mb-1 ` + className
            }
        >
            {value ? value : children}{" "}
            <span
                style={{
                    color: "red",
                    marginLeft: 10,
                    textDecoration: "underline",
                }}
            >
                {error}
            </span>
        </label>
    );
}
