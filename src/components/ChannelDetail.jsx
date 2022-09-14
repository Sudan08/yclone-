import {useEffect , useState}from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'

import {Videos, ChannelCard} from './'
import { fetchAPI } from './utils/fetchAPI'
import { Feed } from '@mui/icons-material'


const ChannelDetail = () => { 

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos,setVideo] = useState([]);

  const  {id} = useParams();
  console.log(id);



  useEffect(()=>{
    fetchAPI(`channels?part=snippet&id=${id}`)
    .then((data) => {console.log(data)
      setChannelDetail(data?.items[0])});
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => {
      setVideo(data?.items)});
  },[id]);
  return (
    <Box minHeight='95vh'>
      <Box>
        <div className='channel-background' />
        {console.log(channelDetail)}
        <ChannelCard channelDetail={channelDetail} marginTop ='-165px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}} />
        <Videos videos={videos}/>
        
      </Box>
    </Box>
  )
}

export default ChannelDetail