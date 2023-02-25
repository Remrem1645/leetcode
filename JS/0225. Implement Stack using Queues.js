
var MyStack = function() {
    this.queue1 = [];
};


MyStack.prototype.push = function(x) {
    this.queue1.unshift(x);
};


MyStack.prototype.pop = function() {
    return this.queue1.shift();
};


MyStack.prototype.top = function() {
    return this.queue1[0];
};


MyStack.prototype.empty = function() {
    return this.queue1.length === 0;
};


let obj = new MyStack()

console.log(obj.empty())

obj.push(1)
obj.push(2)

console.log(obj.pop())

obj.push(3)


console.log(obj.pop())


console.log(obj.pop())


/*

queue = first in first out
stack = first in last out

[1,2,3,4,5]


*/





/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */