import { useState } from "react";
import BookCreate from "./components /BookCreate"
import BookList from './components /BookList'
function App() {

    const [books,setBook] = useState([]);

    const editBookById = (id,newTitle) => {
        // const editedBooks = book
        const updatedBooks = books.map((book) => {
            if (book.id === id){
                return {...book,title:newTitle};
            }
            return book
        })
        setBook(updatedBooks);
    }
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBook(updatedBooks);
    }
    const createBook = (title) => {
        const updatedBooks = [ 
            ...books,
            {id : Math.round(Math.random() * 9999),title: title}
        ]
        console.log('Need to add book with:',title);
        // console.log(books);
        setBook(updatedBooks);
    };


    return  <div className ="app"> 
        <BookList onEdit = {editBookById} books={books} onDelete={deleteBookById} />
        <BookCreate onCreate={createBook} />
         </div>
}
export default App;
