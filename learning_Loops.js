

//Loops

var i;
for (i = 0; i < 5; i++) {
    console.log(i);
}

var car = ["BMW", "Audi", "Honda", "Tata"]

for (let carName of car) {
    if (carName == "Honda") {
        break
    } else {
        console.log(carName)
    }
}

// ES6 syntax for each loop

car.forEach(car=> {
    console.log(car)
})

i = 10
do {
    console.log("this is do while loop where i is " + i)
    i--;
} while (i > 4)