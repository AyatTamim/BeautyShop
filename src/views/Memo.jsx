import React, { useMemo, useState } from 'react'

export default function Memo() {
    let [firstName, setFirstName] = useState();
    let [lastName, setLastName] = useState();
    let [Age, setAge] = useState();

    let handlefirstName = (ev) => {
        setFirstName(ev.target.value)
    }

    let handlelastName = (ev) => {
        setLastName(ev.target.value)
    }

    let handleAge = (ev) => {
        setAge(ev.target.value)
    }

    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let fullName = useMemo(
        () => (
            <h3 style={{ color: randomColor }}>{firstName + lastName}</h3>
        ), [firstName, lastName]
    )
    return (
        <>
            <div>Memo
                <h3>{firstName}</h3>
                <h3>{lastName}</h3>
                <h3>{Age}</h3>
                <input type='text' onChange={handlefirstName}></input>
                <input type='text' onChange={handlelastName}></input>
                <input type='number' onChange={handleAge}></input>
                <h3>Full name is: {fullName}</h3>
            </div>
        </>


    )
}
