import { useState } from "react";
import BookCreate from "./components /BookCreate"
function App() {

    const [books,setBook] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [ 
            ...books,
            {id : Math.round(Math.random() * 9999),title: title}
        ]
        console.log('Need to add book with:',title);
        // console.log(books);
        setBook(updatedBooks);
    };


    return  <div> 
        {books.length}
        <BookCreate onCreate={createBook} />
         </div>
}
export default App;
