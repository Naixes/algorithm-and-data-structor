参考资料：https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/basic-data-structure

## 数据结构

仅用于加深理解详细查看notes中的数据结构部分

### 列表

少量元素

没有复杂的查找和排序

#### 迭代器

增加删除比for更灵活

访问元素时不必考虑底层数据结构

有统一的方法访问元素

#### 模拟

```js
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
```

### 线性结构

数据结构我们可以**从逻辑上**分为线性结构和非线性结构。线性结构有数组，栈，链表等， 非线性结构有树，图等。

> 其实我们可以称树为一种半线性结构。

一般而言，有前驱和后继的就是线性数据结构。比如数组和链表。

> 其实一叉树就是链表。

#### 数组

数组是最简单的数据结构了，后面的数据结构很多都有数组的影子。栈和队列其实都可以看成是一种`受限`的数组。

##### React Hooks

Hooks 的本质就是一个数组

```
function Form() {
	// 1. Use the name state variable
	const [name, setName] = useState("Mary");
  	// 2. Use an effect for persisting the form
  	useEffect(function persistForm() {    
  		localStorage.setItem("formData", name);  
  	});
  	// 3. Use the surname state variable
  	const [surname, setSurname] = useState("Poppins");
  	// 4. Use an effect for updating the title
  	useEffect(function updateTitle() {    
  		document.title = name + " " + surname;
    });
  	// ...
}
```

基于数组的方式，Form 的 hooks 就是 [hook1, hook2, hook3, hook4]。

进而我们可以得出这样的关系， hook1 就是 [name, setName] 这一对，hook2 就是 persistForm 这个。

不过使用数组也有一个问题， 那就是 React 将`如何确保组件内部 hooks 保存的状态之间的对应关系`这个工作交给了开发人员去保证，即你必须保证 HOOKS 的顺序严格一致，具体可以看 React 官网关于 Hooks Rule 部分。

#### 队列

特殊的列表，FIFO

队列是一种受限的序列，它只能够操作队尾和队首，并且只能只能在队尾添加元素，在队首删除元素。

队列作为一种最常见的数据结构同样有着非常广泛的应用， 比如消息队列

#### 模拟

```js
function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;// 向队尾增加一个元素
    this.dequeue = dequeue; // 删除对首元素
    this.front = front ; // 读取队首元素
    this.back = back ; // 读取队尾元素
    this.toSting = toSting; // 显示队列中的所有元素
    this.empty = empty;//判断 队列是否为空
}
//入队
function enqueue(element){
    this.dataStore.push(element)

}
//出队
function dequeue(){
    return this.dataStore.shift();

}
// 
function front(){
    return this.dataStore[0]

}

function back(){
    return this.dataStore[this.dataStore.length-1]

}
function empty(){
    if(this.dataStore.length==0){
        return true
    }else{
        return false
    }

}
function toSting(){
    var reStr = '';
    for (let i = 0; i < this.dataStore.length; i++) {
        reStr += this.dataStore[i]+"\n";
    }
    return reStr

}
// var  q = new Queue();
// q.enqueue("xiaowang1")
// q.enqueue("xiaowang2")
// q.enqueue("xiaowang3")
// q.enqueue("xiaowang4")
// // console.log(q)
// // q.dequeue()
// console.log(q.toSting())

// 实现方块舞的舞伴分配问题

var man = new Queue();
man.enqueue("张——1")
man.enqueue("王——1")

var wom = new Queue();
wom.enqueue("张-2")
wom.enqueue("王-2")

function  getDancer(){
    return `${man.dequeue()}----${wom.dequeue()}` 
}
console.log(getDancer(),1)
console.log(getDancer(),2)

//  优先 队列
function dequeue(){
    var priority = 0;
    for (let i = 0; i < this.dataStore.length; i++) {
       if (this.dataStort[i].code>this.dataStore[priority].code) {
           priority = i
       }
    }
    return this.dataStore.splice(priority,1) 
}
```

##### HTTP 1.1 的队头阻塞问题

我们前端在做性能优化的时候，很多时候会提到的一点就是“HTTP 1.1 的队头阻塞问题”，HTTP2 解决了 HTTP1.1 中的队头阻塞问题。

其实`队头阻塞`是一个专有名词，不仅仅在 HTTP 有，交换器等其他地方也都涉及到了这个问题。实际上引起这个问题的根本原因是使用了`队列`这种数据结构。

协议规定， 对于同一个 tcp 连接，所有的 **http1.0** 请求放入队列中，只有前一个`请求的响应`收到了，才能发送下一个请求，这个时候就发生了阻塞，并且这个**阻塞主要发生在客户端**。

- `HTTP/1.0` 和 `HTTP/1.1`:

在`HTTP/1.0` 中**每一次请求都需要建立一个 TCP 连接**，请求结束后立即断开连接。

在`HTTP/1.1` 中，每一个连接都默认是**长连接 (persistent connection)**。对于同一个 tcp 连接，允许一次发送多个 http1.1 请求，也就是说，不必等前一个响应收到，就可以发送下一个请求。这样就解决了 http1.0 的客户端的队头阻塞，而这也就是`HTTP/1.1`中`管道 (Pipeline)`的概念了。

但是，http1.1 规定，**服务器端的响应的发送要根据请求被接收的顺序排队**，也就是说，先接收到的请求的响应也要先发送。这样造成的问题是，如果最先收到的请求的处理时间长的话，响应生成也慢，就会阻塞已经生成了的响应的发送，这也会造成队头阻塞。可见，**http1.1 的队首阻塞是发生在服务器端**。

- `HTTP/2` 和 `HTTP/1.1`:

为了解决`HTTP/1.1`中的服务端队首阻塞，`HTTP/2`采用了**二进制分帧 和 多路复用** 等方法。

帧是`HTTP/2`数据通信的最小单位。在 `HTTP/1.1` 中数据包是**文本格式**，而 `HTTP/2` 的数据包是**二进制格式**的，也就是二进制帧。

采用帧的传输方式可以将请求和响应的数据**分割得更小**，且二进制协议可以被**高效解析**。`HTTP/2`中，同域名下所有通信都在单个连接上完成，该连接可以承载任意数量的双向数据流。每个数据流都以消息的形式发送，而消息又由一个或多个帧组成。多个帧之间可以**乱序发送**，根据帧首部的流标识可以**重新组装**。

`多路复用`用以替代原来的序列和拥塞机制。在`HTTP/1.1`中，**并发多个请求需要多个 TCP 链接**，且单个域名有 6-8 个 TCP 链接请求限制（这个限制是浏览器限制的，不同的浏览器也不一定一样）。在`HTTP/2`中，**同一域名下的所有通信在单个链接完成**，仅占用一个 TCP 链接，**且在这一个链接上可以并行请求和响应**，互不干扰。

> [此网站](https://http2.akamai.com/demo) 可以直观感受 `HTTP/1.1` 和 `HTTP/2` 的性能对比。

#### 栈

栈也是一种受限的序列，它**只能够操作栈顶/栈底**，不管入栈还是出栈，都是在栈顶操作。

以上两种操作可以简单概括为**后进先出 (LIFO = last in, first out)**。

此外，应有一个 peek 操作用于访问栈当前顶端（末尾）的元素。（只返回不弹出）

栈在很多地方都有着应用，比如大家熟悉的浏览器就有很多栈，其实浏览器的执行栈就是一个基本的栈结构，从数据结构上说，它就是一个栈。 这也就解释了，我们用递归的解法和用循环+栈的解法本质上是差不多的。

> 社区中有很多“执行上下文中的 scope 指的是执行栈中父级声明的变量”说法，这是完全错误的， JS 是词法作用域，scope 指的是函数定义时候的父级，和执行没关系

栈常见的应用有进制转换，括号匹配，栈混洗，中缀表达式（用的很少），后缀表达式（逆波兰表达式）等。

合法的栈混洗操作也是一个经典的题目，这其实和合法的括号匹配表达式之间存在着一一对应的关系，也就是说 n 个元素的栈混洗有多少种，n 对括号的合法表达式就有多少种。感兴趣的可以查找相关资料。

```js
function Stack(){
    this.dataStore = [];//保存栈内元素
    this.top = 0;//标记可以插入新元素的位置,栈内压人元素该变量变大 弹出元素,变量减小
    this.push = push;//入栈操作

    this.pop = pop;//出栈操作
    this.peek = peek;//返回栈顶元素
    this.clear = clear;//清空栈
    this.length = length;//栈的长度
}

//向栈中压入元素,同时让指针top+1 一定注意++
function push(element){
    this.dataStore[this.top++] = element;
}

//出栈操作,同时top-1
function pop(){
    return this.dataStore[this.top-1]
}

//返回栈内元素个数
function length(){
    return this.top;
}

//清空一个栈
function clear(){
    this.top = 0;
}

var s = new Stack();
s.push("小红第一");
s.push("小李第二");
s.push("小芳第三");
s.push("小张第四");
console.log("栈的长度",s.length());
console.log("栈顶",s.peek());

//应用小例子,回文函数

function isPalindrome(){
    var s = new Stack();
    for(var i = 0; i < word.length;i++){
        s.push(word[i]);
    }

    var rword = "";
    console.log(s);
    while(s.length()>0){
        rword+=s.pop()
    }
    if(rword == word){
        return true;
    }else{
        return false
    }
}

var word = "racecar";
alert(isPalindrome(word));
```

#### 链表

节点组成的集合

##### 模拟

```js
// 单向链表
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
```



##### React Fiber

fiber 是基于链表实现

fiber 出现的目的其实是为了解决 react 在执行的时候是无法停下来的，需要一口气执行完的问题的。

![img](https://tva1.sinaimg.cn/large/007S8ZIlly1ghlugunkhdj30rc0c0wez.jpg)

​																			fiber-intro

上面已经指出了引入 fiber 之前的问题，就是 react 会阻止优先级高的代码（比如用户输入）执行。因此他们打算自己自建一个`虚拟执行栈`来解决这个问题，这个虚拟执行栈的底层实现就是链表。

Fiber 的基本原理是将协调过程分成小块，一次执行一块，然后将运算结果保存起来，并判断是否有时间继续执行下一块（react 自己实现了一个类似 requestIdleCallback 的功能）。如果有时间，则继续。 否则跳出，让浏览器主线程歇一会，执行别的优先级高的代码。

当协调过程完成（所有的小块都运算完毕）， 那么就会进入提交阶段， 执行真正的进行副作用（side effect）操作，比如更新 DOM，这个过程是没有办法取消的，原因就是这部分有副作用。

问题的关键就是将协调的过程划分为一块块的，最后还可以合并到一起，有点像 Map／Reduce。

React 必须重新实现遍历树的算法，从依赖于`内置堆栈的同步递归模型`，变为`具有链表和指针的异步模型`。

> Andrew 是这么说的： 如果你只依赖于 [内置] 调用堆栈，它将继续工作直到堆栈为空。

如果我们可以随意中断调用堆栈并手动操作堆栈帧，那不是很好吗？ 这就是 React Fiber 的目的。 `Fiber 是堆栈的重新实现，专门用于 React 组件`。 你可以将单个 Fiber 视为一个`虚拟堆栈帧`。

react fiber 大概是这样的：

```
let fiber = {
  tag: HOST_COMPONENT,
  type: "div",
  return: parentFiber,
  children: childFiber,
  sibling: childFiber,
  alternate: currentFiber,
  stateNode: document.createElement("div"),
  props: { children: [], className: "foo" },
  partialState: null,
  effectTag: PLACEMENT,
  effects: [],
};
```

从这里可以看出 fiber 本质上是个对象，使用 parent，child，sibling 属性去构建 fiber 树来表示组件的结构树， return, children, sibling 也都是一个 fiber，因此 fiber 看起来就是一个链表。

> 细心的朋友可能已经发现了， alternate 也是一个 fiber， 那么它是用来做什么的呢？ 它其实原理有点像 git， 可以用来执行 git revert ,git commit 等操作。

了解更多可以看 [这个文章](https://github.com/dawn-plex/translate/blob/master/articles/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-to-walk-the-components-tree.md)，如果可以翻墙， [英文原文](https://medium.com/react-in-depth/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-67f1014d0eb7)，[这篇文章](https://engineering.hexacta.com/didact-fiber-incremental-reconciliation-b2fe028dcaec) 也是早期讲述 fiber 架构的优秀文章

### 非线性结构

非线性结构是为了高效地兼顾静态操作和动态操作。大家可以对照各种数据结构的各种操作的复杂度来直观感受一下。

#### 树

树的应用同样非常广泛，小到文件系统，大到因特网，组织架构等都可以表示为树结构，而在我们前端眼中比较熟悉的 DOM 树也是一种树结构，而 HTML 作为一种 [DSL](https://zhuanlan.zhihu.com/p/107947462) 去描述这种树结构的具体表现形式。如果你接触过 AST，那么 AST 也是一种树，XML 也是树结构。树的应用远比大多数人想象的要多得多。

树其实是一种特殊的`图`，是一种无环连通图，是一种极大无环图，也是一种极小连通图。

从另一个角度看，树是一种递归的数据结构。而且树的不同表示方法，比如不常用的`长子 + 兄弟`法，对于理解树这种数据结构有着很大用处。

树的基本算法有前中后序遍历和层次遍历，所谓的前中后指的是根节点的位置，其他位置按照先左后右排列即可`。比如前序遍历就是`根左右`, 中序就是`左根右`，后序就是`左右根`

我刚才提到了树是一种递归的数据结构，因此树的遍历算法使用递归去完成非常简单，幸运的是树的算法基本上都要依赖于树的遍历。

但是递归在计算机中的性能一直都有问题，因此掌握不那么容易理解的"命令式地迭代"遍历算法在某些情况下是有用的。如果你使用迭代式方式去遍历的话，可以借助上面提到的`栈`来进行，可以极大减少代码量。

> 如果使用栈来简化运算，由于栈是 FILO 的，因此一定要注意左右子树的推入顺序。

树的重要性质：

- 如果树有 n 个顶点，那么其就有 n - 1 条边，这说明了树的顶点数和边数是同阶的。
- 任何一个节点到根节点存在`唯一`路径，路径的长度为节点所处的深度

实际使用的树有可能会更复杂，比如使用在游戏中的碰撞检测可能会用到四叉树或者八叉树。以及 k 维的树结构 `k-d 树`等。

#### 二叉树

二叉树是节点度数不超过二的树，是树的一种特殊子集，有趣的是二叉树这种被限制的树结构却能够表示和实现所有的树， 它背后的原理正是`长子 + 兄弟`法，用邓老师的话说就是`二叉树是多叉树的特例，但在有根且有序时，其描述能力却足以覆盖后者`。

> 实际上， 在你使用`长子 + 兄弟`法表示树的同时，进行 45 度角旋转即可。

对于一般的树，我们通常会去遍历，这里又会有很多变种。

下面我列举一些二叉树遍历的相关算法：

- [94.binary-tree-inorder-traversal]()
- [102.binary-tree-level-order-traversal]()
- [103.binary-tree-zigzag-level-order-traversal]()
- [144.binary-tree-preorder-traversal]()
- [145.binary-tree-postorder-traversal]()
- [199.binary-tree-right-side-view]()

相关概念：

- 真二叉树 （所有节点的度数只能是偶数，即只能为 0 或者 2）

#### 堆

堆其实是一种优先级队列，在很多语言都有对应的内置数据结构，很遗憾 javascript 没有这种原生的数据结构。 不过这对我们理解和运用不会有影响。

堆的特点：

- 在一个 最小堆 (min heap) 中，如果 P 是 C 的一个父级节点，那么 P 的 key（或 value) 应小于或等于 C 的对应值。

  正因为此，堆顶元素一定是最小的，我们会利用这个特点求最小值或者第 k 小的值。

- 在一个 最大堆 (max heap) 中，P 的 key（或 value) 大于或等于 C 的对应值。

需要注意的是优先队列不仅有堆一种，还有更复杂的，但是通常来说，我们会把两者做等价。

相关算法：

- [295.find-median-from-data-stream]()

#### 二叉查找树

二叉排序树（Binary Sort Tree），又称二叉查找树（Binary Search Tree），亦称二叉搜索树。

二叉查找树具有下列性质的二叉树：

- 若左子树不空，则左子树上所有节点的值均小于它的根节点的值；
- 若右子树不空，则右子树上所有节点的值均大于它的根节点的值；
- 左、右子树也分别为二叉排序树；
- 没有键值相等的节点。

对于一个二叉查找树，常规操作有插入，查找，删除，找父节点，求最大值，求最小值。

二叉查找树，之所以叫查找树就是因为其非常适合查找，举个例子， 如下一颗二叉查找树，我们想找节点值小于且最接近 58 的节点，搜索的流程如图所示：

另外我们二叉查找树有一个性质是： `其中序遍历的结果是一个有序数组`。 有时候我们可以利用到这个性质。

相关题目：

- [98.validate-binary-search-tree]()

#### 二叉平衡树

平衡树是计算机科学中的一类数据结构，是一种改进的二叉查找树。一般的二叉查找树的查询复杂度取决于目标结点到树根的距离（即深度），因此当结点的深度普遍较大时，查询的均摊复杂度会上升。为了实现更高效的查询，产生了平衡树。

在这里，平衡指所有叶子的深度趋于平衡，更广义的是指在树上所有可能查找的均摊复杂度偏低。

一些数据库引擎内部就是用的这种数据结构，其目标也是将查询的操作降低到 logn（树的深度），可以简单理解为`树在数据结构层面构造了二分查找算法`。

基本操作：

- 旋转
- 插入
- 删除
- 查询前驱
- 查询后继

##### AVL

是最早被发明的自平衡二叉查找树。在 AVL 树中，任一节点对应的两棵子树的最大高度差为 1，因此它也被称为高度平衡树。查找、插入和删除在平均和最坏情况下的时间复杂度都是 O(logn)。增加和删除元素的操作则可能需要借由一次或多次树旋转，以实现树的重新平衡。AVL 树得名于它的发明者 G. M. Adelson-Velsky 和 Evgenii Landis，他们在 1962 年的论文 An algorithm for the organization of information 中公开了这一数据结构。 节点的平衡因子是它的左子树的高度减去它的右子树的高度（有时相反）。带有平衡因子 1、0 或 -1 的节点被认为是平衡的。带有平衡因子 -2 或 2 的节点被认为是不平衡的，并需要重新平衡这个树。平衡因子可以直接存储在每个节点中，或从可能存储在节点中的子树高度计算出来。

##### 红黑树

在 1972 年由鲁道夫·贝尔发明，被称为"对称二叉 B 树"，它现代的名字源于 Leo J. Guibas 和 Robert Sedgewick 于 1978 年写的一篇论文。红黑树的结构复杂，但它的操作有着良好的最坏情况运行时间，并且在实践中高效：它可以在 O(logn) 时间内完成查找，插入和删除，这里的 n 是树中元素的数目

#### 字典树（前缀树）

又称 Trie 树，是一种树形结构。典型应用是用于统计，排序和保存大量的字符串（但不仅限于字符串），所以经常被搜索引擎系统用于文本词频统计。它的优点是：利用字符串的公共前缀来减少查询时间，最大限度地减少无谓的字符串比较，查询效率比哈希树高。

它有 3 个基本性质：

- 根节点不包含字符，除根节点外每一个节点都只包含一个字符；
- 从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串；
- 每个节点的所有子节点包含的字符都不相同。

#### immutable 与 字典树

`immutableJS`的底层就是`share + tree`. 这样看的话，其实和字典树是一致的。

相关算法：

- [208.implement-trie-prefix-tree]()
- [211.add-and-search-word-data-structure-design]()
- [212.word-search-ii]()

### 图

前面讲的数据结构都可以看成是图的特例。 前面提到了二叉树完全可以实现其他树结构，其实有向图也完全可以实现无向图和混合图，因此有向图的研究一直是重点考察对象。

图论〔Graph Theory〕是数学的一个分支。它以图为研究对象。图论中的图是由若干给定的点及连接两点的线所构成的图形，这种图形通常用来描述某些事物之间的某种特定关系，用点代表事物，用连接两点的线表示相应两个事物间具有这种关系。

#### 基本概念

- 无向图 & 有向图
- 有权图 & 无权图
- 入度 & 出度
- 路径 & 环
- 连通图 & 强连通图

在无向图中，若任意两个顶点 i 与 j 都有路径相通，则称该无向图为连通图。

在有向图中，若任意两个顶点 i 与 j 都有路径相通，则称该有向图为强连通图。

- 生成树

一个连通图的生成树是指一个连通子图，它含有图中全部 n 个顶点，但只有足以构成一棵树的 n-1 条边。一颗有 n 个顶点的生成树有且仅有 n-1 条边，如果生成树中再添加一条边，则必定成环。在连通网的所有生成树中，所有边的**代价和最小**的生成树，称为最小生成树，其中**代价和**指的是所有边的权重和。

#### 图的建立

一般图的题目都不会给你一个现成的图结构。当你知道这是一个图的题目的时候，解题的第一步通常就是建图。这里我简单介绍两种常见的建图方式。

##### 邻接矩阵（常见）

使用一个 n * n 的矩阵来描述图 graph，其就是一个二维的矩阵，其中 graph[i][j] 描述边的关系。

一般而言，我都用 graph[i][j] = 1 来表示 顶点 i 和顶点 j 之间有一条边，并且边的指向是从 i 到 j。用 graph[i][j] = 0 来表示 顶点 i 和顶点 j 之间不存在一条边。 对于有权图来说，我们可以存储其他数字，表示的是权重。

这种存储方式的空间复杂度为 O(n ^ 2)，其中 n 为顶点个数。如果是稀疏图（图的边的数目远小于顶点的数目），那么会很浪费空间。并且如果图是无向图，始终至少会有 50 % 的空间浪费。下面的图也直观地反应了这一点。

邻接矩阵的优点主要有：

1. 直观，简单。
2. 判断两个顶点是否连接，获取入度和出度以及更新度数，时间复杂度都是 O(1)

由于使用起来比较简单， 因此我的所有的需要建图的题目基本都用这种方式。

...

#### 图的遍历

#### 常见算法

## 链表

数组和链表虽然用的都是物理内存，都是两者在对物理的使用上是非常不一样的

数组是连续的内存空间，通常每一个单位的大小也是固定的，因此可以按下标随机访问。而链表则不一定连续，因此其查找只能依靠别的方式，一般我们是通过一个叫 next 指针来遍历查找。链表其实就是一个结构体。 比如一个可能的单链表的定义可以是：

```
interface ListNode<T> {
  data: T;
  next: ListNode<T>;
}
```

data 是数据域，存放数据，next 是一个指向下一个节点的指针。

链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。

从上面的物理结构图可以看出数组是一块连续的空间，数组的每一项都是紧密相连的，因此如果要执行插入和删除操作就很麻烦。对数组头部的插入和删除时间复杂度都是O(N)*O*(*N*)，而平均复杂度也是O(N)*O*(*N*)，只有对尾部的插入和删除才是O(1)*O*(1)。简单来说”数组对查询特别友好，对删除和添加不友好“。而链表适合在数据需要有一定顺序，但是又需要进行频繁增删除的场景。

链表只有一个后驱节点 next，如果是双向链表还会有一个前驱节点 pre。

### 基本操作

#### 插入

插入只需要考虑要插入位置前驱节点和后继节点（双向链表的情况下需要更新后继节点）即可，其他节点不受影响，因此在给定指针的情况下插入的操作时间复杂度为`O(1)`。这里给定指针中的指针指的是插入位置的前驱节点。

伪代码：

```
temp = 待插入位置的前驱节点.next
待插入位置的前驱节点.next = 待插入指针
待插入指针.next = temp
```

如果没有给定指针，我们需要先遍历找到节点，因此最坏情况下时间复杂度为 `O(N)`。

> 提示 1: 考虑头尾指针的情况。
>
> 提示 2: 新手推荐先画图，再写代码。等熟练之后，自然就不需要画图了。

#### 删除

只需要将需要删除的节点的前驱指针的 next 指针修正为其下下个节点即可，注意考虑**边界条件**。

伪代码：

```
待删除位置的前驱节点.next = 待删除位置的前驱节点.next.next
```

#### 遍历

遍历比较简单，直接上伪代码。

迭代伪代码：

```
当前指针 =  头指针
while 当前节点不为空 {
   print(当前节点)
   当前指针 = 当前指针.next
}
```

一个前序遍历的递归的伪代码：

```
dfs(cur) {
    if 当前节点为空 return
    print(cur.val)
    return dfs(cur.next)
}
```

### 链表和数组

**数组和链表同样作为线性的数组结构，二者在很多方便都是相同的，只在细微的操作和使用场景上有差异而已**。

因此，对于我们做题来说，**二者的差异通常就只是细微的操作差异**。

### 解题

#### 一个原则：画图

#### 两个考点

指针的修改

链表的拼接

##### 指针的修改

其中指针修改最典型的就是链表反转。其实链表反转不就是修改指针么？

对于数组这种支持随机访问的数据结构来说， 反转很容易， 只需要头尾不断交换即可。

```
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const temp = arr[left];
    arr[left++] = arr[right];
    arr[right--] = temp;
  }
  return arr;
}
```

而对于链表来说，就没那么容易了。

实现的一个反转**任意一段链表**

```
reverse(self, head: ListNode, tail: ListNode)。
```

其中 head 指的是需要反转的头节点，tail 是需要反转的尾节点。 不难看出，如果 head 是整个链表的头，tail 是整个链表的尾，那就是反转整个链表，否则就是反转局部链表。接下来，我们就来实现它。