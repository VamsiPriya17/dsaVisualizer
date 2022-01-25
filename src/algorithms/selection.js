function selectionSort(arr) {
    let storeIdx = [];
    let array = [...arr];
    for (let i = 0; i < array.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] < array[minIdx]) {
            minIdx = j;
          }
        }
        //swap(array, i, minIdx);
        [array[i],array[minIdx]] = [array[minIdx],array[i]]
        // let temp = array[i];
        // array[i] = array[minIdx];
        // array[minIdx] = temp;
        storeIdx.push(i);
        storeIdx.push(minIdx);
    }
    return storeIdx;
  }
export {selectionSort}