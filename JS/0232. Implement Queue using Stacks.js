/*

232. Implement Queue using Stacks

https://leetcode.com/problems/implement-queue-using-stacks/

*/

var MyQueue = function() {
    this.stack = [];
    this.stackTemp = [];
};

MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

MyQueue.prototype.pop = function() {
    if(this.stack.length === 1) return this.stack.pop();
    while(this.stack.length > 1) {
        this.stackTemp.push(this.stack.pop());
    }
    let result = this.stack.pop();
    while(this.stackTemp.length > 0) {
        this.stack.push(this.stackTemp.pop());
    }
    return result;
};

MyQueue.prototype.peek = function() {
    if(this.stack.length === 1) return this.stack[0];
    while(this.stack.length > 1) {
        this.stackTemp.push(this.stack.pop());
    }
    let result = this.stack[0];
    while(this.stackTemp.length > 0) {
        this.stack.push(this.stackTemp.pop());
    }
    return result;
};

MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};

let obj = new MyQueue()

console.log(obj.empty())

obj.push(1)
obj.push(2)
obj.push(3)

console.log(obj)


console.log(obj.pop())
console.log(obj.pop())

obj.push(5)

console.log(obj.peek())
console.log(obj.pop())
console.log(obj.pop())

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */