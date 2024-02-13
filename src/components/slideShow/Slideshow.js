import classes from "./Slideshow.module.css";
import slide1 from "../../store/slide1.jpg"
import slide2 from "../../store/slide2.png"
import slide3 from "../../store/slide3.jpg"
import slide4 from "../../store/slide4.jpg"
import slide5 from "../../store/slide5.jpg"
import slide6 from "../../store/slide6.jpg"
import slide7 from "../../store/slide7.jpg"
import slide8 from "../../store/slide8.jpg"
import slide9 from "../../store/slide9.jpg"
import slide10 from "../../store/slide10.JPG"
import {useEffect, useState} from "react";

const Slideshow = () =>{
    const images = [
        slide1,slide2,slide3,slide4,slide5,slide6,slide7,slide8,slide9,slide10
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 15000);

        const hourDelay = 60 * 60 * 1000; // 1 hour in milliseconds
        const refreshPage = setTimeout(() => {
            window.location.reload();
        }, hourDelay);

        return () => {
            clearInterval(intervalId);
            clearTimeout(refreshPage);
        };
    }, []);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

    };

    return <div className={classes.slide}>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className={classes.slideImage}
            />
    </div>
}

export default Slideshow