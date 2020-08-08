const pathSum = require("../main/Challenge08_PathSumIII");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(3);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(-2);
root.right = new TreeNode(-3);
root.right.right = new TreeNode(11);

test("it should be 3", () => {
  expect(pathSum(root, 8)).toBe(3);
});
