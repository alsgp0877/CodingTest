def solution(arr, queries):
    answer = []
    for i in range(len(queries)) : 
        tmp = []
        for j in range(queries[i][0],queries[i][1]+1) : 
            if queries[i][2] < arr[j] : 
                tmp.append(arr[j])
        if len(tmp) < 1 :
            tmp.append(-1)
        answer.append(min(tmp))
    return answer
