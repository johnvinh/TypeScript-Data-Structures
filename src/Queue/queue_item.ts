'use strict';

class QueueItem
{
    private _previous: QueueItem;
    private _next: QueueItem;
    private _value: number;

    constructor(value: number)
    {
        this._value = value;
        this._previous = null;
        this._next = null;
    }

    get getPrevious(): QueueItem
    {
        return this._previous;
    }

    get getValue(): number
    {
        return this._value;
    }

    get getNext(): QueueItem
    {
        return this._next;
    }

    set previous(previous: QueueItem)
    {
        this._previous = previous;
    }

    set value(value: number)
    {
        this._value = value;
    }

    set setNext(next: QueueItem)
    {
        this._next = next;
    }
}