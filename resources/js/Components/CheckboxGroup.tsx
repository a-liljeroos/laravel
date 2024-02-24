import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
    InputHTMLAttributes,
    Ref,
} from "react";
import "./CheckboxGroup.scss";

export type CheckBoxGroupRef = {
    reset: () => void;
};

type ICheckboxGroup = InputHTMLAttributes<HTMLInputElement> & {
    checkBoxes: { label: string; value: string; checked?: boolean }[];
    onChange: (checked: string[]) => void;
};

export default forwardRef(function CheckboxGroup(
    { className = "", checkBoxes = [], onChange, ...props }: ICheckboxGroup,
    ref: Ref<CheckBoxGroupRef>
) {
    const [checked, setChecked] = useState<string[]>([]);

    useEffect(() => {
        const checkedValues = checkBoxes
            .filter((c) => c.checked)
            .map((c) => c.value);
        setChecked(checkedValues);
    }, []);

    useEffect(() => {
        onChange(checked);
    }, [checked]);

    useImperativeHandle(ref, () => ({
        reset,
    }));

    const reset = () => {
        setChecked([]);
    };

    return (
        <fieldset className="checkbox-group-cont">
            {checkBoxes.map((checkBox, index) => (
                <div key={index}>
                    <input
                        {...props}
                        required={false}
                        type="checkbox"
                        value={checkBox.value}
                        name={checkBox.value}
                        checked={checked.includes(checkBox.value)}
                        onChange={(e) => {
                            setChecked((prevChecked) => {
                                if (e.target.checked) {
                                    return [...prevChecked, e.target.value];
                                } else {
                                    return prevChecked.filter(
                                        (c) => c !== e.target.value
                                    );
                                }
                            });
                        }}
                        className={
                            "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "
                        }
                    />
                    <label
                        htmlFor={checkBox.value}
                        className="ms-2 text-sm text-gray-600"
                    >
                        {checkBox.label}
                    </label>
                </div>
            ))}
        </fieldset>
    );
});
