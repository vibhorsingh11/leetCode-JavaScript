const deleteNode = require("../main/Challenge31_DeleteNodeInBST");

function TreeNode(val) {
  this.val = val === undefined ? 0 : val;
  this.left === undefined ? null : left;
  this.right === undefined ? null : right;
}

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);

test("it should remove node value 3", () => {
  expect(deleteNode(root, 3).left.val).toBe(4);
});
