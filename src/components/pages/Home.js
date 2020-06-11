import React from 'react';
import '../../App.css';
import Modal from '../Modal';

const movies = [
  {
    title: "The Poseidon Adventure",
    overview: "The Poseidon Adventure was one of the first Catastrophe films and began the Disaster Film genre. Director Neame tells the story of a group of people that must fight for their lives aboard a sinking ship. Based on the novel by Paul Gallico.",
    release_date: "1972-12-13",
    path: "./images/Poseidon.jpg"
  },
  {
    title: "Fight Club",
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground 'fight clubs' forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    release_date: "1999-10-15",
    path: "./images/FightClub.jpg"
  },
  {
    title: "Mad Max: Fury Road",
    overview: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
    release_date: "2015-05-13",
    path: "./images/MadMax.jpg"
  },
  {
    title: "Terminator Salvation",
    overview: "All grown up in post-apocalyptic 2018, John Connor must lead the resistance of humans against the increasingly dominating militaristic robots. But when Marcus Wright appears, his existence confuses the mission as Connor tries to determine whether Wright has come from the future or the past -- and whether he’s friend or foe.",
    release_date: "2009-05-20",
    path: "./images/TerminatorS.jpg"
  },
  {
    title: "Mr. Nobody",
    overview: "Nemo Nobody leads an ordinary existence with his wife and 3 children; one day, he wakes up as a mortal centenarian in the year 2092.",
    release_date: "2009-11-06",
    path: "./images/Nobody.jpg"
  },
  {
    title: "John Wick: Chapter 3 - Parabellum",
    overview: "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
    release_date: "2019-05-15",
    path: "./images/John3.jpg"
  }
]

const Home = () => {
  return (
    <div className="container hom">
      <ul className="container-fluid hom">
        {movies.map(item => (<Modal title={item.title} content={item.overview} date={item.release_date} image={item.path} />))}
        {movies.map(item => (<Modal title={item.title} content={item.overview} date={item.release_date} image={item.path} />))}
        {movies.map(item => (<Modal title={item.title} content={item.overview} date={item.release_date} image={item.path} />))}
        {movies.map(item => (<Modal title={item.title} content={item.overview} date={item.release_date} image={item.path} />))}

      </ul>
    </div>
  );
}

export default Home;

/*
*/