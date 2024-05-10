class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    isEmpty(){
        return this.length === 0
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.length++
    }

    prepand(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node 
            this.tail = node 
        } else {
            let current = this.head
            while(current.next !== null){
                current = current.next
            }
            current.next = node
            this.tail = node
        }
        this.length++
    }

    print(){
        if(this.isEmpty()){
            return null
        }
    
        let current = this.head
        let result = ''
        while(current !== null){
            result += current.value + ' '
            current = current.next
        }
        console.log(result) 
        return result.trim() 
    }
    
    
} 

const abc = new LinkedList()

abc.append(5)
abc.prepand(10)
abc.append(61)
abc.prepand(100)

abc.print()