var LinkedNode = /** @class */ (function () {
    function LinkedNode(value) {
        this.value = value;
        this.next = null;
    }
    return LinkedNode;
}());
var a = new LinkedNode("A");
var b = new LinkedNode("B");
var c = new LinkedNode("C");
var d = new LinkedNode("D");
a.next = b;
b.next = c;
c.next = d;
d.next = null;
// A -> B -> C -> D -> null
var printLinkedList = function (head) {
    var current = head;
    while (current != null) {
        console.log(current.value);
        current = current.next;
    }
};
printLinkedList(a);
