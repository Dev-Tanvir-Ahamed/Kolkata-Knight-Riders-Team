import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Player = (props) => {
    let {name, country, type, playerImg, sold} = props.player;
    let handlePlayer = props.handlePlayer
    return (
        <div className="plyers">
            
            <img src={playerImg} alt=""/>
            <h3>Player Name : {name}</h3>
            <h5>Country : {country}</h5>
            <h6>Type : {type}</h6>
            <p>Sold : {sold + ' ' + 'core'}</p>
            <button className="btn btn-success"onClick={() => handlePlayer(props.player)}><FontAwesomeIcon icon={faCoffee} />Add players</button>
        </div>
    );
};

export default Player;