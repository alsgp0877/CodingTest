def solution(a, b, c):
    answer = 0
    sum = a+b+c;
    pow2 = pow(a, 2) + pow(b, 2) + pow(c, 2);
    pow3 = pow(a, 3) + pow(b, 3) + pow(c, 3);

    if a != b and a != c and b != c :
        answer = sum;
    elif a == b and a == c and b == c : 
        answer = sum * pow2 * pow3;
    else:
        answer = sum * pow2;

    return answer