function insertionSort(arr) {
    let array = [...arr];
    let storeIdx = [];
    let i;
    for (i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
        while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j];
          storeIdx.push(j+1, j);
          j = j - 1;
        }
        [array[j + 1] ,key] = [key, array[j + 1]]
    }
    return storeIdx;
  }
export {insertionSort}