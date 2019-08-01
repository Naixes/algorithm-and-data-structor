// 最简单的二分查找
function bsearch(arr, val) {
    let low = 0,
        high = arr.length - 1
        n = 0
    while(low <= high) {
        n++
        if(n > 10) return
        // mid=(low+high)/2这种写法是有问题的。因为如果low和high⽐较⼤的话，两者之和就有可能会溢出
        // let mid = Math.ceil((low + high) / 2)
        // let mid = Math.ceil(low + (high - low) / 2)
        let mid = Math.ceil(low + ((high - low) >> 1))
        console.log('low', low)
        console.log('high', high)
        console.log('mid', mid)
        if(arr[mid] === val) {
            return mid
        }else if (arr[mid] > val) {
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return -1
}

// 递归实现
function rebsearch(arr, val, low, high) {
    if(low > high) return -1

    let mid = Math.ceil(low + ((high - low) >> 1))
    console.log('low', low)
    console.log('high', high)
    console.log('mid', mid)
    if(arr[mid] === val) {
        return mid
    }else if (arr[mid] > val) {
        return rebsearch(arr, val, low, mid - 1)
    }else {
        return rebsearch(arr, val, mid + 1, high)
    }
}

const arr = [1,2,3,4,4,5,5,6,7,7,7,8,9]

console.log(bsearch(arr, 9))
console.log(rebsearch(arr, 9, 0, arr.length - 1))

// 变体1：查找第一个等于给定值的下标
function fireqbsearch(arr, val) {
    let low = 0,
        high = arr.length - 1
    while(low <= high) {
        let mid = Math.ceil(low + ((high - low) >> 1))
        if(arr[mid] === val) {
            if(arr[mid - 1] !== val || mid === 0) {
                return mid
            }else {
                high = mid - 1
            }
        }else if(arr[mid] > val) {
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return -1
}

console.log(fireqbsearch(arr, 7))
// 变体2：查找最后一个等于给定值的下标
function laseqbsearch(arr, val) {
    let low = 0,
        high = arr.length - 1
    while(low <= high) {
        let mid = Math.ceil(low + ((high - low) >> 1))
        if(arr[mid] === val) {
            // 后一个不等于定值或已经到最后一个
            if(arr[mid + 1] !== val || mid === high) {
                return mid
            }else {
                high = mid - 1
            }
        }else if(arr[mid] > val) {
            high = mid - 1
        }else {
            low = mid + 1
        }
    }
    return -1
}

console.log(laseqbsearch(arr, 7))

// 变体3：查找第一个大于等于给定值的下标
function firmorebsearch(arr, val) {
    let low = 0,
        high = arr.length - 1
    while(low <= high) {
        let mid = Math.ceil(low + ((high - low) >> 1))
        if(arr[mid] >= val) {
            // 前一个小于定值或已经到了第一个
            if(arr[mid - 1] < val || mid === 0) {
                return mid
            }else {
                high = mid - 1
            }
        }else {
            low = mid + 1
        }
    }
    return -1
}

console.log(firmorebsearch(arr, 4))

// 变体4：查找最后一个小于等于给定值的下标
function laslessbsearch(arr, val) {
    let low = 0,
        high = arr.length - 1
    while(low <= high) {
        let mid = Math.ceil(low + ((high - low) >> 1))
        if(arr[mid] <= val) {
            if(arr[mid + 1] > val || mid === high) {
                return mid
            }else {
                low = mid + 1
            }
        } else {
            high = mid - 1
        }
    }
    return -1
}

console.log(laslessbsearch(arr, 4))
