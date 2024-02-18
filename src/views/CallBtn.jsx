import React from 'react'

function CallBtn({ clickEvent, childern }) {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return (
        <div className='text-center'>
            <button style={{ backgroundColor: randomColor }} onClick={clickEvent}>+</button>
        </div>
    )
}
export default React.memo(CallBtn)