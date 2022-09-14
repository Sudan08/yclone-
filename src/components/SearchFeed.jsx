import {useEffect, useState} from 'react';
import {Box,Typography } from '@mui/material';
import { Videos } from './index';
import { useParams } from 'react-router-dom';

import { fetchAPI } from './utils/fetchAPI';

const SearchFeed = () => {



  const [videos,setVideos] = useState([]);
  const {searchTerm} =useParams();
  console.log(videos);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => {
      setVideos(data.items)})
  },[searchTerm]);
  return (
    <Box p ={4} sx = {{overflowY :'auto'}}>
    <Typography variant = 'h4' fontWeight= 'bold' mb ={2} sx ={{color: 'white',ml:'120px'}}>
      Search Results for: <span style = {{color:'red'}}>{searchTerm}</span> videos
    </Typography>
    <Box display='flex'>
      <Box sx ={{mr:{sm:'100px'}}} />
      <Videos videos={videos} /> 
    </Box>
  </Box>
  )
}

export default SearchFeed

