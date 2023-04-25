function reverse(llist) {
    let reverseResult = [];
    
    if(llist) {
        while(llist != null) {
            reverseResult.push(llist.data);
            llist = llist.next
        }
    }
    
    let reverseLlist = new SinglyLinkedList();
    reverseLlist.insertNode(reverseResult.pop());
    let auxiliar = reverseLlist.head;
    while(reverseResult.length > 0) {
        auxiliar.next = new SinglyLinkedListNode(reverseResult.pop());
        auxiliar = auxiliar.next;
    }

    return reverseLlist.head;
}