function insertNodeAtTail(head, data) {
    let auxiliaryPointer = head;
    if(head) {
        while(auxiliaryPointer.next != null) {
            auxiliaryPointer = auxiliaryPointer.next;
        }    
        
        auxiliaryPointer.next = new SinglyLinkedListNode(data, null);
    } else {
        head = new SinglyLinkedListNode(data, null);
    }
    
    return head;
}