function Dictionary(){
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;

}
function add(key,val){
    this.dataStore[key] = val
}
function find(key){
    return this.dataStore[key]
}

function remove(key){
    delete this.dataStore[key]

}
function showAll(){
    var dataKeys = Object.keys(this.dataStore).sort()
    for(var key in dataKeys){
        console.log(dataKeys[key],"=>",this.dataStore[dataKeys[key]])
    }

}
function count(){
    return Object.keys(this.dataStore).length

}
function clear(){
    var dataKeys = Object.keys(this.dataStore)
    for(var key in dataKeys){
        delete this.dataStore[dataKeys[key]]
    }

}
var pbook = new Dictionary()
pbook.add("1","100")
pbook.add("2","200")
pbook.showAll()
pbook.remove("1")
console.log("----------")
pbook.showAll()
console.log(pbook.count())
