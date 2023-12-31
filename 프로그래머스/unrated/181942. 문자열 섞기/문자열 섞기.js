function solution(str1, str2) {
    var answer = '';
    
    //answer = str1.slice(0,1) + str2.slice(0,1) + str1.slice(1,2) + str2.slice(1,2);
    var answerArray = [];
    for(var i=0;i<=str1.length;i++){
        answerArray.push(str1.slice(i,i+1));
        answerArray.push(str2.slice(i,i+1));
    }
   
    answer = answerArray.join("");
    return answer;
}