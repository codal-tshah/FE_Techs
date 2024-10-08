let popcornSize = 'o'
let S=50
let M=100
let L=150
let XL=200
if (popcornSize == 'S'){
    console.log(`Popcorn price is: ${S}`)
}
else if (popcornSize == 'M'){
    console.log(`Popcorn price is: ${M}`)
}
else if (popcornSize == 'L'){
    console.log(`Popcorn price is: ${L}`)
}
else if (popcornSize == 'XL'){
    console.log(`Popcorn price is: ${XL}`)
}
else{
    console.log('Popcorn not available')
}

let day=10;
    
switch (day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('wrong day')
}