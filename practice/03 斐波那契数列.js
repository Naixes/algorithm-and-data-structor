// 返回斐波那契额数列的第n项
// 1 1 2 3 5 8

// 递归
// 不是尾递归，无法优化
function fibonacci(n) { 
    if (n <= 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));

// 递归+记忆化
function MemoryFibonacci() {
    if(n <= 1) return 1
    if(!memory[n]) {
        memory[n] = MemoryFibonacci(n - 1) + MemoryFibonacci(n - 2);
    }
    return memory[n]
}

// 尾递归
// n项 0项 1项 
function tailFibonacci(n , ac0 = 1 , ac1 = 1) { 
    if( n <= 1 ) {return ac1};
    return tailFibonacci (n - 1, ac1, ac0 + ac1);
} //ES6强制使用尾递归

console.log(tailFibonacci(5));

// 动态规划
// 优点：空间换时间，缓存计算结果
// 缺点：空间复杂度高
function dynamicFibonacci(n) { 
    if (n <= 1) return 1;
    let pre = 1,
        cur = 1,
        result = 0
    for(let i = 2; i <= n; i++) {
        result = (pre + cur) % 1000000007
        pre = cur
        cur = result
    }
    return result
}

console.log('dynamicFibonacci', dynamicFibonacci(5));

// 其他
// 返回数组
function fibonacciArr(n) { 
    const arr = Array(n).fill(1)
    arr.forEach((v, i) => {
        if(i > 1) {
            arr[i] = arr[i - 1] + arr[i - 2]
        }
    })
    return arr
}
