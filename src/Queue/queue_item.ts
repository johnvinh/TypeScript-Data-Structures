export class QueueItem
{
    private _next: QueueItem;
    private _previous: QueueItem;
    private _value: number;

    constructor(value: number)
    {
        this._value = value;
        this._next = null;
        this._previous = null;
    }

    get next(): QueueItem
    {
        return this._next;
    }

    get previous(): QueueItem
    {
        return this._previous;
    }

    get value(): number
    {
        return this._value;
    }

    set setNext(next: QueueItem)
    {
        this._next = next;
    }

    set setPrevious(previous: QueueItem)
    {
        this._previous = previous;
    }
}