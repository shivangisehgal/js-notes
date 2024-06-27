const accountId = 144553;
let accountEmail = "sarfaraz@google.com";
var accountPassword = "12345";
accountCity = "Hyderabad";

// accountId = 2; //not allowed
accountEmail = "sh@sh.com";
accountPassword = "212121";
accountCity = "Bengaluru";
let accountState; //hence, accountState = undefined

console.log([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
]);


// Output
// [ 144553, 'sh@sh.com', '212121', 'Bengaluru', undefined ]
