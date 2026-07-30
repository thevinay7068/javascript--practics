//arrays
const myArr = [3,4,2,]
const NewmyArr = [5,6]
//  console.log(myArr[3])
// console.log(myArr.indexOf(4)) 
// // Arrays method
// myArr.push(9)
// console.log(myArr)
// NewmyArr.pop(3)
// console.log(NewmyArr)
// use of unshift -> it insert the element at 0th index

// NewmyArr.slice(1,3)
// console.log(NewmyArr.slice(1,3))
// console.log(NewmyArr.splice(1,3))
// console.log(NewmyArr)

// adding two arrays
 
 console.log( myArr.concat(NewmyArr))  // out put => [ 3, 4, 2, 5, 6 ]


 // adding two arrays value   
  const sum = myArr.map((value , index) => value + NewmyArr[index])

  console.log(sum)    // output => [ 8, 10, NaN ]