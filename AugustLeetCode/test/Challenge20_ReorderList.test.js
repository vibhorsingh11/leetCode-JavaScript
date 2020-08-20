const reorderList = require("../main/Challenge20_ReorderList");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);

test("it should reorder the list", () => {
  expect(reorderList(list).next.val).toBe(4);
});
