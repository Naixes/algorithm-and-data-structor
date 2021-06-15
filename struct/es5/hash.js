function Hash(){
    this.table = new Array(137)
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.put = put
    this.get = get
    this.show = show;
    this.buildChains = buildChains;

}
function buildChains(){
    for (let i = 0; i < this.table.length; i++) {
        this.table[i] = new Array()
    }
}

function betterHash(data){
    var H = 31;
    var total = 0;
    for (let i = 0; i < data.length; i++) {
        total += H * total + data.charCodeAt(i)
    }
    if(total<0){
        total += this.table.length -1
    }
    return total % this.table.length;

}
function simpleHash(data){
    var total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data.charCodeAt(i)
    }
    return total % this.table.length

}
function put(data){
    var pos = this.simpleHash(data)
    // var pos = this.betterHash(data)
    // this.table[pos] = data;
    var ind = 0;
    // if(this.table[pos]&&this.table[pos][ind]==undefined){
    //     this.table[pos][ind] = data
    //     ind++

    // }else{
    //     while(this.table[pos]&&this.table[pos][ind]!=undefined){
    //         ++ind
    //     }
    //     this.table[pos][ind] = data;
    // }
    if(this.table[pos]!==undefined){
        this.table[pos] = data
    }else{
        while(this.table[pos]!==undefined){
            pos++
        }
        this.table[pos] = data
    }


}
function get(key){
    var hash = this.simpleHash(key)
    for (let index = hash; index < this.table.length; index++){
        if(this.table[index]==key){
            return index
        }
    }
    // return this.table[this.simpleHash(data)]
    // return this.table[this.simpleHash(data)]
    return undefined

}
function show(){
    var n = 0;
    for (let i = 0; i < this.table.length; i++) {
        if(this.table[i]&&this.table[i][0]!=undefined){
            console.log("健值是-》"+i+"值是"+this.table[i])
        }
        
    }

}
let  hash = new Hash();
hash.buildChains()
hash.put("l1")
hash.put("i2")
hash.put("j3")
hash.put("i4")
hash.put("n5")
hash.put("h6")
hash.put("a7")
hash.put("i8")
hash.show()
console.warn(hash.get("n5"))
