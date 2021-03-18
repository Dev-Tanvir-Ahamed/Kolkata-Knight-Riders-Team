import logo from './logo.svg';
import './App.css';
import './components/Players/Player.css';
import Allplayer from './playerData/playerDetails.json'
import { useEffect, useState } from 'react';
import Player from './components/Players/Player';
import ClubPlayers from './components/Clubplayers/ClubPlayers';


function App() {
  let [player, setPlayer] = useState([])
  let [addPlayers, setAddPlayer] = useState([])
  useEffect(() => {
    setPlayer(Allplayer);
    console.log(Allplayer);
  },[])



  let handlePlayer = (player) => {
    console.log('added', player);
    let newAddPlayers = [...addPlayers, player]
    setAddPlayer(newAddPlayers)
  }
  return (
    <div className="App">
      <h1>Kolkata Knight Riders Team Players</h1>
      <ClubPlayers addPlayers={addPlayers}></ClubPlayers>
      <ul>
        {
          Allplayer.map(player => <Player player={player} handlePlayer={handlePlayer}></Player>)
        }
      </ul>
    </div>
  );
}

export default App;
