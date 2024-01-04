function solution(a, b) {
    var answer = 0;
    
    //더하고
    //a + b = ab
    //b + a = ba
    var ab = a.toString() + b.toString();
    var ba = b.toString() + a.toString();

    //비교하고
    //ab > ba
    //return ab
    //ab < ba
    //return ba
    //ab = ba // 고정
    //return ab
    
    var abNum = Number(ab);
    var baNum = Number(ba);

    if(abNum > baNum){
        answer = abNum;
    }else if(abNum < baNum){
        answer = baNum;
    }else if(abNum = baNum){
        answer = abNum;
    }
    
    //반환하고
    return answer;
}