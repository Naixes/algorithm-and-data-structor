function Node(element){
    this.element = element;
    this.next = null;
    this.previous = null;
}
function List(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display
    this.remove = remove
    this.displReverse = displReverse
    this.findLast  =findLast

}
function find(item){
    var currNode = this.head;
    while(currNode.element!=item){
        currNode  = currNode.next
    }
    return currNode

}
function insert(newElement,item){
    var newNode = new Node(newElement);
    var current = this.find(item)
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
    // 不是尾节点
     if(!newNode.next==null){
        //  console.log(newNode)
         newNode.next.previous = newNode
     }
}
function remove(item){
    var currNode = this.find(item);
    if((currNode.next===null)){
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous
        currNode.next = null;
        currNode.previous = null
    }else{
        currNode.previous.next = null;
        currNode.previous = null
    }

}
function display(){
    var currNode = this.head;
    while(currNode.next!==null){
        console.log('currNode.next.element', currNode.next.element)
        currNode = currNode.next
    }
}
function findLast(){
    var  currNode = this.head;
    while(!(currNode.next==null)){
        currNode = currNode.next
    }
    return currNode
}
// 反向遍历
function displReverse(){
    var currNode = this.findLast();
    console.log(currNode,"currNode.previous")
    while(!(currNode.previous==null)){
        console.log(currNode.element)
        currNode=currNode.previous;
    }
}
var cities = new List();
cities.insert("first","head")
cities.insert("second","first")
cities.insert("third","second")
cities.display()


console.log("=========")
cities.remove("second")
cities.display()
cities.displReverse()