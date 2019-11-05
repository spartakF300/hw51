import React from 'react';
const Card = (props)=> (
    <div className="card">

        <h3><span className="title_name">Название: </span>{props.name}</h3>

        <p>Год: {props.age}</p>
        <img src={props.img} alt=""/>
    </div>
);
export default Card