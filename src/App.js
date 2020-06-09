import React from 'react';
import './App.css';
import Modal from './components/Modal';


function App() {
    return (
        <div className="container main">
            <h2>Movies Diary Beta</h2>
            <ul>
                <Modal title="The Poseidon Adventure" content="The Poseidon Adventure was one of the first Catastrophe films and began the Disaster Film genre. Director Neame tells the story of a group of people that must fight for their lives aboard a sinking ship. Based on the novel by Paul Gallico." />
                <Modal title="Fight Club" content="A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground 'fight clubs' forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion."/>
                <Modal title="Mad Max" content="An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order." />
                <Modal title="Terminator Salvation" content="All grown up in post-apocalyptic 2018, John Connor must lead the resistance of humans against the increasingly dominating militaristic robots. But when Marcus Wright appears, his existence confuses the mission as Connor tries to determine whether Wright has come from the future or the past -- and whether he's friend or foe." />
            </ul>
            
        </div>
    );
};

export default App;