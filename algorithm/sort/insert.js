// 交换顺序
function swap(arr, a, b) {
    if (!arr instanceof Array) return
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

let m = 0
let n = 0
let s = 0
// let arr = [7,6,5,4,3,2,1]
let arr = [1,2,3,4,5,7,6]

function insert1(arr) {
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

console.log('arr', arr)
console.log('insert', insert1(arr))
console.log(m)
console.log(n)
console.log(s)

m = 0
n = 0
s = 0
// arr = [7,6,5,4,3,2,1]
arr = [1,2,3,4,5,7,6]
function insert2(arr) {
    if (!arr instanceof Array) return
    for (let i = 1; i < arr.length; i++) {
        let now = arr[i]
        m++
        let j = i - 1
        for (; j >= 0; --j) {
            n++
            // 比较当前元素和之前的元素，小时交换
            if (arr[j] > now) {
                s++
                arr[j+1] = arr[j]
            } else {
                break
            }
        }
        arr[j+1] = now
    }
    return arr
}

console.log('arr', arr)
console.log('insert', insert2(arr))
console.log(m)
console.log(n)
console.log(s)