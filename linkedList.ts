class LinkedNode {
value: string;
	next: LinkedNode | null;
	constructor(value: string) {
	  this.value = value;
	  this.next = null;
	}
  }
  
  const a = new LinkedNode("A");
  const b = new LinkedNode("B");
  const c = new LinkedNode("C");
  const d = new LinkedNode("D");
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = null;
  
  // A -> B -> C -> D -> null
  
  const printLinkedList = (head: LinkedNode | null) => {
	let current = head;
	while (current != null) {
	  console.log(current.value);
	  current = current.next;
	}
  };
  
  printLinkedList(a);
