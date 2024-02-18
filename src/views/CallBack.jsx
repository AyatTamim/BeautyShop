import React, { useState } from 'react'
import { useCallback } from 'react';
import CallBtn from './CallBtn';

export default function CallBack() {
    let [counter, setCounter] = useState(0);
    let handleCounter = () => {
        setCounter(counter => counter + 1)
    }

    let oneColor = useCallback(
        handleCounter, []
    )
    return (
        <div className='text-center'>
            <div>CallBack</div>

            <CallBtn clickEvent={oneColor} /> <span>{counter}</span>
        </div>
    )
}
