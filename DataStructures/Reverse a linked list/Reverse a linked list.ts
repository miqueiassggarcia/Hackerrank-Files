function reverse(llist: SinglyLinkedListNode): SinglyLinkedListNode {
    let reverseResult:number[] = [];
    
    if(llist) {
        while(llist) {
            reverseResult.push(llist.data);
            llist = llist.next
        }
    }
    
    let reverseLlist:SinglyLinkedList = new SinglyLinkedList();
    reverseLlist.insertNode(reverseResult.pop());
    let auxiliar:SinglyLinkedListNode = reverseLlist.head;
    while(reverseResult.length > 0) {
        auxiliar.next = new SinglyLinkedListNode(reverseResult.pop());
        auxiliar = auxiliar.next;
    }
    
    return reverseLlist.head;
}