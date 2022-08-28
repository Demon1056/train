import Player from '@vimeo/player'
import throttle from 'lodash.throttle'
const iframe = document.querySelector('iframe');
const player = new Player (iframe)

function catchVideoTime (timeVideo)
      { localStorage.setItem ("videoplayer-current-time", timeVideo.seconds); 
        
};
const delayCatchVideoTime = throttle(catchVideoTime , 1000)
player.on('timeupdate', delayCatchVideoTime);
const currentVideoTime = localStorage.getItem("videoplayer-current-time")
player.setCurrentTime (currentVideoTime || 0) 