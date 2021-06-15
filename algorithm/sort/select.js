var Carray = function(){
    this.dataStore = [1,8,3,5,6,7,8,9,10]
    this.swap = swap;
    this.selectStore = selectStore;

}
// 交换数组 
function swap(arr,index1,index2){
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2 = temp]
}
function selectStore(){
    var min;
    for (let outer = 0; outer < this.dataStore.length-2; ++outer) {
        // console.log(outer,"outer")
        min = outer
        for (let inner = outer+1; inner < this.dataStore.length-1; ++inner) {
            // console.log(inner,"inner",min,"min",this.dataStore[inner]<this.dataStore[min],this.dataStore[inner],"inner",this.dataStore[min],"min")
            if(this.dataStore[inner]<this.dataStore[min]){
                min = inner
            }
            
        }
        // console.log(outer,min,"outer,min")
        this.swap(this.dataStore,outer,min)
        
        
    }

}
var mynums = new Carray()
mynums.selectStore();
console.log(mynums.dataStore)
