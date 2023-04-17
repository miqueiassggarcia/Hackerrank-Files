function insertNodeAtHead(head, data) {
    if(head) {
        let auxiliaryPointer = head;
        head = new SinglyLinkedListNode(data, null);
        head.next = auxiliaryPointer;
    } else {
        head = new SinglyLinkedListNode(data, null);
    }
    
    return head;
}
