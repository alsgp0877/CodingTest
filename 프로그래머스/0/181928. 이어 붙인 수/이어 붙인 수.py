def solution(num_list):
    answer = 0
    
    odd_str = ''
    even_str = ''
    odd_int = 0
    even_int = 0
    
    for num in num_list :
        if num % 2 == 0:
            odd_str += str(num)
        else :
            even_str += str(num)
    
    odd_int = int(odd_str) 
    even_int = int(even_str)
    
    answer = even_int + odd_int;
    return answer