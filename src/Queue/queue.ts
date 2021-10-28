import {QueueItem} from "./queue_item";

export class Queue
{
    private front: QueueItem;
    private back: QueueItem;

    constructor()
    {
        this.front = null;
        this.back = null;
    }

    enqueue(value: number): void
    {
        const newItem = new QueueItem(value);
        // no items in queue
        if (!this.front && !this.back) {
            this.front = newItem;
            this.back = newItem;
        }
        // items in queue
        else {
            this.back.setPrevious = newItem;
            newItem.setNext = this.back;
            this.back = newItem;
        }
    }

    dequeue(): QueueItem
    {
        // one item in queue
        if (this.front === this.back) {
            const front: QueueItem = this.front;
            this.front = null;
            this.back = null;
            return front;
        }
        // more than one item in queue
        else {
            const oldFront: QueueItem = this.front;
            this.front = oldFront.previous;
            this.front.setNext = null;
            return oldFront;
        }
    }
}