import useState from 'react';


function SearchBar(props) { 
    const [term, setTerm] = useState('');


    const handleFormSubmit = (event) => { 
        event.preventDefault();    
        props.onSubmit(

            document.querySelector('input').value
        );
    }

    const handleChange = () => {}
return ( <div>
        <form onSubmit = {handleFormSubmit}>
        <input onChange = {handleChange}/>
        </form>
        </div>
);
}

export default SearchBar;
