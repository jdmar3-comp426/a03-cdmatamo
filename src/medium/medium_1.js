import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum+=array[i];
    }
return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    
    let temp = 0;
    for (let i =0; i < array.length; i++) {
        for (let j =1; j<array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j]=temp;
            }
        }
    }
    if (array.length % 2 == 1) {
        return Math.ceil(array.length/2);
    } else {
        let midpoint = array.length/2;
        let median = 0;
        median = (array[midpoint] + array[midpoint + 1])/2;
        return median;
    }
}

/* *
 * Helper function to sort an array in ascending order
* @param {number[]} array
  @return {number[]} array but sorted
* 
*/
export function sortArray(array) {
    
    let arr = [array.length];

    for(let k = 0; k < arr.length; k++) {
        arr[k] = array[k];
    }

    for (let i =0; i < array.length-1; i++) {
        let min = array[i];
        let minI = i;
        for (let j =i+1; j<array.length; j++) {
            if(array[j]<min)
            {
                min = array[j];
                minI = j;
            }
        }
        let temp = array[i];
        array[i] = min;
        array[minI] = temp;
    }
    return arr;
 }

 /**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */

export function getStatistics(array) {
    let len = array.length;
    let sum = getSum(array);
    let mean = 0.0;
    let sortedArr = sortArray(array);
    let min = Math.min(...array);
    let max = Math.max(...array);
    let median = getMedian(array);
    


// calculates the mean in the following for loop
    for(let i=0; i < len; i++) {
        mean+=array[i];
        if (i == len - 1) {
            mean = mean/len;
        }
    }
// mean ends here
let vari = variance(array, mean);
let std = Math.sqrt(vari);

    return {length: len, sum: sum, mean: mean, median: median, min: min, max: max, variance: vari, standard_deviation: std};
}

