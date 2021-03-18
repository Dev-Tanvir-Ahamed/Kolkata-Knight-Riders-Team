import React from 'react';

const ClubPlayers = (props) => {
    let addPlayers = props.addPlayers
    let addClub = addPlayers.reduce((stayPlayer, player) =>stayPlayer + player.sold, 0)
    let addPlayerName = addPlayers.reduce((playerName, player) => playerName +player.name + ',' + ' ' ,'')
    return (
        <div>
            <h2>Add For Club : {addPlayers.length}</h2>
            <p>Player Name : {addPlayerName}</p>
            <p>Add All Players salary : {addClub +  ' ' + 'core'}</p>
        </div>
    );
};

export default ClubPlayers;