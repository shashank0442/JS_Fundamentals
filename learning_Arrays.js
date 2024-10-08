var car=["Tata","Renault","Honda"]

console.log(car)
car[0]="BMW"
console.log(car[0])


// We can also have arrays in the objects

var customer={
    firstName : "Shashank",
    lastName : "Kelkar",
    car:["Tata","Renault","Honda"]
}

// accessing array under customer object

console.log(customer.car[1])
