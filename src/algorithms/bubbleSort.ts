const bubbleSort = (arr: number[]): number[] => {
    const array = [...arr];
    for(let i = 0; i < array.length; i++) {
        let swaped = false;
        for(let j = 0; j < array.length - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swaped = true;
            }
        }

        if(!swaped) break;
    }
    
    return array;
}

export default bubbleSort;