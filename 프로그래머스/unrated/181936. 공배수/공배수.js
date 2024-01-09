function solution(number, n, m) {
    var answer = 0;
    if((number >= 10 && number <=100) && (n>=2 && n<=10) && (m>=2 && m<=10)){
        if(number % n == 0 && number % m == 0){ 
            answer=1; 
        }else if(number % n != 0 && number % m != 0){
            answer=0; 
        }
    }

    return answer;
}