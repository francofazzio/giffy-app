import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route} from "wouter"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/harrystyles'>Gifs de harry styles</Link>
        <Link to='/gif/ricky'>Gifs de ricky</Link>
        <Link to='/gif/deportes'>Gifs de deportes</Link>
        <Link to='/gif/los simpsons'>Gifs de los simpsons </Link>

        <Route 
        component={ListOfGifs}
        path='/gif/:keyword ' />
      </section>
    </div>
  )
}
//en la keyword donde dice rick puedo cambiar a los quensea

export default App;
