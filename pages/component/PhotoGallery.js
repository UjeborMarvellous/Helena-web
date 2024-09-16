import Footertwo from "./Footertwo"

const PhotoGallery = () => {
    return ( 
        <>
            <div className="grid grid-cols-1 gap-4 mx-12 aspec">
                <div className="UN">
                <p className="hone font-bold text-5xl text-center my-8 fon">Chairs</p>
                    <div className="grid grid-cols-3 gap-4 CLASS">
                        <img src="/Chair1.jpg" alt="Loading..." className="GT"/>
                        <img src="/Chair2.jpg" alt="Loading..." className="GT"/>
                        <img src="/Chair3.jpg" alt="Loading..." className="GT"/>
                        <img src="/Chair4.jpg" alt="Loading..." className="GT"/>
                        <img src="/Chair5.jpg" alt="Loading..." className="GT"/>
                        <img src="/Chair6.jpg" alt="Loading..." className="GT"/>
                    </div>
                </div>
                <div className="next">
                    <p className="hone font-bold text-5xl text-center my-8 fon">Bed Sets</p>
                    <div className="grid grid-cols-3 gap-4 CLASS">
                        <img src="/Bed1.jpg" alt="Loading..." className=""/>
                        <img src="/Bed2.jpg" alt="Loading..." className=""/>
                        <img src="/Bed3.jpg" alt="Loading..." className=""/>
                        <img src="/Bed4.jpg" alt="Loading..." className=""/>
                        <img src="/Bed5.jpg" alt="Loading..." className=""/>
                        <img src="/Bed6.jpg" alt="Loading..." className=""/>
                    </div>
                </div>
            </div>
            <div className="read">
                <p className="text-center mt-10 text-xl text-blue-500 underline">VIEW MORE</p>
            </div>
            <Footertwo />
        </>
     );
}
 
export default PhotoGallery;