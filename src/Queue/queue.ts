'use strict';

class Queue
{
    private _front: QueueItem;
    private _back: QueueItem;

    constructor()
    {
        this._front = null;
        this._back = null;
    }

    set setFront(front: QueueItem)
    {
        this._front = front;
    }

    set setBack(back: QueueItem)
    {
        this._back = back;
    }

    get back(): QueueItem
    {
        return this._back;
    }

    get front(): QueueItem
    {
        return this._front;
    }

    enqueue(value: number): void
    {
        const newItem: QueueItem = new QueueItem(value);
        // new item should be both front and back if the queue is empty
        if (!this._front && !this._back) {
            this._front = newItem;
            this._back = newItem;
        }
        else
            this._back = newItem;
    }

    dequeue(): QueueItem
    {
        const oldFront: QueueItem = this._front;
        this._front = this._front.previous;
        return oldFront;
    }
}