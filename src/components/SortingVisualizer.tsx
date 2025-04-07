import React, { useEffect, useState } from "react";
import '../styles/components/SortingVisualizer.scss';
import { algorithms } from "../algorithms";
import { SortingAlgorithm } from "../types/types";
import AlgorithmSelector from "./AlgorithmSelector";
import ArrayInput from "./ArrayInput";

const SortingVisualizer: React.FC = () => {
    const [array, setArray] = useState<number[]>([]);
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [activeIndices, setActiveIndices] = useState<number[]>([]);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortingAlgorithm>("BubbleSort");

    useEffect(() => {
        resetArray();
    }, []);

    // Задержка между шагами
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // Асинхронная функция для анимации сортировки
    const startSorting = async () => {
        setIsSorting(true);
        const sortFunction = algorithms[selectedAlgorithm];
        const generator = sortFunction(array);

        for (const { array: currentArray, i, j } of generator) {
            setArray([...currentArray]); // Обновляем массив
            setActiveIndices([i, j]); // Подсвечиваем элементы
            await sleep(100); // Задержка между шагами
        }

        setActiveIndices([]);
        setIsSorting(false);
    };

    const resetArray = () => {
        const newArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100) + 1);
        setArray(newArray);
        setIsSorting(false);
        setActiveIndices([]);
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
                        className={`array-bar ${activeIndices.includes(index) ? 'active' : ''}`}
                        data-testid='array-bar'
                        style={{ height: `${(value / maxArrayValue) * 100}%` }}
                    />
                ))}
            </div>

            <div className="controls">
                <button onClick={startSorting} disabled={isSorting}>Start</button>
                <button onClick={resetArray} disabled={isSorting}>Reset</button>
            </div>
        </div>
    );
};

export default SortingVisualizer;
