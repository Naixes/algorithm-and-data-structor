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

// 后进者先出，先进者后出，这就是典型的“栈”结构。
// 栈既可以⽤数组来实现，也可以⽤链表来实现。⽤数组实现的栈，我们叫作顺序栈，⽤链表实现的栈，我们叫作链式栈。



