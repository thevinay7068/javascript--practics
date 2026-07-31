//switch case syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month=8
switch (month) {
    case 1: console.log("jan")
        
        break;
    case 2: console.log("feb")
        
        break;
    case 3: console.log("mar")
        
        break;
    case 4: console.log("app")
        
        break;
        



    default:
         console.log("not match")

        break;
}







// some important note
// false value => 0,-0,BigInt 0n, "",null, undefined,NaN


//true value => "0",'false'," ", [] , function()






/// loop
// for of loop
//// syntax of for of loop


// for (const element of object) {
    
// }



const arr = [1,2,5,4,7,8]
for (const element of arr) {
    console.log(element)
    
}


///forEach loop

const coding = ["js","java","react","python"]
coding.forEach( function (val) {
    console.log(val)
})


// use arrow function
coding.forEach( (item) => {
    console.log(item)
})