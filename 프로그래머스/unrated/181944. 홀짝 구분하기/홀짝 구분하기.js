const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    str = '';
    if(n%2 == 1){
        str = n + ' is odd';
    }else{
        str = n + ' is even';
    }
    console.log(str);
});