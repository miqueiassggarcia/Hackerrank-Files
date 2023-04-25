function reversePrint(llist) {
    let reverseResult = [];
    
    if(llist) {
        while(llist != null) {
            reverseResult.push(llist.data);
            llist = llist.next;
        }
    }
    
    while(reverseResult.length > 0) {
        console.log(reverseResult.pop())
    }
}