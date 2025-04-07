import { bubbleSort } from '../../algorithms/bubbleSort';

describe('Bubble Sort', () => {
    it('should sort an array of numbers correctly', () => {
        const input = [5, 3, 8, 2, 4];
        const generator = bubbleSort(input);
        let result: number[] = [];

        for (let step of generator) {
            result = step.array;
        }

        expect(result).toEqual([2, 3, 4, 5, 8]);
    });

    it('should handle an empty array', () => {
        const input: number[] = [];
        const generator = bubbleSort(input);
        let result: number[] = [];

        for (let step of generator) {
            result = step.array;
        }

        expect(result).toEqual([]);
    });

    it('should sort an already sorted array', () => {
        const input = [1, 2, 3, 4, 5];
        const generator = bubbleSort(input);
        let result: number[] = [];

        for (let step of generator) {
            result = step.array;
        }

        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should sort an array with negative numbers', () => {
        const input = [-3, -1, -7, 0, 2];
        const generator = bubbleSort(input);
        let result: number[] = [];

        for (let step of generator) {
            result = step.array;
        }

        expect(result).toEqual([-7, -3, -1, 0, 2]);
    });
});
