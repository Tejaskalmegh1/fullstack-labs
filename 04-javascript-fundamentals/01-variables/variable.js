const accountId = 260901
let accountEmail = "tejas@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 27  // not allowed

accountEmail = "tejas@facebook.com"
accountPassword = "11111"
accountCity = "Bangaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])