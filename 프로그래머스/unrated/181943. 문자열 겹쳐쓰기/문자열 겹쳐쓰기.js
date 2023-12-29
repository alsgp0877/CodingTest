function solution(my_string, overwrite_string, s) {
    var answer = '';
    //문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을  
    //s ~ s+o
    var start = Number(s);
    var end = start + Number(overwrite_string.length);

    
    //문자열 overwrite_string으로 바꾼
    //answer = my_string.replace(my_string.slice(start, end),overwrite_string);
    //answer = my_string.replace("aaa","bbb",length_sum);
     answer = my_string.slice(0, start) + overwrite_string + my_string.slice(end);
    


    //문자열을 return 하는 solution 함수
    return answer;
}
