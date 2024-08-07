const accountId = 144559
let accountEmail ="snehal@google.com"
var accountPassword="1234"
accountCity="Nagpur"
let accountState;
/*
Prefer not to use var because of issue in block scope{} and functional scope*/



//accountId =2// not allowed 

accountEmail ="Sp@sp.com"
accounPassword ="21212121"
acountCity="Mumbai"

console.log(accountId);

console.table([ accountId,accountEmail, accountPassword, accountCity, accountState])

