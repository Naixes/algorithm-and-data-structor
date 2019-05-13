/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */

 /**
  * @param {string} str
  * @return {boolean}
  */
function isValid(str) {
    // 使用栈结构进行匹配
    let valid = true
    let stack = []
    const map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for(i in str) {
        // for...in循环字符串的序号
        // console.log(i)
        const v= str[i]
        if(["(", "[", "{"].indexOf(v) > -1) {
            stack.push(v)
        }else {
            const peak = stack.pop()
            if(v !== map[peak]) {
                valid = false
            }
        }
    }
    console.log(stack)
    // 右边都能匹配成功，左括号有多余的情况
    if(stack.length > 0) { valid = false }
    return valid
}

console.log(isValid("[(())"))
