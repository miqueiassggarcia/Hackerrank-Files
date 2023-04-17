function deleteNode(llist, position) {
    if(llist) {
        if(position == 0) {
            let auxiliaryPointer = llist;
            llist = llist.next;
            auxiliaryPointer = null;
        } else {        
            let auxiliaryPointer = llist;
            let posteriorAuxiliaryPointer = llist.next;
            let count = 1;
            while(posteriorAuxiliaryPointer != null) {
                if(count == position) {
                    auxiliaryPointer.next = posteriorAuxiliaryPointer.next;
                    posteriorAuxiliaryPointer = null;
                } else {
                    auxiliaryPointer = posteriorAuxiliaryPointer;
                    posteriorAuxiliaryPointer = posteriorAuxiliaryPointer.next;
                    count++;
                }
            }
        }
        return llist;
    }
}