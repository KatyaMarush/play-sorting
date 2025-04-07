export type SortingAlgorithm = "BubbleSort" | "QuickSort";

export interface SortStep {
    array: number[];
    i: number;
    j: number;
}

export type SortingFunction = (arr: number[]) => Generator<SortStep>;

export interface Algorithms {
    [key: string]: SortingFunction;
}
