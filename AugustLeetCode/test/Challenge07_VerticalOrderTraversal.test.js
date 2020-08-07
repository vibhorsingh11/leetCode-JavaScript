const verticalTraversal = require("../main/Challenge07_VerticalOrderTraversal");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

test("it should give output as [[9],[3,15],[20],[7]]", () => {
  const res = verticalTraversal(root);
  expect(res).toEqual([[9], [3, 15], [20], [7]]);
});
