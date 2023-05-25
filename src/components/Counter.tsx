import React from 'react';
import Button from "./Button";

interface ICounter {
    id: number;
    value: number;
    buttons: number[]
}

interface IProps {
    counter: ICounter
    plus:(id:number, buttonValue: number) => void
}

const Counter = (props: IProps) => {
    return (
        <div
        style={{margin:10}}>
            <b>{props.counter.value}</b>
            {props.counter.buttons.map((button, index) =>
            <Button key={index} button={button} plus={props.plus} id={props.counter.id}/>
            )}
        </div>
    );
};

export default Counter;