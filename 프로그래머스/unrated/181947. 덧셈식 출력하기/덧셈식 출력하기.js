const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    //console.log(input[0] '+' input[1] '=' + Number(input[0]) + Number(input[1]));
    let a = input[0];
    let b = input[1];
    console.log(a + ' + ' + b + ' = ' + (Number(a) + Number(b)));
});

// (입력) 문자열이 필요하다 
// -조건이 생김

// (출력)어딘가 출력해야한다.
// -콘솔
