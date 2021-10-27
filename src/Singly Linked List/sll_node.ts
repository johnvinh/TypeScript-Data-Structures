'use strict';

export class SLLNode
{
    private _value: number;
    private _next: SLLNode;

    constructor(value: number)
    {
        this._value = value;
        this._next = null;
    }

    set setNext(next: SLLNode)
    {
        this._next = next;
    }

    get value(): number
    {
        return this._value;
    }

    get next(): SLLNode
    {
        return this._next;
    }
}