import {useEffect, useState} from "react";

export const FirstPage = () => {

    const [image1, setImage1] = useState<string>("")
    const [image2, setImage2] = useState<string>("")
    const [image3, setImage3] = useState<string>("")

    useEffect(() => {
        setTimeout(function() {
            setImage1("https://wallpapershome.com/images/pages/pic_h/26346.jpg")
        }, 1000);
        setTimeout(function() {
            setImage2("https://wallpapershome.com/images/pages/pic_h/26304.jpg")
        }, 2000);
        setTimeout(function() {
            setImage3("https://wallpapershome.com/images/pages/pic_h/10354.jpg")
        }, 3000);
    }, []);


    return (
        <div>
            <p>Hello World!</p>
            <p>Images are loading 1...2...3 </p>
            <img src={image1} style={{width : 200 ,  height : 200 }}/>
            <img src={image2}  style={{width : 200 ,  height : 200 }}/>
            <img src={image3}  style={{width : 200 ,  height : 200 }}/>
        </div>
    ) ;
}