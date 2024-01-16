
function solution(code) {
    var answer = '';
    var mode = '0';
    var ret = [];
    
    for (var i = 0; i < code.length; i++) {
        if(mode == '0'){
            if(code[i] == '1'){
                mode = '1';//31
            }else if(code[i] != '1'){//1b 9b
                if(Number(i) % 2 == 0){//0a 2c 8a 10c
                    ret.push(code[i]);
                }
            }
        }else if(mode == '1'){
            if(code[i] == '1'){
                mode = '0';//71
            }else if(code[i] != '1'){//4a 6c
                if(Number(i) % 2 != 0){//5b
                    ret.push(code[i]);
                }
            }
        }
    }
    if(ret.length == 0){
        answer = "EMPTY";
    }else{
        answer = ret.join('');
    }
    return answer;
}