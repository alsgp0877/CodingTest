
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
//초기코드
//만약 문자가 "1"이면 
//mode는 0과 1이 있으며, idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 code[idx]의 값에 따라 다음과 같이 행동합니다. 
// if(zCode[i] == '1'){
//     if(zCode[i] != '1'){
//         if(zCode[i]%2 != 0){//code[idx]가 "1"이 아니면 idx가 홀수일 때만
//             ret.push(zCode[i]);//ret의 맨 뒤에 code[idx]를 추가
//         }
//     }else if(zCode[i] == '1'){
//         //mode를 0에서 1으로 바꿉니다.
//         zCode[i] = '1';
//     }
// }
//if(zCode[i] == '0'){//mode가 0일 때
//     if(zCode[i] != '1'){
//        if(zCode[i]%2 == 0){//code[idx]가 "1"이 아니면 idx가 짝수일 때만
//           ret.push(zCode[i]);//ret의 맨 뒤에 code[idx]를 추가
//        }
//     }else if(zCode[i] == '1'){//code[idx]가 "1"이면 
//         //mode를 1에서 0으로 바꿉니다.
//         zCode[i] = '0';
//     }
//}
