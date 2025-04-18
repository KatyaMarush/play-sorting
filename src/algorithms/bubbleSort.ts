export function* bubbleSort(arr: number[]): Generator<{ array: number[], i: number, j: number }> {
    const array = [...arr];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
            yield { array: [...array], i: j, j: j + 1 };
        }
    }
}
