import React from 'react'





function Card({num,onClick,img,inf}) {

    return(
        <card  id = {num} onClick = {onClick} dataPic={inf}>
            <div className="front"></div>
            <img className="back" src={img} alt={inf}/>
        </card>
    )
}


export default Card