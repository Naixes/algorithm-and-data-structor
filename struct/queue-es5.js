function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;// 向队尾增加一个元素
    this.dequeue = dequeue; // 删除对首元素
    this.front = front ; // 读取队首元素
    this.back = back ; // 读取队尾元素
    this.toSting = toSting; // 显示队列中的所有元素
    this.empty = empty;//判断 队列是否为空



    
}
//入队
function enqueue(element){
    this.dataStore.push(element)

}
//出队
function dequeue(){
    return this.dataStore.shift();

}
// 
function front(){
    return this.dataStore[0]

}

function back(){
    return this.dataStore[this.dataStore.length-1]

}
function empty(){
    if(this.dataStore.length==0){
        return true
    }else{
        return false
    }

}
function toSting(){
    var reStr = '';
    for (let i = 0; i < this.dataStore.length; i++) {
        reStr += this.dataStore[i]+"\n";
    }
    return reStr

}
// var  q = new Queue();
// q.enqueue("xiaowang1")
// q.enqueue("xiaowang2")
// q.enqueue("xiaowang3")
// q.enqueue("xiaowang4")
// // console.log(q)
// // q.dequeue()
// console.log(q.toSting())

// 实现方块舞的舞伴分配问题

var man = new Queue();
man.enqueue("张——1")
man.enqueue("王——1")

var wom = new Queue();
wom.enqueue("张-2")
wom.enqueue("王-2")

function  getDancer(){
    return `${man.dequeue()}----${wom.dequeue()}` 
}
console.log(getDancer(),1)
console.log(getDancer(),2)

//  优先 队列
function dequeue(){
    var priority = 0;
    for (let i = 0; i < this.dataStore.length; i++) {
       if (this.dataStort[i].code>this.dataStore[priority].code) {
           priority = i
       }
    }
    return this.dataStore.splice(priority,1) 
}