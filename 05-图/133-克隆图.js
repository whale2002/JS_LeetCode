/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
  if(!node) return node

  const visited = new Map()
  const dfs = (node) => {
    const copy = new Node(node.val)

    visited.set(node, copy)
    node.neighbors?.forEach(child => {
      if(!visited.has(child)) dfs(child)

      copy.neighbors.push(visited.get(child))
    })
  }

  dfs(node)

  return visited.get(node)
};