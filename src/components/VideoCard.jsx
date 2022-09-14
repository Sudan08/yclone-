
import {Link} from 'react-router-dom';
import {Card , Typography ,CardContent , CardMedia} from '@mui/material'
import {CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl , demoVideoUrl , demoVideoTitle ,demoChannelTitle ,demoChannelUrl} from './utils/constants';

const VideoCard = ({video : {id : {videoId},snippet}}) => {
  return (
    <Card sx={{width:{md:'300px', xs:'100%', boxShadow:'none', borderRadius : '0'}}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia 
            alt = {snippet?.title}
            sx ={{width : 358 , height:165}}
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}/>
        </Link>
        <CardContent 
        sx ={{backgroundColor: '#1e1e1e' ,height : '106px'}}
        >
         <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <Typography
            variant='subtitle1'
            sx ={{color: 'white'}}>
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
         <Link to={snippet?.channelId ?  `/channel/${snippet?.channelId}`: demoChannelUrl}>
            <Typography
            variant='subtitle2'
            sx ={{color: '#ab2727'}}>
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle 
                sx ={{fontSize:12,color : 'gray', ml:1}}/>

            </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard