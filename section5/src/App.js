import SearchBar from "./components/SearchBar";
import searchImages from './api'
import ImageList from "./components/ImageList";
import { useState } from 'react';
function App() {
    const [images,setImages] = useState([]);
    const handleSubmit = async(term) => {
        console.log('Do a search with', term)
        const result = await searchImages(term);
        console.log(result);
        setImages(result);
    };

    return ( 
    <div>
        <SearchBar onSubmit = {handleSubmit} />
        <ImageList images={images} />
        
    </div>
    );
}
export default App;
