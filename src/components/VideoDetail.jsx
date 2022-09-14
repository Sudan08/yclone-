import {useState,useEffect} from 'react';
import {Link , useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Box , Typography , Stack} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {Videos} from './index';
import { fetchAPI } from './utils/fetchAPI';


const VideoDetail = () =>{

  const [videos,setVideos] = useState([]);
  const [videoDetail,setVideoDetail] = useState(null);
  const {id} = useParams();


  useEffect(()=>{
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0])) 

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>setVideos(data.items))

  },[id]);

  if(!videoDetail?.snippet) return 'Loading...';
  const {snippet:{title ,channelId ,channelTitle},statistics : {viewCount,likeCount}} =videoDetail


  return (
    <Box minHeight='95vh'>
      <Stack direction={{sx:'column' , md :'row'}}>
        <Box flex={1}>
          <Box
          sx={{width:'100%' , position :'sticky' ,top:'86px'}}>
            <ReactPlayer url={`www.youtube.com/watch?v=${id}`}
            className='react-player' controls/>
          <Typography sx={{color:'white' ,p:2}}>
          {title}
          </Typography>
          <Stack direction = "row" justifyContent={'space-between'} sx={{color:'white'}} py='1' px='2'>
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{sm:'subtitle1',md:'h6'}} sx={{p:2,color:'white'}}>
                {channelTitle}
                <CheckCircle sx={{fontSize:'12px', color:'grey', ml:'5px'}} />
              </Typography>
            </Link>
            <Stack direction = 'row' gap='20px' alignItem='center' sx={{px:2}}>
              <Typography variant='body1'>
                {parseInt(viewCount).toLocaleString()} Views
              </Typography>
              <Typography variant='body1'>
                {parseInt(likeCount).toLocaleString()} Likes
              </Typography>
            </Stack>


          </Stack>
          </Box>
        </Box>
      </Stack>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} my='40px'>
      <Box sx ={{mr:{sm:'100px'}}} />
        <Videos videos={videos} />
      </Box>
     
    </Box>
  )
}

export default VideoDetail