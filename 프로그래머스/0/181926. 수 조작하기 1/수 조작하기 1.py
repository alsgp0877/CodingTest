def solution(n, control):
    # 정수 n 4개의 문자 control
    for i in range(len(control)) :
        if 'w' == control[i] :
            n += 1
        if 's' == control[i] :
            n -= 1
        if 'd' == control[i] :
            n += 10
        if 'a' == control[i] :
            n -= 10  
            
    return n