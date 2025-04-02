import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import SortingVisualizer from "../components/SortingVisualizer";

describe("SortingVisualizer", () => {
    it("should render array bars", () => {
        render(<SortingVisualizer />); 
        const bars = screen.getAllByTestId(".array-bar");
        expect(bars.length).toBeGreaterThan(0);
    });

    it('should display Start, Pause and Reset buttons', () => {
        render(<SortingVisualizer />);
        const startButton = screen.getByText('Start');
        const pauseButton = screen.getByText('Pause');
        const resetButton = screen.getByText('Reset');

        expect(startButton).toBeInTheDocument();
        expect(pauseButton).toBeInTheDocument();
        expect(resetButton).toBeInTheDocument();
    })

    it('should start sorting when the Start button is clicked', () => {
        render(<SortingVisualizer />);
        const startButton = screen.getByText('Start');
        startButton.click();

        const activeBars = screen.getAllByTestId('.array-bar');
        expect(activeBars.length).toBeGreaterThan(0);
    })

    it('should reset the array when Reset button is clicked', () => {
        render(<SortingVisualizer />);
        const resetButton = screen.getByText(/Reset/i);
        resetButton.click();
    
        const bars = screen.getAllByTestId('array-bar');
        expect(bars.length).toBeGreaterThan(0);
      });

});