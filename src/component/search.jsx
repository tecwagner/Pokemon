// /* eslint-disable react/jsx-no-undef */
import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';

import '../page/styled.css'

// render
const Search = () => (
    // <div className="Search">
    //     <div className="SearchIcon">
    //         <SearchIcon />
    //     </div>
    //     <InputBase
    //         placeholder="Search…"
    //     //   classes={{
    //     //     root: inputRoot,
    //     //     input: inputInput,
    //     //   }}
    //     //   inputProps={{ 'aria-label': 'search' }}
    //     />
    // </div>
    <TextField className='Search'
        label='Pesquisar'
        InputProps={{
            endAdornment: (
                <InputAdornment>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
            )
        }}
    />
)

export default Search