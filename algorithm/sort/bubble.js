// 交换顺序
function swap(arr, a, b) {
    if (!arr instanceof Array) return
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

let m = 0
let n = 0
let s = 0
// let arr = [4,3,2,1]
// let arr = [7,6,5,4,3,2,1]
let arr = [1,2,3,4,5,7,6]

// 1：从前向后排
// 从0开始循环对比当前元素与余下的元素
function bubble1(arr) {
    if(!arr instanceof Array) return
    for(let i = 0; i < arr.length; i++) {
        m++
        for(let j = i + 1; j < arr.length; j++) {
            n++
            if(arr[i] > arr[j]) {
                s++
                swap(arr, i, j)
            }
        }
    }
    return arr
}
console.log('arr', arr)
console.log('bubble1', bubble1(arr))
console.log(m)
console.log(n)
console.log(s)

// 2：从后向前排
// 比较相邻的两个元素
m = 0
n = 0
s = 0
// arr = [4,3,2,1]
// arr = [7,6,5,4,3,2,1]
arr = [1,2,3,4,5,7,6]
function bubble2(arr) {
    if(!arr instanceof Array) return
    for(let i = 0; i < arr.length; i++) {
        m++
        let f = false
        for(let j = 0; j < arr.length - i - 1; j++) {
            n++
            if(arr[j] > arr[j+1]) {
                s++
                f = true
                swap(arr, j, j+1)
            }
        }
        if(!f) return arr
    }
    // return arr
}

console.log('arr', arr)
console.log('bubble2', bubble2(arr))
console.log(m)
console.log(n)
console.log(s)
