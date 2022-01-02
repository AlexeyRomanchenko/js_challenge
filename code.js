function checkFibonacciArray(a) {
  //[1, 2, 1, 2].equals([1, 2, 1, 2]) === true;
  return a.join('') === createFibonacciSequence(a.length).join('');
}

function createFibonacciSequence(count){
  let array = [];

  // const testJs = Array(4).fill(0);
  // console.log('testJs is ', testJs);

  if(count == 1){
    array.push(1);    
  } else if(count == 2){
    array.push(1);    
    array.push(1);    
  } else if(count !== 0) {
    let previousArray = createFibonacciSequence(count - 1);
    
    let lastIndex = previousArray.length - 1;

    array.push(...previousArray, previousArray[lastIndex] + previousArray[lastIndex -1]);
  }
  return array;
}

//array.push(array[i-1] + array[i-2])

module.exports = {checkFibonacciArray, createFibonacciSequence};

// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15