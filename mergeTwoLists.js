class LinkedListNode{
    constructor(val , next){
        this.val = val
        this.next = null
    }
}

function mergeTwoLists(l1 , l2){
    let dummy = new LinkedListNode(-1)
    let current = dummy

    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            current.next = l1
            l1 = l1.next
        }else{
            current.next = l2
            l2 = l2.next
        }

        current = current.next
    }
    current.next = l1 !== null ? l1 : l2
    return dummy.next
}

let l1 = new LinkedListNode(2)
l1.next = new LinkedListNode(5)
l1.next.next = new LinkedListNode(10)

let l2 = new LinkedListNode(1)
l2.next = new LinkedListNode(9)
l2.next.next = new LinkedListNode(14)

let mergeLists = mergeTwoLists(l1, l2)

while(mergeLists !== null){
    console.log(mergeLists.val)
    mergeLists = mergeLists.next
}