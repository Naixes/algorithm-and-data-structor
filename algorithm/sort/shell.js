var CArray = function () {
    this.dataStore = [8, 3, 2, 4, 9, 8, 7, 6, 5, 4, 3, 2, 4]
    this.gaps = [5, 3, 1]
    this.shellsort = shellsort
    this.dynamiSort = dynamiSort;
    this.swap = swap

}
function shellsort() {
    for (let g = 0; g < this.gaps.length; g++) {
        for (let i = this.gaps[g]; i < this.dataStore.length; i++) {
            var temp = this.dataStore[i]
            for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp;
                j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]]
            }
            this.dataStore[j] = temp

        }
        console.log("调换后", this.dataStore)

    }
}
// 交换数组 
function swap(arr, index1, index2) {
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2 = temp]
}
function dynamiSort() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (let i = h; i < N; i++) {
            for (var j = i;
                j >= h && this.dataStore[j] < this.dataStore[j - h];
                j = j - h) {
                this.swap(this.dataStore, j, j - h)
                // console.log(this,12)
            }
        }
        h = (h - 1) / 3
    }
}
var myNnms = new CArray()
// myNnms.shellsort()
myNnms.dynamiSort()
console.log(myNnms.dataStore)
