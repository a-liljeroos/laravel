import {
    forwardRef,
    SelectHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

export default forwardRef(function SelectInput(
    {
        className = "",
        isFocused = false,
        optionItems = [],
        ...props
    }: SelectHTMLAttributes<HTMLSelectElement> & {
        isFocused?: boolean;
        optionItems: { value: string | number; label: string | number }[];
    },
    ref
) {
    const localRef = useRef<HTMLSelectElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
            ref={localRef}
        >
            {optionItems.map((item, index) => {
                return (
                    <option key={index} value={item.value}>
                        {item.label}
                    </option>
                );
            })}
        </select>
    );
});
