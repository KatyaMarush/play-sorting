import bubbleSort from '../../algorithms/bubbleSort';

describe('BubbleSort', () => {
    it('should sort an array of numbers in ascending order', () => {
        const arr = [5, 3, 8, 4, 2];
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).toEqual([2, 3, 4, 5, 8]);
    })

    it('should retern an empty array when an empty array is an input', () => {
        const arr:[] = [];
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).toEqual([]);
    })

    it('should not modify the original array', () => {
        const arr = [5, 3, 8, 4, 2];
        bubbleSort(arr);
        expect(arr).toEqual([5, 3, 8, 4, 2]);
    })
})