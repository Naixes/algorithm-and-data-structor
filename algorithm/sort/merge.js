function mergeSort(arr) {
    // 结束条件
    if(arr.length <= 1) return arr
    // 取中间索引
    let mid = ~~(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let tmp = []

    while(left.length && right.length) {
        // 排序两个有序数组
        // 找出最小值插入tmp
        // 数值相等时将左边的放在前面，稳定
        if(left[0] <= right[0]) {
            tmp.push(left.shift())
        }else {
            tmp.push(right.shift())
        }
    }
    // 此时有一变为空，合并剩下的数组
    return tmp.concat(left, right)
}

// 另外一种merge方法
// const mergeArr = (left, right) => {
//     let temp = []
//     let leftIndex = 0
//     let rightIndex = 0
//     // 判断2个数组中元素大小，依次插入数组
//     while (left.length > leftIndex && right.length > rightIndex) {
//         if (left[leftIndex] <= right[rightIndex]) {
//             temp.push(left[leftIndex])
//             leftIndex++
//         } else {
//             temp.push(right[rightIndex])
//             rightIndex++
//         }
//     }
//     // 合并 多余数组
//     return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// }

const testArr = []
let i = 0
while (i < 100) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}

// const res = mergeSort(testArr)
// console.log(res)

// 优化
function mergeSort2(arr, s, e) {
    // 结束条件
    if(arr.length <= 1) return arr
    // 取中间索引
    s = ~~(arr.length / 2)
    return merge(mergeSort(arr, 0, s), mergeSort(arr, s, e))
}

function merge(left, right) {
    let tmp = []

    while(left.length && right.length) {
        // 排序两个有序数组
        // 找出最小值插入tmp
        // 数值相等时将左边的放在前面，稳定
        if(left[0] <= right[0]) {
            tmp.push(left.shift())
        }else {
            tmp.push(right.shift())
        }
    }
    // 此时有一变为空，合并剩下的数组
    return tmp.concat(left, right)
}
const res2 = mergeSort2(testArr, 0, testArr.length)
console.log(res2)
