// 백준 2588 곱셈문제
// (세 자리 수) * (세 자리 수)
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 줄바꿈 아니고 공백 이용해서 여러개가 입력됐을때는 공백 단위로 쪼갬
// let data = input[0].split(' ');

// 줄바꿈해서 입력될때 바로 배열로 나눠짐
let input1 = input[0];
let input2 = input[1];

let x1 = input2[2];
let x2 = input2[1];
let x3 = input2[0];

console.log(Number(input1) * Number(x1));
console.log(Number(input1) * Number(x2));
console.log(Number(input1) * Number(x3));
console.log(Number(input1) * Number(input2));