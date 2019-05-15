// 队列：先进先出
// 队列的使用示例
// 浏览器/NodeJs中 关于宏任务与微任务
class Queue {
    constructor(...items) {
        this.reverse = false
        this.queue = [...items]
    }
    // 进入队列
    enqueue(...items) {
        return this.reverse ? this.unshift(...items) : this.push(...items)
    }
    // 离开队列
    dequeue() {
        return this.reverde ? this.pop() : this.shift()
    }
}