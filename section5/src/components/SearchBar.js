import { useState } from 'react';
import './SearchBar.css'

function SearchBar(props) { 
    const [term, setTerm] = useState('');


    const handleFormSubmit = (event) => { 
        event.preventDefault();    
        props.onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);


    };
return ( <div className='search-bar'>
        <form  onSubmit = {handleFormSubmit}>
        <input  value={term} onChange = {handleChange}/>
        </form>
        </div>
);
}

export default SearchBar;
