// Qsl. Write a JavaScript function that returns array elements larger than a number.


let fungt = function(num){
    let myArray = [5,6,9,2,0,20,6,33,1,3]
    for (let i=0;i<=myArray.length;i++){
        if(num<myArray[i]){
            console.log(myArray[i]);
        }
    }
    
}
fungt(3)



// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = "abcdabcdefgggh"
// ans = "abcdefgh"

let myStr = "abcdabcdefgggh"
function dupfunc(myStr, newStr){
    for(let i=0;i<myStr.length;i++){

    }
}




// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "lJnited States of America"]
// output : "United States of America"

let input = prompt("Enter a list of Country");
let array = input.split(",");

function longestString() {
    return array.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
console.log(longestString());

// Qs4. Write a JavaScript function to count the number of vowels in a String argument.
let vowels = ['a','e','i','o','u'];
function checkVowels(vowels,myStr){
    
}

// Qs5. Write a JavaScript function to generate a random number within a range (start,
// end).