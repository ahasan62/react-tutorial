import BookShow from './BookShow'
function BookList({books, onDelete,onEdit}) {
    const renderedBooks  =books.map((book) => {
        return <BookShow onDelete={onDelete} key={book.id} book ={book} onEdit={onEdit}/>;
    });

    return  <div className = "book-list"> {renderedBooks}</div>;
}
export default BookList;
