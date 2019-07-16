function quickSort(arr) {
    if(arr.length <= 1) return arr

    // 选择基准值
    let midItem = arr.splice(0, 1)[0]
    let left = []
    let right = []
    arr.forEach(item => {
        if(item <= midItem) {
            left.push(item)
        }else {
            right.push(item)
        }
    });
    return quickSort(left).concat(midItem, quickSort(right))
}

const testArr = []
let i = 0
while (i < 1000) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}

const res = quickSort(testArr)
console.log(res)

// 可以优化成原地排序

// 交换顺序
function swap(arr, a, b) {
    if (!arr instanceof Array) return
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

function quickSort2(arr, s, e) {
    if(arr.length <= 1) return arr

    let midItem = arr.splice(s, 1)[0]

    // 分区
    let p = partition(arr, s, e)

    return quickSort(arr, s, p).concat(midItem, quickSort(arr, p, e))
}

function partition(arr, s, e) {
    let i = s
    for(let j=i; j<e; j++) {
        if(arr[j] > arr[i]) {
            swap(arr, i, j)
            i++
        }
    }
    return i
}

const res2 = quickSort2(testArr, 0, testArr.length)
console.log(res2)

// 求出第K大元素
function findK(arr) {
    
}
