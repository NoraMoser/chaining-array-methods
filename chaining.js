var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


let chainResult = integers
.sort((a, b) => {return b - a})
.filter((num) => {return num < 19})
.map((num) => {return (num * 1.5) - 1})
.reduce((previous, current) => {return previous + current})
console.log(chainResult);