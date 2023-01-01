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
  return root.value + sumOfNodeValues(root.left) + sumOfNodeValues(root.right);
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

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(7);
const h = new Node(8);
const i = new Node(9);
const j = new Node(10);
const k = new Node(11);

a.left = b;
a.right = h;
b.left = c;
b.right = f;
c.left = d;
c.right = e;
f.left = g;
h.left = i;
h.right = k;
i.right = j;

console.log(treeSumRecursion(a));

console.log("***Pre Order Traversal***");
const preOrderTraversalValues = preOrderTraversal(a);
let index = 0;
while (index < preOrderTraversalValues.length) {
  console.log(preOrderTraversalValues[index].value);
  index++;
}

console.log("***In Order Traversal***");
const inOrderTraversalValues = inOrderTraversal(a);
index = 0;
while (index < inOrderTraversalValues.length) {
  console.log(inOrderTraversalValues[index].value);
  index++;
}

console.log("***Post Order Traversal***");
const postOrderTraversalValues = postOrderTraversal(a);
index = 0;
while (index < postOrderTraversalValues.length) {
  console.log(postOrderTraversalValues[index].value);
  index++;
}

treeIncludes(a, c.value);
