import React from "react";
import { SortingAlgorithm } from "../types/types";
import '../styles/components/AlgorithmSelector.scss';

interface Props {
    selectedAlgorithm: SortingAlgorithm;
    onAlgorithmChange: (algorithm: SortingAlgorithm) => void;
}

const AlgorithmSelector: React.FC<Props> = ({ selectedAlgorithm, onAlgorithmChange }) => {
    const algorithms: SortingAlgorithm[] = ["BubbleSort", "QuickSort"];

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = event.target.value as SortingAlgorithm;  // Приведение к типу
        onAlgorithmChange(selected);
    };

    return (
        <div className="algorithm-selector">
            <label>Select Algorithm:</label>
            <select value={selectedAlgorithm} onChange={handleChange}>
                {algorithms.map((algorithm) => (
                    <option key={algorithm} value={algorithm}>{algorithm}</option>
                ))}
            </select>
        </div>
    );
};

export default AlgorithmSelector;
