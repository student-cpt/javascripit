const mynums = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8];

// const newnums = mynums.map((num) => num + 10)
// console.log(newnums);


const newnums = mynums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newnums);