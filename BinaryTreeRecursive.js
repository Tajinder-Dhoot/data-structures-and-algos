class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function preOrderTraversal(root) {
  if (root == null) return [];

  const leftValues = preOrderTraversal(root.left);
  const rightValues = preOrderTraversal(root.right);

  return [root, ...leftValues, ...rightValues];
}

function inOrderTraversal(root) {
  if (root == null) return [];

  const leftValues = inOrderTraversal(root.left);
  const rightValues = inOrderTraversal(root.right);

  return [...leftValues, root, ...rightValues];
}

function postOrderTraversal(root) {
  if (root == null) return [];

  const leftValues = postOrderTraversal(root.left);
  const rightValues = postOrderTraversal(root.right);

  return [...leftValues, ...rightValues, root];
}

/*
  Pre Order traversal for search
  time complexity = O(n)
  space complexity = O(n)

 */
const treeIncludes = (root, target) => {
  if (root == null) return false;
  if (root.value == target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

const treeSumRecursion = (root) => {
  if (root == null) return 0;
  return (
    root.value + treeSumRecursion(root.left) + treeSumRecursion(root.right)
  );
};

/*
  find min value in a tree using depth first search
  time = O(n)
  space = O(n)
*/
const treeMinimumValue = (root) => {
  let smallest = root.value;
  const stack = [root];

  while (stack.length > 0) {
    current = stack.pop();
    if (current.value < smallest) {
      smallest = current.value;
    }

    if (current.right != null) stack.push(current.right);
    if (current.left != null) stack.push(current.left);
  }

  return smallest;
};

/*
  find min value in a tree using depth first search with recursion
  time = O(n)
  space = O(n)
*/
const treeMinimumValueRecursion = (root) => {
  if (root == null) return Infinity;

  let leftMin = treeMinimumValueRecursion(root.left);
  let rightMin = treeMinimumValueRecursion(root.right);

  let smallest = root.value;
  if (leftMin < smallest) {
    smallest = leftMin;
  }

  if (rightMin < smallest) {
    smallest = rightMin;
  }

  return smallest;
};

/*
  find min value in a tree using breadth first search
  time = O(n)
  space = O(n)
*/
const treeMinimumValueBFS = (root) => {
  let smallest = root.value;
  const queue = [root];

  while (queue.length > 0) {
    current = queue.shift();
    if (current.value < smallest) {
      smallest = current.value;
    }

    if (current.right != null) queue.push(current.right);
    if (current.left != null) queue.push(current.left);
  }

  return smallest;
};

const treeRootToLeafPaths = (root) => {
  if (root.left == null && root.right == null) return 1;
  if (root.left == null && root.right != null) return 0;
  if (root.left != null && root.right == null) return 0;

  const leftLeafNodes = treeRootToLeafPaths(root.left);
  const rightLeafNodes = treeRootToLeafPaths(root.right);

  return leftLeafNodes + rightLeafNodes;
};

const treeMaxRootToLeafPathSum = (root) => {
  if (root == null) return -Infinity;
  if (root.left == null && root.right == null) return root.value;

  const leftPathSum = root.value + treeMaxRootToLeafPathSum(root.left);
  const rightPathSum = root.value + treeMaxRootToLeafPathSum(root.right);

  if (leftPathSum > rightPathSum) return leftPathSum;
  else return rightPathSum;
};

// const a = new Node("1");
// const b = new Node("2");
// const c = new Node("3");
// const d = new Node("4");
// const e = new Node("5");
// const f = new Node("6");
// const g = new Node("7");
// const h = new Node("8");
// const i = new Node("9");
// const j = new Node("10");
// const k = new Node("11");

// const a = new Node(5);
// const b = new Node(2);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(5);
// const f = new Node(-1);
// const g = new Node(7);
// const h = new Node(-4);
// const i = new Node(9);
// const j = new Node(10);
// const k = new Node(11);

// a.left = b;
// a.right = h;
// b.left = c;
// b.right = f;
// c.left = d;
// c.right = e;
// f.left = g;
// h.left = i;
// h.right = k;
// i.right = j;

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

treeIncludes(a, c.value);
console.log(treeSumRecursion(a));
console.log(treeMinimumValue(a));
console.log(treeMinimumValueBFS(a));
console.log(treeMinimumValueRecursion(a));
console.log(treeRootToLeafPaths(a));
console.log(treeMaxRootToLeafPathSum(a));

// console.log("***Pre Order Traversal***");
// const preOrderTraversalValues = preOrderTraversal(a);
// let index = 0;
// while (index < preOrderTraversalValues.length) {
//   console.log(preOrderTraversalValues[index].value);
//   index++;
// }

// console.log("***In Order Traversal***");
// const inOrderTraversalValues = inOrderTraversal(a);
// index = 0;
// while (index < inOrderTraversalValues.length) {
//   console.log(inOrderTraversalValues[index].value);
//   index++;
// }

// console.log("***Post Order Traversal***");
// const postOrderTraversalValues = postOrderTraversal(a);
// index = 0;
// while (index < postOrderTraversalValues.length) {
//   console.log(postOrderTraversalValues[index].value);
//   index++;
// }
