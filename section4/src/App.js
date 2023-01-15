import { useState } from "react";
import AnimalShow from "./AnimalShow";
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
    <div >
      <button onClick={handleClick}>Add animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
