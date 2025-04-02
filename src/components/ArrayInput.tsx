import React, {useState} from "react";
import '../styles/components/ArrayInput.scss';

interface Props {
    onArrayChange: (array: number[]) => void;
}

const ArrayInput: React.FC<Props> = ({onArrayChange}) => {

    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        try {
            const parsedArray = value
            .split(',')
            .map((num) => parseInt(num.trim()))
            .filter((num) => !isNaN(num));

            if (parsedArray.length === 0) {
                setError("Please enter a valid array of numbers.");
                return;
            }

            setError("");
            onArrayChange(parsedArray);
        } catch {
            setError("Invalid input. Please enter numbers separated by commas.");
        }
    }

    return (
        <div className="array-input">
            <input 
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter numbers, separated by commas" />
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default ArrayInput;