function solution(a, b) {
    var answer = 0;
    
    var abSumNum = Number(a.toString() + b.toString());
    var abDblNum = Number(2 * a * b);
    
    if(abSumNum >= abDblNum){
        answer = abSumNum;
    }else if(abSumNum < abDblNum){
        answer = abDblNum;
    }
    
    return answer;
}