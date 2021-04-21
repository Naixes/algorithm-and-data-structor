/**
 * 统计一个数字在有序数组中出现的次数
 * 1. 遍历数组，找到起始和结束位置，时间复杂度n
 * 2. 二分法查找到目标值，向前后遍历，时间复杂度n
 * 3. 二分法查找出起始结束位置，时间复杂度logn
 */ 

// 3
function getNumOfValue(value, arr) {
    if(arr && arr.length > 0 && value !== null) {
        const firstIndex = getfirstK(value, arr, 0, arr.length)
        const lastIndex = getlastK(value, arr, 0, arr.length)
        if(firstIndex !== -1 && lastIndex !== -1) {
            return lastIndex - firstIndex + 1
        }
    }
    return 0
}
function getfirstK(value, arr, start, end) {
    if(start > end) {
        return -1
    }
    const mid = Math.floor((start + end) / 2)
    if(value == arr[mid]) {
        if(value == arr[mid - 1]) {
            return getfirstK(value, arr, start, mid - 1)
        }else {
            return mid
        }
    }else if(value < arr[mid]) {
        return getfirstK(value, arr, start, mid - 1)
    }else if(value > arr[mid]) {
        return getfirstK(value, arr, mid + 1, end)
    }
}
function getlastK(value, arr, start, end) {
    if(start > end) {
        return -1
    }
    const mid = Math.floor((start + end) / 2)
    if(value == arr[mid]) {
        if(value == arr[mid + 1]) {
            return getlastK(value, arr, mid + 1, end)
        }else {
            return mid
        }
    }else if(value < arr[mid]) {
        return getlastK(value, arr, start, mid - 1)
    }else if(value > arr[mid]) {
        return getlastK(value, arr, mid + 1, end)
    }
}