// accumulator and currentValue
// use of reduce method
 //const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc,curr){
//     console.log(`acc ${acc} and curr ${curr}`)  
//     return acc + curr 
// },0 )
// console.log(myTotal)

// 




// add all shoping price
const shopingCart = [
    {
        itemName : "js course" ,
        price : 299
    },
    {
        itemName : "Python course" ,
        price : 299
    },
    {
        itemName : "c++ course" ,
        price : 299
    },
    {
        itemName : "java course" , 
        price : 29999
    },
    {
        itemName : "DB course",
        price : 2999
    },
    {
        itemName : "SQL course" ,
        price : 2999
    }
]
 
const myTotal = shopingCart.reduce( ( acc,item) => (acc + item.price),0)
console.log( `tatal price are all course : ${myTotal}`)
