/**
 * 在一个长度相同的二维数组中，每列每行都递增排列
 * 完成一个函数，输入如上的二维数组和一个这个数，判断是否包含关系
 * 
 * 比如：
 * 1 2 3
 * 4 5 6
 * 7 8 9
 * 
 * 思路：
 * 可以直接使用左下角数字开始查找：大于上移小于右移
 */

function findNumFrom2DArray(arr, num) {
    const x = 0,
          y = arr.length - 1
    return _compare(arr, num, x, y)
}

function _compare(arr, num, x, y) {
    if(arr[y] === undefined || arr[y][x] === undefined) return false
    const tem = arr[y][x]
    console.log(tem, num);
    if(num === tem) {
        return true
    }
    else if(num > tem) {
        return _compare(arr, num, x + 1, y)
    }
    else if(num < tem) {
        return _compare(arr, num, x, y - 1)
    }
}

console.log(findNumFrom2DArray([[1,2,3], [4,5,6], [7,8,9]], 5));

/**
 * 拓展：一维数组二分查找
 */

function binarySearchNumFrom2DArray(arr, num) {
    const start = 0,
        // 8
          end = arr.length
    return _binarySearch(arr, num, start, end)
}
function _binarySearch(arr, num, start, end) {
    if(start > end) {
        return false
    }
    // 4,33
    const mid = Math.floor((start + end) / 2)
    console.log(arr[mid], num);
    if(num === arr[mid]) {
        return true
    }else if(num < arr[mid]) {
        return _binarySearch(arr, num, start, mid - 1,)
    }else if(num > arr[mid]) {
        return _binarySearch(arr, num, mid + 1, end)
    }
}

console.log(binarySearchNumFrom2DArray([1,2,3,4,33,34,44,45], 4));


