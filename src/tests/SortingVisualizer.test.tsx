import { render, screen, fireEvent } from "@testing-library/react";
import SortingVisualizer from "../components/SortingVisualizer";

describe("SortingVisualizer", () => {
    it("should render array bars", () => {
        render(<SortingVisualizer />); 
        const bars = screen.getAllByTestId("array-bar");
        expect(bars.length).toBeGreaterThan(0);
    });
    

    it('should display Start and Reset buttons', () => {
        render(<SortingVisualizer />);
        const startButton = screen.getByText('Start');
        const resetButton = screen.getByText('Reset');

        expect(startButton).toBeInTheDocument();
        expect(resetButton).toBeInTheDocument();
    })

    it('should start sorting when the Start button is clicked', () => {
        render(<SortingVisualizer />);
        const startButton = screen.getByText('Start');
        startButton.click();

        const activeBars = screen.getAllByTestId('array-bar');
        expect(activeBars.length).toBeGreaterThan(0);
    })

    it('should reset the array when Reset button is clicked', () => {
        render(<SortingVisualizer />);
        const resetButton = screen.getByText("Reset");
        resetButton.click();
    
        const bars = screen.getAllByTestId('array-bar');
        expect(bars.length).toBeGreaterThan(0);
      });

      it('updates the bars when custom array is entered', () => {
        render(<SortingVisualizer />);
        const input = screen.getByPlaceholderText('Enter numbers separated by commas');
        fireEvent.change(input, { target: { value: '5,10,15' } });
        const startButton = screen.getByText('Start');
        fireEvent.click(startButton);
        const bars = screen.getAllByTestId('array-bar');
        expect(bars.length).toBe(3);
    });

    it('scales the height of array bars correctly', () => {
        render(<SortingVisualizer />);
        const bars = screen.getAllByTestId('array-bar');
        bars.forEach((bar) => {
            const height = parseInt(bar.style.height, 10);
            expect(height).toBeLessThanOrEqual(100);
        });
    });

});