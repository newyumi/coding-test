// 백준 2884: 알람시계 - 45분 빼기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let h = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);

if (m < 45) {
  h = h - 1;
  if (h < 0) h = 23;
  m = 60 + (m - 45);
} else {
  m = m - 45;
}
    
console.log(`${h} ${m}`);

// 백준 2525: 오븐시계 - 주어진 시간 더하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [h, m] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let totalMinute = h * 60 + m + c;
totalMinute %= 1440; // 하루 초과하면
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(`${hour} ${minute}`);