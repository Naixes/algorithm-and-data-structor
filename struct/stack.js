// 堆栈的使用示例
// 浏览器的历史记录
// 撤销操作
// 递归等
class Stack {
    constructor(...items) {
        this.reverse = false
        this.stack = [...items]
    }
    // 入栈
    // 返回长度
    push(...items) {
        return this.reverse ? this.stack.unshift(...items) : this.stack.push(...items)
    }
    // 出栈
    // 返回删除的值
    pop() {
        return this.reverse ? this.stack.shift() : this.stack.pop()
    }
}

let s = new Stack(4, 5)
s.push(6)
console.log(s.stack)
s.reverse = true
s.push(1, 2, 3)
console.log(s.stack)
