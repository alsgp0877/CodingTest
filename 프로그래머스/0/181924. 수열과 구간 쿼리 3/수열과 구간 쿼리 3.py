#queries에 들어있는 값들은 arr의 원소값이 아니라 인덱스 값입니다
def solution(arr, queries):
        
    for i in range(len(queries)): 
        prevV = arr[queries[i][0]];
        nextV = arr[queries[i][1]];
        arr[queries[i][0]] = nextV
        arr[queries[i][1]] = prevV
    return arr;  
     