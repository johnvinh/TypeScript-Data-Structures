'use strict';

class QueueItem
{
    private _previous: QueueItem;
    private _value: number;

    constructor(value: number)
    {
        this._value = value;
        this._previous = null;
    }

    get getPrevious(): QueueItem
    {
        return this._previous;
    }

    get getValue(): number
    {
        return this._value;
    }

    set previous(next: QueueItem)
    {
        this._previous = next;
    }

    set value(value: number)
    {
        this._value = value;
    }
}