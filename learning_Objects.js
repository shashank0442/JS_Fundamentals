// Objects

var customer={
    firstName : "Shashank",
    lastName : "Kelkar",
    age:33,
    profile:"Tech Lead"
}

console.log(customer) // to get all the values

console.log(customer.firstName)

// Changing values inside object
//using dot notation
customer.firstName = "Shash"
// using bracket notation
customer['age'] = 32

//console output using interpolation 
console.log(`${customer.firstName} ${customer.age}`)