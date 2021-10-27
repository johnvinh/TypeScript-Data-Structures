export class StackItem
{
    private _value: number;
    private _previous: StackItem;

    constructor(value: number)
    {
        this._value = value;
        this._previous = null;
    }

    get previous(): StackItem
    {
        return this._previous;
    }

    set setPrevious(newPrevious: StackItem)
    {
        this._previous = newPrevious;
    }
}