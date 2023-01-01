class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function depthFirstValues(root) {
  var stack = [root];
  var values = [];

  while (stack.length > 0) {
    var current = stack.pop();
    values.push(current.value);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return values;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");
const j = new Node("j");
const k = new Node("k");
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

// console.log(a.value);
console.log(depthFirstValues(a));
