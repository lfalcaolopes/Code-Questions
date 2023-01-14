var addTwoNumbers = function (l1, l2) {
  let carry = 0;

  var List = new ListNode(0);
  var head = List;

  let v1 = l1.val;
  let v2 = l2.val;

  while (l1 || l2 || carry !== 0) {
    if (l1) {
      v1 = l1.val;
      l1 = l1.next;
    } else v1 = 0;

    if (l2) {
      v2 = l2.val;
      l2 = l2.next;
    } else v2 = 0;

    const sum = (v1 + v2 + carry) % 10;

    List.next = new ListNode(sum);
    List = List.next;

    carry = Math.floor((v2 + v1 + carry) / 10);
  }

  List.next = null;

  return head.next;
};
