// Qsl . Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

let max_rolled = 6
let dice = Math.random()
console.log("The number you got after rolling a dice: ",Math.floor(dice * max_rolled)+1)


// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car's name.

let car={
    name:"Nissan Sunny",
    model:"XL",
    color:"silver"
}
console.log("car name is :",car.name)

// Qs3. Create an object Person with their name, age and city.
// Edit their city's original value to change it to "New York".
// Add a new property country and set it to the United States.

let person={
    name:"helly",
    age:"21",
    city:"Godhra"
}
console.log("my object:",person.city="New York")
person.country="United States"
console.log("new profile",person)