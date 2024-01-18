def solution(num_list):
    answer = 0
    dble_result = 1
    sum_result = 0
    
    for dbl_list in num_list:
        dble_result = dble_result * dbl_list;
        sum_result = sum_result + dbl_list;
        
    if dble_result < pow(sum_result,2) :
        answer = 1;
    else :
        answer = 0;
    return answer