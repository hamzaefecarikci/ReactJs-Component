import 'bulma/css/bulma.css';
import './App.css';
import GOW from './images/godofwar.jpg';
import RDR from './images/rdr2.jpg';
import Apex from './images/apexlegends.jpeg';
import CS from './images/cs2.jpg';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <section class="hero is-warning mb-6">
        <div class="hero-body">
          <p class="subtitle is-1">Games</p>
        </div>
      </section>
      <div className="container">
        <div className="columns">

          <div className="column">
            <Game
            image={GOW}
            name="God of War"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores suscipit aut officiis voluptate, error ratione repudiandae maxime vero velit dignissimos. Qui ab aspernatur vel officiis expedita dolorem, minima similique dignissimos." />
          </div>

          <div className="column">
            <Game
            image={RDR}
            name="Red Dead Redemption"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores suscipit aut officiis voluptate, error ratione repudiandae maxime vero velit dignissimos. Qui ab aspernatur vel officiis expedita dolorem, minima similique dignissimos." />

          </div>

          <div className="column">
            <Game
            image={Apex}
            name="Apex Legends"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores suscipit aut officiis voluptate, error ratione repudiandae maxime vero velit dignissimos. Qui ab aspernatur vel officiis expedita dolorem, minima similique dignissimos." />
          </div>

          <div className="column">
            <Game
            image={CS}
            name="Counter Strike"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores suscipit aut officiis voluptate, error ratione repudiandae maxime vero velit dignissimos. Qui ab aspernatur vel officiis expedita dolorem, minima similique dignissimos." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
