function Set(){
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.show = show;
    this.union = union;
    this.interset = interset;
    this.difference = difference;
    this.subset = subset;
    this.contains = contains;
    this.size = size;
}
function add(data){
    if(this.dataStore.indexOf(data)<0){
        this.dataStore.push(data)

    }else{
        return false
    }

}
function remove(data){
    var pos = this.dataStore.indexOf(data)
    if (pos>-1) {
        this.dataStore.splice(pos,1)
    }else{
        return false
    }
}
function show(){
    return this.dataStore;
}
function size(){
    return this.dataStore.length;
}
// 合集
function union(set){
    var temSet = new Set();
    for (let index = 0; index < this.dataStore.length; index++) {
        temSet.add(this.dataStore[i])
    }
    for (let index = 0; index < set.dataStore.length; index++) {
        if(!temSet.contains(set.dataStore[i])){
            temSet.dataStore.push(set.dataStore[i])
        }
    }
    return temSet

}
function contains(data){
    if(this.dataStore.indexOf(data)>-1){
        return true
    }else{
        return false
    }

}
// 并集
function interset(set){
    var temSet = new Set();
    for (let index = 0; index < set.dataStore.length; index++) {
        if(temSet.contains(set.dataStore[i])){
            temSet.dataStore.push(set.dataStore[i])
        }
    }
    return temSet
}
// 补集
function difference(set){
    var temSet = new Set();
    for (let index = 0; index < set.dataStore.length; index++) {
        if(!temSet.contains(set.dataStore[i])){
            temSet.dataStore.push(set.dataStore[i])
        }
    }
    return temSet
}
// 子集
function subset(set) {
  if(set.size() > this.size()) {
    return false
  }else {
    for (let index = 0; index < set.dataStore.length; index++) {
        if(!this.contains(set.dataStore[i])){
           return false
        }
    }
    return true
  }
}
var names = new Set();
names.add("小红")
names.add("小李")
names.add("小张")
names.add("小黄")
names.add("小王")
console.log(names.show())
names.remove("小王")
console.log(names.show())