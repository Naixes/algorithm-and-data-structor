/**
 *  * Given a sorted array nums, remove the duplicates in-place such that each
 * element appear only once and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 * 
 * Example 1:
 * 
 * 
 * Given nums = [1,1,2],
 * 
 * Your function should return length = 2
 * 
 * Example 2:
 * 
 * 
 * Given nums = [0,0,1,1,1,2,2,3,3,4],
 * 
 * Your function should return length = 5
 */

 /**
  * @param {number[]} nums
  * @return {number}
  */

const removeDuplicates = function(nums) {
    // 使用快慢指针的方式
    const size = nums.length
    let slowP = 0
    for(let fastP = 0; fastP < size; fastP++) {
        if(nums[fastP] !== nums[slowP]) {
            slowP++
            // 让slowP记住当前值,方便与后面的值作比较
            nums[slowP] = nums[fastP]
        }
    }
    return slowP + 1
}

console.log(removeDuplicates([11,11,12,13,13,13,13,24,33]))
