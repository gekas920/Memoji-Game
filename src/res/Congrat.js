import React from 'react'


function Congrat({onClick,count,log}){
    if(count === 6){
        return (
            <div>
                <congrat>{log}</congrat>
                <button onClick={onClick}>Try again!</button>
            </div>
        )
    }
    else {
        return <div></div>
    }
}

export default Congrat