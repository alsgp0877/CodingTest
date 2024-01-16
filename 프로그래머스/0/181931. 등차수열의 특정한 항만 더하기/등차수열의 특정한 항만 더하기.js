function solution(a, d, included) {//included는 주어짐
    var answer = 0;
    var num = [];
    for(var i=0;i<included.length;i++){
        if(included[i] == true){
            answer += a + d*i;
        }
       
    }
    return answer;
}