import bubbleSort from './bubbleSort';
import quickSort from './quickSort';
import { SortingAlgorithm } from '../types/types';

export const algorithms: Record<SortingAlgorithm, (arr: number[]) => number[]> = {
    BubbleSort: bubbleSort,
    QuickSort: quickSort,
};
