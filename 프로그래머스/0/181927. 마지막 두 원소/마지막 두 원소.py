def solution(num_list):
    #이렇게하면 숫자를 넣을수가 있어서 되는구나 num이숫자만 반환을 하고 num_list는 문자배열이니까
    num_list_len = len(num_list);
    if num_list_len >= 1:
        num_list_last = num_list[num_list_len-1];
        num_list_prev = num_list[num_list_len-2];
        
        if num_list_last > num_list_prev:
            num_list.append(num_list_last - num_list_prev)
        if num_list_last <= num_list_prev:
            num_list.append(num_list_last * 2)

    return num_list