//this is just for testing purposes
// Binary Search to find the first occurrence of 1 in a sorted binary array
sortBinArr = [0,0,1,1,1,1,1,1,1,1];

function FindFirstOne(arr){
    let start = 0;
    let end = arr.length - 1;
    
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === 1 && (arr[mid-1] === 0 || mid ===0)){
            return mid;
        }
        else if(arr[mid] === 1){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1; // If no 1 is found
}
console.log(FindFirstOne(sortBinArr)); // Output: 2