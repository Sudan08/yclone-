import React from 'react'

import {Box,CardContent,CardMedia , Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Link} from 'react-router-dom';
import { demoChannelUrl, demoProfilePicture } from './utils/constants';


const ChannelCard = ({channelDetail ,marginTop}) => {
  console.log(channelDetail)
  return (
    <Box
    sx ={{
      boxShadow :'none',
      borderRadius :'20px',
      display : 'flex',
      justifyContent : 'center',
      alignItems: 'center',
      width : {xs:'356px', md : '320px'},
      height:'326px',
      margin : 'auto',
      marginTop
    }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent
          sx={{display : 'flex' , flexDirection :'column' , justifyContent:'center', color: '#fff'}}
          >
            <CardMedia
            image ={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
            alt = {channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height:'180px' , width : '180px'
            ,mb:'2' , border: '1px solid'}}/>
         
          </CardContent>
        
        </Link>
        <Link to={channelDetail?.id?.channelId ? `/channel/${channelDetail?.id}` : demoChannelUrl}>
          <Typography 
          sx={{color:'white', 
          backgroundColor:'black',
          p:'12px',
          variant: 'h6'}}>
             {channelDetail?.snippet?.title}
             <CheckCircle sx={{fontSize : 14 , ml:'5px' , color:'#808080'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography  
            sx={{color:'#808080' ,fontSize:'12px', fontWeight:'500' , p:'12px',}}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )} 
        </Link>
    </Box>
  )
}

export default ChannelCard