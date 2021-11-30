/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    return a + " + " + b + " = " + (a+b);
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    if (endNumber < startNumber) {
        return null;
    }
    let length = endNumber + 1 - startNumber;
    let increasing = [length];
    for (let i = 0; i < length; i++) {
        if ( i == 0) {
            increasing[i] = startNumber;
        } else if (i == length-1) {
            increasing[i] = endNumber;
        } else {
            increasing[i] = increasing[i - 1] + 1;
        }
    }

    return increasing;

}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] >= max) {
            max = numbers[i];
        }
    }
    return {
        max: Math.max(max,min) ,
        min: Math.min(max,min)
    } ;
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */

export function countElement(array, value) {
 let count = 0;
 for (let i = 0; i < array.length; i++) {
     if (array[i] == value) {
         count++;
     }
 }
 return count;

}
export function countArray(array) {
    let keys = [];
    let flag = false;
    for (let i = 0; i < array.length; i++) {
        flag = false;
        for (let j = 0; j < keys.length; j++) {
            if (array[i] == keys[j]) {
                flag = true;
            }
        }
        if (flag == false) {
            keys.push(array[i]);
        }
        
    }
    let counting = [];
    keys.forEach(element => {
       counting.push(countElement(array, element)); 
    });
    let final = {};
    //const reduced = array.reduce((final,index)=> (final[index]=0,final),{}); // uses reduce to turn the values of the array into keys
    keys.forEach((key,i) => final[key] = counting[i]);
    return final;
    
}
 