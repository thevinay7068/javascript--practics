const myArr = [1,2,3,4,5,6,7]
// Add the 10 in each element of the arr
// const myNewArr = myArr.map( (num) => num + 10)
// console.log(myNewArr)


/// chaining method means adding more method by dot (.) operatior

// const myNewArr = myArr.map( (num) => num + 10).map( (num) => num*5)
// console.log(myNewArr)  // output => [
                                 //   55, 60, 65, 70,
                                   //   75, 80, 85
                                  // ]


const myNewArr = myArr.map( (num) => num + 10).map( (num) => num*5).filter( (num) => num>70)
console.log(myNewArr)