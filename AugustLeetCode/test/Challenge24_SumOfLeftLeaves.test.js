const sumOfLeftLeaves = require("../main/Challenge24_SumOfLeftLeaves");

function TreeNode(val) {
  this.val = val === undefined ? 0 : val;
  this.left === undefined ? null : left;
  this.right === undefined ? null : right;
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

test("sum should be 24 for left leaves", () => {
  expect(sumOfLeftLeaves(root)).toBe(24);
});
