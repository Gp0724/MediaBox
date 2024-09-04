//contains sidebar and the videofeed
import React from 'react';
import {useState,useEffect} from 'react';
import { Box,Stack,Typography} from '@mui/material';
import SearchFeed from './SearchFeed';


const Feed = () => {
  return (
    <Stack sx={{ flexDirection: {sx:"column",md: "row"} }}>
      <Box sx={{ height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px:{ sx: 0 ,md:2 } }}>
        Sidebar
        {/* //compnent used for all text elements instead of p tags and header */}
        <Typography className="copyright" variant='body2' sx={{ mt:1.5, color:"#fff"}}>
          Copyright 2024 Diamond
        </Typography>
        <SearchFeed/> 
      </Box>
    </Stack>
  )
}

export default Feed
