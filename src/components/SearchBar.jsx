import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
const SearchBar = () => {
  return (
    //a div with white bg and an elevation
    <Paper 
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        paddingLeft:2,
        boxShadow: 'none',
        marginRight: {sm:5}//only for small devices
      }}
     >
        <input className="search-bar"
               placeholder="Search..."
               value=""
               onChange={()=>{}}
        />
        <IconButton type='submit' sx={{ p:'10px' , color:'red'}}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar
