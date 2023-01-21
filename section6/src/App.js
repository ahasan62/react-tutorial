import { useState } from "react";
import BookCreate from "./components /BookCreate"
function App() {

    const [books,setBook] = useState([]);

    const createBook = (title) => {
        console.log('Need to add book with:',title);
    };


    return  <div> 
        <BookCreate onCreate={createBook} />
         </div>
}
export default App;
