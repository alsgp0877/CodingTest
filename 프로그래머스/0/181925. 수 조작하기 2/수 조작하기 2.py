def solution(numLog):
    prev = numLog[0]
    result = '';
    #0에서부터 시작
    #0이 'w'를 만나서 1이 되었어 
    #1이 's'를 만나서 0이 되었어
    #10이 'd'를 만나서 10이 되었어 
    for i in range(len(numLog)) :
        if numLog[i] - prev == 1:
            result +='w'
        if numLog[i] - prev == -1:
            result +='s'   
        if numLog[i] - prev == 10:
           result +='d'
        if numLog[i] - prev == -10:
            result +='a'
        prev = numLog[i]
            
    return result