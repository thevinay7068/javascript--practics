function logingUserName(userName){
    if(!userName){
        console.log("Please enter the userName ");
        return
    }
    return `${userName} just logged in`
 }
      console.log(logingUserName("vinay"))  // output => vinay just logged in
      console.log(logingUserName())        // output => Please enter the userName 
                                            //undefined



    // use of 3 dot like (...)                          
    // basically it use to store multiple input which is not define by programmer
      function calulateCartPrice(...num1){
        return num1
      }          
      console.log(calulateCartPrice(20,30.50,50.580))      // output => [ 20, 30.5, 50.58 ]



      // use object 
        const user = {
            userName : "vinay",
           prices : 199 ,
      }
       
      function handleObject(anyobject){
        console.log(`user name is ${anyobject.userName} and price is ${anyobject.prices}`)
      }
      handleObject(user)




      