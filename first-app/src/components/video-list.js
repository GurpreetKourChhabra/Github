import React , {Component} from 'react';
import VideoListItem from './video-list-item';
export const VideoList = (props) => {

  const videoItems = props.videos.map((video , i) => {
    // return <VideoListItem key={video.etag} video={video} />
    // return (

      // <div>
      // <img src={video.snippet.thumbnails.default.url} />
      // {video.etag}
      // </div>
    // );
    return(
      <VideoListItem 
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    );
  });
  return (
    <div className="row">

        {videoItems}

    </div>
  );
}

