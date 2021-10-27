import {SLLNode} from "./sll_node";

export class SinglyLinkedList
{
    private head: SLLNode;

    constructor(value: number)
    {
        this.head = new SLLNode(value);
    }

    print(): void
    {
        let current: SLLNode = this.head;
        // Run through our list until we reach the end
        while (current.next !== null) {
            console.log(current.value);
            current = current.next;
        }
        // When we've reached the end, output the last value (there's probably a better way to do this)
        console.log(current.value);
    }

    insert(value: number): void
    {
        let current: SLLNode = this.head;
        // Run through our list until we reach the end
        while (current.next !== null)
            current = current.next;
        // When the current node has no next pointer, we know we reached the end and can insert our new value
        current.setNext = new SLLNode(value);
    }

    delete(value: number): void
    {
        let current: SLLNode = this.head;
        // Run through our list until we reach the end or we find the number we want to delete
        while (current.next !== null) {
            // Peek ahead instead of checking the current value
            if (current.next.value === value) {
                // To delete, our current element's next pointer should point to the next pointer of the next element
                if (current.next.next !== null)
                    current.setNext = current.next.next;
                else
                    current.setNext = null;
                break;
            }
            current = current.next;
        }
    }
}