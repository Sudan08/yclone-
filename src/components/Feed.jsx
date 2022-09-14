import {useEffect, useState} from 'react';
import {Box, Stack , Typography } from '@mui/material';
import {Sidebar , Videos } from './index';

import { fetchAPI } from './utils/fetchAPI';

const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([]);


  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setVideos(data.items)})
  },[selectedCategory]);
  return (
    <Stack sx={{flexDirection : {sx:'column' , md:'row'}}}>
      <Box postion ='sticky' 
      sx={{height : {sx:'auto' , md: '92vh'},
      borderRight : '1px solid #3d3d3d' ,px:{sx:'0',md:'2'},
      mx:{sx:'0',md:'2'}
      }}>
        <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory ={setSelectedCategory}
        >

        </Sidebar>
        <Typography className = 'copyright' variant='body2'
        sx = {{mt:5, color:'#fff', px :2}}>
              Copyright 2022 Sudan Shakya
        </Typography>
      </Box>
      <Box p ={4} sx = {{overflowY :'auto'}} height='95vh'>
        <Typography variant = 'h4' fontWeight= 'bold' mb ={2} sx ={{color: 'white'}}>
          {selectedCategory}<span style = {{color:'red'}}> Videos</span>
        </Typography>
        <Videos videos={videos} /> 
      </Box>
    </Stack>
  )
}

export default Feed

