// 交换顺序
function swap(arr, a, b) {
    if (!arr instanceof Array) return
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

let m = 0
let n = 0
let s = 0
let arr = [2,1,3,4,5,7,9,12]

function insert(arr) {
    if (!arr instanceof Array) return
    for (let i = 1; i < arr.length; i++) {
        m++
        for (let j = i - 1; j >= 0; j--) {
            n++
            // 比较当前元素和之前的元素，小时交换
            if (arr[j+1] < arr[j]) {
                s++
                swap(arr, j, j+1)
            }
        }
    }
    return arr
}

console.log('insert', insert(arr))
console.log(m)
console.log(n)
console.log(s)