function solution(ineq, eq, n, m) {
    var answer = 0;
    var opr = ineq + eq;
    var result = cmprEq(opr,n,m);
    if(result){
        answer = 1; //조건이 맞으면 1 아니면 0을 출력한다
    }else{
        answer = 0;
    }
    return answer;
}

function cmprEq(opr, n, m) {
    if(opr == '>!'){
     return n > m;
    }
    if(opr == '<!'){
     return n < m;
    }
    if(opr == '<='){
     return n <= m;
    }
    if(opr == '>='){
     return n >= m;
    }
}



