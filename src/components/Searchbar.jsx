import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper,IconButton, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {

    const [searchTerm,setSearchTerm] = useState('');

    const navigate =useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    };

    return (<Paper
    component='form'
    onSubmit={handleSubmit}
    sx={{
        borderRadius : 20,
        border: '1px solid $e3e3e3', 
        pl: 2,
        boxShadow:'none',
        mt:{xs:2},
        mr:{sm:5},
    }}>
    <Input
    className='search-bar'
    placeholder='Search....' 
    value={searchTerm}
    onChange={(e) =>{setSearchTerm(e.target.value)}}
    />
    <IconButton
        type='submit'
        sx = {{
            color:'red',
            p:'10px'   
        }}
        aria-label ='search'
    >
        <SearchIcon />
    </IconButton>


    </Paper>
    )
}

export default Searchbar