import {SinglyLinkedList} from "./singly_linked_list";

(() =>
{
    let sll = new SinglyLinkedList(1);
    sll.insert(2);
    sll.insert(3);
    sll.insert(4);
    sll.delete(3);
    sll.insert(7);
    sll.insert(10);
    sll.delete(7);
    sll.print();
})();