function solution(num, n) {
    var answer = 0;

    if(num % n == 0){//num이 n의 배수이면 
        answer = 1; //return 1
    }else{//num이 n의 배수가아니면 
        answer = 0;//return 0
    }
    
    return answer;
}