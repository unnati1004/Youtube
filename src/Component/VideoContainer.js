import { useEffect, useState } from "react";
import { Youtube_video_api } from "../utils/constants";
import { AdVideoCard, VideoCard } from "./videoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const getVideos = async () => {
    const data = await fetch(Youtube_video_api);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className={ `grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-4 p-4 pt-[150px] ${isMenuOpen && 'pl-[220px]'}`}>
     { videos[0]&&<AdVideoCard info={videos[0]}/>} 
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
