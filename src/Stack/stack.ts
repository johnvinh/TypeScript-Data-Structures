import {StackItem} from "./stack_item";

export class Stack
{
    private _top: StackItem;

    constructor(value?: number)
    {
        if (value)
            this._top = new StackItem(value);
        else
            this._top = null;
    }

    push(value: number): void
    {
        const oldTop: StackItem = this._top;
        this._top = new StackItem(value);
        this._top.setPrevious = oldTop;
    }

    pop(): StackItem
    {
        const oldTop: StackItem = this._top;
        this._top = oldTop.previous;
        return oldTop;
    }

    peek(): StackItem
    {
        return this._top;
    }
}