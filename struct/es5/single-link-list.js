function Node(element){
    this.element = element
    this.next = null;

}
// 链表操作方法 
function List(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display
    this.findPrevious = findPrevious
    this.remove = remove;
    this.getKthFromEnd = getKthFromEnd;
}
//插入位置
function find(item){
    var currNode = this.head;
    while(currNode.element!=item){
        currNode = currNode.next
    }
    return currNode;

}
// 插入
function insert(newElement,item){
    var newNode = new Node(newElement);
    var currNode = this.find(item)
    newNode.next = currNode.next;
    currNode.next = newNode

 }

 function findPrevious(item){
     var currNode = this.head;
     while((currNode.next!==null)&&(currNode.next.element!==item)){
         currNode = currNode.next;
     }
     return currNode
     
 }
 function remove (item){
     var preNode = this.findPrevious(item)
     var currNode = this.find(item)
     if(preNode.next!==null){
         preNode.next = currNode.next;
         currNode.next = null
     }
 }

// 遍历
function display(){
    var currNode = this.head;
    while(currNode.next!==null){
        console.log('currNode.next.element', currNode.next.element)
        currNode = currNode.next
    }

}
// 定义一个方法 用于 链表中倒数第k个节点
function getKthFromEnd (k) {
    var first = this.head
    var second = this.head;
    // first 走k步
    while(k!==0){
        first =first.next;
        k--
        console.log(k)
    }
    //  first为null 时候 就是second 剩余的
    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    return second;
};
var cities = new List()
cities.insert("first","head")
cities.insert("second", "first")
cities.insert("thrid","second")
cities.insert("five","thrid")
cities.display()
console.log("------")
console.log(cities.getKthFromEnd(2))
console.log("------")
// console.log(cities.head)

// console.log("========",cities)
// cities.remove("second")
// cities.display()
