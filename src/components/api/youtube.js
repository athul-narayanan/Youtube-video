import axios from 'axios';

const KEY = 'AIzaSyAYfOVx492TbLaAVk7XA_5iigR91KBiG1k';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
})