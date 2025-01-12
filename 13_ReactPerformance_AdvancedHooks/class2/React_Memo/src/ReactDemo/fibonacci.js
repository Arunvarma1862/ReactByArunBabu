const memo={}
export function findFibonacci(n){
    if(n in memo){
        return memo[n]
    }
    if(n<=1){
        return n;
    }
    memo[n]=findFibonacci(n-1)+ findFibonacci(n-2)
    return memo[n]
}