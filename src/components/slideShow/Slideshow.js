import classes from "./Slideshow.module.css";
import slide from "../../store/slide_1.jpeg"
import slide2 from "../../store/slide_2.jpeg"
import slide3 from "../../store/slide_3.jpeg"
import {useEffect, useState} from "react";

const Slideshow = () =>{
    const images = [
        slide,slide2,slide3
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 15000);

        return () => clearInterval(intervalId);
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