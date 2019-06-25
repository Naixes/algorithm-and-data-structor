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
// 数组或链表暴露了太多的操作接⼝，操作上的确灵活⾃由，但使⽤时就⽐较不可控，⾃然也就更容易出错。当某个数据集合只涉及在⼀端插⼊和删除数据，并且满⾜后进先出、先进后出的特性，我们就应该⾸选“栈”这种数据结构。
// 栈既可以⽤数组来实现，也可以⽤链表来实现。⽤数组实现的栈，我们叫作顺序栈，⽤链表实现的栈，我们叫作链式栈。
// 不管是顺序栈还是链式栈，我们存储数据只需要⼀个⼤⼩为n的数组就够了。在⼊栈和出栈过程中，只需要⼀两个临时变量存储空间，所以空间复杂度是O(1)。(我们说空间复杂度的时候，是指除了原本的数据存储空间外，算法运⾏还需要额外的存储空间。)
// 不管是顺序栈还是链式栈，⼊栈、出栈只涉及栈顶个别数据的操作，所以时间复杂度都是O(1)。



