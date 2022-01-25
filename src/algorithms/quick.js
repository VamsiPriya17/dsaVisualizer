let storeIdx = [];
function partition(arr, low, high)
    {
        let pivot = arr[high];
        // index of smaller element
        let i = (low - 1);
        for (let j = low; j <= high - 1; j++) {
   
            // If current element is
            // smaller than or
            // equal to pivot
            if (arr[j] <= pivot) {
                i++;
                storeIdx.push(i, j);
                [arr[i], arr[j]] = [arr[j], arr[i]] 
            }
        }
   
        // swap arr[i+1] and arr[high]
        // (or pivot)
        storeIdx.push(i+1, high);
        [arr[i+1], arr[high]] = [arr[high], arr[i+1]] 
        return i + 1;
    }
   
    function quick(arr, low, high, storeIdx)
    {
        if (low < high) {
            let pi = partition(arr, low, high);
   
            quick(arr, low, pi - 1);
            quick(arr, pi + 1, high);
        }
    }
    function quickSort(arr, low, high){
        storeIdx = [];
        let array = [...arr];
        quick(array, low, high);
        return storeIdx;
    }
    export {quickSort}