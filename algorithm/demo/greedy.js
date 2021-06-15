// 贪心算法

// 找零问题
class Change{
    constructor(changeType){
        this.changeType = changeType;
        this.cache = []
    }
    makeChange(amount){
        // 最少张数
        let min = [];
        if(!amount){
            return []
        }
        if(this.cache[amount]){
            return this.cache[amount]
        }
        for (let i = 0; i < this.changeType.length; i++) {
            const letAmount = amount - this.changeType[i]
            let newMin ;
            if (letAmount>=0) {
                console.log(letAmount);
                newMin = this.makeChange(letAmount)
            }
            // 下一步找钱逻辑
            if(letAmount>=0&&(newMin.length<min.length-1)||!min.length){
                //纠正结果
                min = [this.changeType[i]].concat(newMin)
            } 
        }
        return this.cache[amount] = min

    }
}
const change = new Change([1,5,10,20,50,100])
console.log(change.makeChange(99))