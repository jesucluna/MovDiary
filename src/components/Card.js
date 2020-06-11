import React from 'react';
import '../App.css';

const Card = (props) => {
    return (
        <div className="row">
            <div className="col limage">
                <img className="small" src={process.env.PUBLIC_URL + props.poster}  alt={props.name}/>
            </div>
            <div className="col-9 ltitle">
                <p className="standardtitle">{props.name}</p>
            </div>
        </div>
    );
}

export default Card;