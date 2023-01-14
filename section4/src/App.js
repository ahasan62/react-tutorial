import { useState } from "react";
function getRandomAnimal(){
  const animals = ['bird','dog','cat','snake','rat','horse','goat'];
  return animals[Math.floor(Math.random() * animals.length)];
}


function App() {
  const [animal,setAnimal] = useState([])
  const handleClick = () => {
    setAnimal([...animal,getRandomAnimal()]);
  };
  return (
    <div >
      <button onClick={handleClick}>Add animal</button>
      <p>Animals to show: {animal}</p>
    </div>
  );
}

export default App;
