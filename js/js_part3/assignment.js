//Question 1 
let numberArray = [8,9,0,7,2,-2,0,600,59]
let n = 6

let ans = numberArray.slice(0,n)
console.log(ans)

//Question 2 
let newArray = [8,9,0,7,2,-2,0,600,59]
let num = 3

let result = newArray.slice(-num)
console.log(result)


//Question 3 
let mystring = "        lo diwdwhd   woisw   wp   ";
let check = mystring.trim();
console.log('after slicing mystring:',check)
if (check==""){
    console.log('mystring is empty')
}else{
    console.log('mystring is not empty:',mystring)
}

//Question 4
let char = 'p';
console.log('character : ', char)
let lowercase = char.toLowerCase();
if(char == lowercase){
    console.log('Given character is in lowercase')
}else{
    console.log('character is in uppercase', char)
}

//Question 5 
let theString = '    Vingadium Leviyosa   '
console.log('string is:', theString)
console.log('After removing whitespaces string is :', theString.trim())


//Question 6 
let company = ['microsoft', 'apple', 'blackrock', 'tcs']
console.log('list of company:', company)
let checkCompany = 'apple'
console.log('company name:', checkCompany)
if(company.includes(checkCompany)){
    console.log('company exists')
}else{
    console.log('company doesnt exist')
}