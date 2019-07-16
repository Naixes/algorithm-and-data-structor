// 堆栈的使用示例
// 浏览器的历史记录
// 撤销操作
// 递归等
class myStack {
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

let s = new myStack(4, 5)
s.push(6)
console.log(s.stack)
s.reverse = true
s.push(1, 2, 3)
console.log(s.stack)

// 后进者先出，先进者后出，这就是典型的“栈”结构。
// 栈既可以⽤数组来实现，也可以⽤链表来实现。⽤数组实现的栈，我们叫作顺序栈，⽤链表实现的栈，我们叫作链式栈。

'use strict'
const items = new WeakMap()  // 保存栈里的元素
class Stack {
    constructor () {
        items.set(this, [])
    }
    push (elements) { // 添加一个（或几个）新元素到栈顶
        let s = items.get(this) 
        s.push(elements)
    }
    pop () {
        let s = items.get(this)
        let r = s.pop()
        return r
    }
    peek () { // 将返回栈顶的元素
        let s = items.get(this)
        return s[s.length - 1]
    }
    isEmpty () { // 能简单地判断内部数组的长度是否为0
        let s = items.get(this)
        return s.length === 0
    }
    clear () { // 把数组中的元素全部移除
        items.set(this, [])
    }
    print () { // 打印数组
        let s = items.get(this)
        console.log(s)
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
console.log(stack.isEmpty())
stack.print()
stack.clear()
stack.print()
console.log(stack.isEmpty())

// 进制转换
const baseConverter = (decNumber, base) => {
    const remStack = new Stack()
    let rem, binaryString = '', digits = '0123456789ABCDEF'
    while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem) 
    decNumber = Math.floor(decNumber / base) 
    }
    while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]
    }
    return binaryString
}
console.log(baseConverter(233, 2))



