import logo from './logo.svg';
import './App.css';
import App2 from './App2';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");

  const nameSet =(event) => {
    console.log(event);
    setName(event.target.value)
  }

  return (
    <div>
    <input onChange={nameSet}></input>
    <App2 name={name}/>
    </div>
  );
}

export default App;
