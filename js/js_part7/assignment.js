// Qsl . Write an arrow function named arrayAverage that accepts an array of numbers
// and returns the average of those numbers.

let arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr){
        total += number
    }
    return total / arr.length;

}
arr = [10,20,30,40]
console.log(arrayAverage(arr))



// Qs2. Write an arrow function named isEven() that takes a single number as argument
// and returns if it is even or not.


let isEven = (number) => {
    if(number%2 == 0){
        console.log("is even number")
    }else{
        console.log('Not even number')
    }
}   
let number = 51
isEven(number)


// Question 3 
const object={
    message:'Hello,World!',
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);