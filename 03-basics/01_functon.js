function logingUserName(userName){
    if(!userName){
        console.log("Please enter the userName ");
        return
    }
    return `${userName} just logged in`
 }
      console.log(logingUserName("vinay"))
      console.log(logingUserName())