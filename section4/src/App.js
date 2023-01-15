import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css'
function getRandomAnimal(){
  const animals = ['bird','dog','cat','snake','rat','horse','goat'];
  return animals[Math.floor(Math.random() * animals.length)];
}


function App() {
  const [animal,setAnimal] = useState([])
  const handleClick = () => {
    setAnimal([...animal,getRandomAnimal()]);
  };

  const renderedAnimals = animal.map((animal,index) => {
    return <AnimalShow type={animal} key={index}/>
  })
  return (
    <div className="app" >
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
