import {
    InputHTMLAttributes,
    useState,
    useEffect,
    useRef,
    CSSProperties,
    LiHTMLAttributes,
} from "react";
// components
import PrimaryButton from "./Buttons/PrimaryButton";
import TrashButton from "./Buttons/TrashButton";
import EditButton from "./Buttons/EditButton";

type TMultiInput = InputHTMLAttributes<HTMLInputElement> & {
    onChange: (values: string[]) => void;
};

const MultiInput = ({ className = "", onChange }: TMultiInput) => {
    const [input, setInput] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const addButtonId: string = "multi-input-save-button";

    useEffect(() => {
        onChange(input);
    }, [input]);

    useEffect(() => {
        const button = document.getElementById(
            addButtonId
        ) as HTMLButtonElement;

        document.addEventListener("keydown", (event: KeyboardEvent) => {
            if (document.activeElement === inputRef.current) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    button?.click();
                }
            }
        });
        return () => {
            document.removeEventListener("keydown", () => {});
        };
    }, []);

    return (
        <div id="multi-input-cont">
            <div className="flex">
                <PrimaryButton
                    id={addButtonId}
                    type="button"
                    className="mr-2"
                    onClick={() => {
                        if (inputRef.current?.value) {
                            setInput([...input, inputRef.current.value.trim()]);
                            inputRef.current.value = "";
                        }
                    }}
                >
                    Add
                </PrimaryButton>
                <input
                    ref={inputRef}
                    type="text"
                    className={
                        "rounded border-gray-300 shadow-sm focus:ring-indigo-500 w-full "
                    }
                />
            </div>
            <div className="my-3.5 mx-2 px-3.5 border-l-2">
                <ul>
                    {input.map((value, index) => (
                        <ListItem
                            key={index}
                            value={value}
                            trashButtonClick={() => {
                                setInput(input.filter((_, i) => i !== index));
                            }}
                            editButtonClick={() => {
                                setInput(input.filter((_, i) => i !== index));
                                inputRef.current!.value = value;
                                inputRef.current!.focus();
                            }}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MultiInput;

type IListItem = LiHTMLAttributes<HTMLLIElement> & {
    key: number;
    trashButtonClick?: () => void;
    editButtonClick?: () => void;
};

const ListItem = ({
    value,
    key,
    trashButtonClick,
    editButtonClick,
}: IListItem) => {
    const styles: CSSProperties = {
        animation: "mount-item-right 0.3s ease-in-out",
    };

    return (
        <li key={key} style={styles} className="flex items-center gap-2 my-2 ">
            <TrashButton onClick={trashButtonClick} />
            <EditButton onClick={editButtonClick} />
            <p className="ml-3">{value}</p>
        </li>
    );
};
