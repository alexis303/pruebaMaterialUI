import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import { makeStyles, } from '@material-ui/core/styles';

import 'bootstrap/dist/css/bootstrap.min.css'

const useStyles = makeStyles((theme) => ({
    img: {
      height: 500,
      maxWidth: 'auto',
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
    colorflecha: {
        color:"#0099ff",
        backgroundColor:"rgba(40, 41, 41, 0.377)",
        maxWidth: 100
    }
}));

const items = [
    {
        src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--RsPdOQIX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/eaapvdl269tttbzvsn3i.jpeg',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'http://cssslider.com/sliders/demo-8/data1/images/dirt_bike_motorcycle_jump_autumn.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const Carrusel = () => {

    const classes = useStyles();
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >

            <img
                className={classes.img}
                src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />

        </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            
            {slides}
            
            <CarouselControl className={classes.colorflecha} direction="prev" directionText="Previous" onClickHandler={previous} />
        
            <CarouselControl className={classes.colorflecha} direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Carrusel;