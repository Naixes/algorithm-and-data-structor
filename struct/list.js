function List(){
    this.listSize = 0 ; // 列表元素个数
    this.pos = 0 ; // 列表当前位置
    this.dataStore = [];// 初始化一个空数组 用来保存列表元素
    this.clear = clear ;// 清空列表中所有元素
    this.find = find; // 查找元素
    this.toString = toString ; // 返回列表字符串形式
    this.insert = insert ;// 在现有元素后插入新的元素
    this.append = append; // 在列表元素末尾增加元素
    this.remove = remove; // 从列表中删除元素
    this.front = front ; // 从列表的当前位置移动到第一个元素
    this.end = end; // 从列表当前位置移动到最后一个位置
    this.prev = prev ; //当前位置后移一位
    this.next = next ;// 当期位置向前一位
    this.length = length ; // 列表包含元素的个数
    this.currPos = currPos; // 返回列表当前位置
    this.moveTo = moveTo ;// 当前位置移动到指定位置
    this.getElement = getElement; // 显示当前元素
    this.contains = contains;// 是否包含该元素
    this.getKthFromEnd = getKthFromEnd;// 链表中倒数第k个节点
}
function append(element){
    this.dataStore[this.listSize++] = element
}
function find(element){
    for(var i = 0;i<this.dataStore.length;++i){
        if(this.dataStore[i]==element){
            return i;
        }
    }
    return -1;
}
function remove(element){
    var foundAt = this.find(element);
    if(foundAt>-1){
        this.dataStore.slice(foundAt,1);
        --this.listSize;
        return 
    }
    return false;
}
function length(){
    return this.listSize
}
function toString(){
    return this.dataStore;
}
function insert(element,after){
    var insertPos = this.find(after);
    if(insertPos>-1){
        this.dataStore.splice(insertPos+1,0,element);
        ++this.listSize;
        return true
    }
    return false
}
function clear(){
    delete this.dataStore;
    this.dataStore.length = 0 ;
    this.listSize = this.pos = 0;
}
function contains(element){
    for(var i=0;i<this.dataStore.length;i++){
        if(this.dataStore[i]==element){
            return true
        }
    }
    return false
}
// 遍历列表
function front(){
    this.pos = 0 ;
    
}
function end(){
    this.pos = this.listSize -1;
}
function prev(){
    if(this.pos>0){
        --this.pos
    }
}
function next(){
    if(this.pos<this.listSize){
        ++this.pos
    }
}
function currPos(){
    return this.pos
}
function moveTo(position){
    this.pos = position
}
function getElement(){
    return this.dataStore[this.pos]
}

var names = new List();
names.append("小红")
names.append("小王")
names.append("小丽")
names.next()
console.log(names)
// // 迭代器
// for(names.front();names.currPos()<names.length();names.next()){
//     console.log(names.getElement())
// }