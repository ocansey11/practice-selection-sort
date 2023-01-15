

function selectionSort(arr) {

  // Copy the original array
  let copy = arr.slice()

  // Create an array to store the sorted values
  let sorted = []
  let minimumIndex = 0

  // While the array is not empty...
  while(copy.length !== 0){
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    for(let i = 0; i< copy.length; i++){
      if(copy[i] < copy[minimumIndex]){
        minimumIndex = i
      }
    }
    // Save and remove the value at the min index
    let minVal = copy[minimumIndex]
    copy.splice(minimumIndex, 1)

    // Add the min value to the end of the sorted array
    sorted.push(minVal)
  }
  return sorted
}



function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divisor = 0
  let ind = 0

  // Repeat while the unsorted half is not empty:
  while(arr.length - divisor !== 0){
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minValue = Number.MAX_VALUE
    for(let i = divisor; i < arr.length; i++){
      // Save the min value
      if(minValue > arr[i]){
        minValue = arr[i]
      }
      ind = arr.indexOf(minValue)
    }

    // Shift every unsorted value to the left of the min value to the right by 1
    for(let i = ind; i > divisor; i--){
      // Put the min value at the divider
      let tmp = arr[i - 1]
      arr[i - 1] = minValue
      arr[i] = tmp
    }
    // Increment the divider and repeat
    divisor++
  }
}


module.exports = [selectionSort, selectionSortInPlace];
