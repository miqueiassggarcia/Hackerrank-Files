function insertNodeAtPosition(llist, data, position) {
  if(llist) {
      if(position == 0) {
          let auxiliaryPointer = llist;
          llist = new SinglyLinkedListNode(data, auxiliaryPointer)
      } else {
          let auxiliaryPointer = llist;
          let posteriorAuxiliaryPointer = llist.next;
          let count = 1;
          while(posteriorAuxiliaryPointer != null) {
              if(count == position) {
                  let node = new SinglyLinkedListNode(data, null);
                  node.next = posteriorAuxiliaryPointer;
                  auxiliaryPointer.next = node;
              }
              auxiliaryPointer = posteriorAuxiliaryPointer;
              posteriorAuxiliaryPointer = posteriorAuxiliaryPointer.next;
              count++;
          }
      }
      
    return llist;
  }
}