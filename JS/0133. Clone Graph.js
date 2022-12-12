/*

133. Clone Graph

https://leetcode.com/problems/clone-graph/

*/

var cloneGraph = function (node) {
    let visited = {};
    let sum = 0;

    function traverse(node) {
        if (!node) return node;
        if (!visited[node.val]) {
            sum += node.val;
            visited[node.val] = new Node(node.val);
            visited[node.val].neighbors = node.neighbors.map((neighbor) => traverse(neighbor));
        }
        console.log(sum);

        return visited[node.val];
    }
    return traverse(node);
};