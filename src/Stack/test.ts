import {Stack} from "./stack";

(() =>
{
    const myStack: Stack = new Stack(1);
    console.log(myStack.peek());
    myStack.push(2);
    console.log(myStack.peek());
})();