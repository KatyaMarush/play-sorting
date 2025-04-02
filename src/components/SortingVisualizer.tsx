import React, { useEffect, useState } from "react";
import '../styles/components/SortingVisualizer.scss';
import { algorithms } from "../algorithms";
import { SortingAlgorithm } from "../types/types";
import AlgorithmSelector from "./AlgorithmSelector";
import ArrayInput from "./ArrayInput";

const SortingVisualizer: React.FC = () => {
    const [array, setArray] = useState<number[]>([]);
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortingAlgorithm>("BubbleSort");

    useEffect(() => {
        resetArray();
    }, []);

    const startSorting = () => {
        setIsSorting(true);
        const sortFunction = algorithms[selectedAlgorithm];
        const sortedArray = sortFunction(array);
        setArray(sortedArray);
        setIsSorting(false);
    };
    
    const resetArray = () => {
        const newArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 1);
        setArray(newArray);
        setIsSorting(false);
    };
    
    const maxArrayValue = Math.max(...array);

    return (
        <div className="sorting-visualizer">
            <AlgorithmSelector 
                selectedAlgorithm={selectedAlgorithm} 
                onAlgorithmChange={setSelectedAlgorithm} 
            />
            <ArrayInput onArrayChange={setArray} />
            <div className="array-container">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className='array-bar'
                        data-testid='array-bar'
                        style={{ height: `${(value / maxArrayValue) * 100}%` }}
                        />
                ))}
</div>

            <div className="controls">
                <button onClick={startSorting} disabled={isSorting}>Start</button>
                <button onClick={resetArray}>Reset</button>
            </div>
        </div>
    );
};

export default SortingVisualizer;
