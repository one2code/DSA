class Node:
    value = None
    next = None
    def __init__(self, value):
        self.value = value
        self.next = None

a = Node("A")
b = Node("B")
c = Node("C")
d = Node("D")

a.next = b
b.next = c
c.next = d
d.next = None

#A -> B -> C -> D -> None

def printLinkedList (head: Node = None):
    current = head
    while current is not None:
        print(current.value)
        current = current.next

printLinkedList(a)