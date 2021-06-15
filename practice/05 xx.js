// [{id:1, parentId: 0}, {id:2, parentId:1},{id:3, parentId:1}]把这个数组从顶级分类递归查找子分类，最终构建一个树状数组。
// 结果输出如下：
[
    {
        id:1, parentId: 0,
        children:[
            {
                id:2, parentId:1
            },
            {
                id:3, parentId:1
            }
        ]
    }
]
// parentId为0 的是根节点

function arrToTree(arr) {
    const res = []
    
}