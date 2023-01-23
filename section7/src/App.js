import { useEffect, useState } from "react";
import BookCreate from "./components /BookCreate"
import BookList from './components /BookList'
import axios from 'axios'
function App() {

    const [books,setBook] = useState([]);
    const fetchBooks = async() => {
        const response = await axios.get('http://localhost:3001/books')
        setBook(response.data);
    } 
    useEffect(()=>{
        fetchBooks();

    },[]);
    const editBookById = async (id,newTitle) => {
        // const editedBooks = book
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
         title: newTitle,
        });
        console.log(response)
        const updatedBooks = books.map((book) => {
            if (book.id === id){
                return {...book,...response.data};
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
    const createBook = async (title) => {
      const response = await axios.post('http://localhost:3001/books', {
            title
        });
        const updatedBooks = [ 
            ...books,
          response.data
        ];
        // console.log(books);
        setBook(updatedBooks);
    };
    


    return  <div className ="app"> 
        <BookList onEdit = {editBookById} books={books} onDelete={deleteBookById} />
        <BookCreate onCreate={createBook} />
         </div>
}
export default App;
