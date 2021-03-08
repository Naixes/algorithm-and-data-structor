/**
 * 1000个6位长度的纯数字验证码，数组形式输出（最简单的方法来做）
 */

const range = (len) => {
    // | 位运算取整
    return Array.from({length: len}, (_, i) => (Math.random() * 1000000 | 0).toString().padStart(6, "000000"))
}

console.log(range(100));