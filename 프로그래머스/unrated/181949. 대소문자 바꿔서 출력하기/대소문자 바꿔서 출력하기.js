const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = "";
    const num = 32;
    
    for(let i = 0; i< str.length;i++){
       let char = str.charCodeAt(i);
       if(char >= 65 && 90 >= char){//아스키코드 65 ~90일 경우
            let charToNum = String.fromCharCode(char + num);
            result = result + charToNum;            
        }else if(char >= 97 && 122 >= char){//아스키코드 97 ~122일 경우
            let charToNum = String.fromCharCode(char - num);
            result = result + charToNum;           
        }
    }
       
    console.log(result) ;
});
