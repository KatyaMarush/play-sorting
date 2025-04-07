import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AlgorithmSelector from "../components/AlgorithmSelector";

describe("AlgorithmSelector Component", () => {
    const mockOnAlgorithmChange = jest.fn()

    it("renders the select element with algorithms", () => {
        render(<AlgorithmSelector
                    selectedAlgorithm="BubbleSort"
                    onAlgorithmChange={mockOnAlgorithmChange} />
        )

        const selectElement = screen.getByLabelText("Select Algorithm:")
        expect(selectElement).toBeInTheDocument()

        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(2);
        expect(options[0]).toHaveTextContent('BubbleSort');
        expect(options[1]).toHaveTextContent('QuickSort');
    })

    it('sets the selected algorithm correctly', () => {
        render(
            <AlgorithmSelector 
                selectedAlgorithm="QuickSort" 
                onAlgorithmChange={mockOnAlgorithmChange} 
            />
        );

        const selectElement = screen.getByLabelText(/Select Algorithm:/i) as HTMLSelectElement;
        expect(selectElement.value).toBe('QuickSort');
    });

    it('calls onAlgorithmChange when a new algorithm is selected', () => {
        render(
            <AlgorithmSelector 
                selectedAlgorithm="BubbleSort" 
                onAlgorithmChange={mockOnAlgorithmChange} 
            />
        );

        const selectElement = screen.getByLabelText(/Select Algorithm:/i);

        fireEvent.change(selectElement, { target: { value: 'QuickSort' } });

        expect(mockOnAlgorithmChange).toHaveBeenCalledTimes(1);
        expect(mockOnAlgorithmChange).toHaveBeenCalledWith('QuickSort');
    });

    it('renders the correct algorithm as selected', () => {
        render(
            <AlgorithmSelector 
                selectedAlgorithm="BubbleSort" 
                onAlgorithmChange={mockOnAlgorithmChange} 
            />
        );

        const selectElement = screen.getByLabelText("Select Algorithm:") as HTMLSelectElement;
        expect(selectElement.value).toBe('BubbleSort');
    });

})