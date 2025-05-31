let array = [1, 2, 1, 3, 2, 3, 1];

let sortedArr = [...array].sort((a, b) => a - b);

let result = [];

let ones = sortedArr.filter((item) => item === 1);
let twos = sortedArr.filter((item) => item === 2);
let threes = sortedArr.filter((item) => item === 3);

result.push([...ones], [...twos], [...threes]);

console.log(result);
