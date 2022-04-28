import  ReactPlayer from 'react-player';

const Video = () => {
    return ( 
        <div className="Img2 ">
            <ReactPlayer className="wth" width="100%" height="300px" controls url="https://www.youtube.com/watch?v=cLV3hedhz7s"/>
        </div>
     );
}
 
export default Video;