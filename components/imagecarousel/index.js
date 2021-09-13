/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import styles from './ImageCarousel.module.scss';

const ImageCarousel = ({
    images, width, height, assetsURL,
}) => {
    const [pause, setPause] = React.useState(false);
    const timer = React.useRef();
    const [opacities, setOpacities] = React.useState([]);

    const [sliderRef, slider] = useKeenSlider({
        slides: images.length,
        loop: true,
        duration: 4000,
        move(s) {
            const newOpacities = s.details().positions.map((slide) => slide.portion);
            setOpacities(newOpacities);
        },
        dragStart: () => {
            setPause(true);
        },
        dragEnd: () => {
            setPause(false);
        },
    });
    React.useEffect(() => {
        sliderRef.current.addEventListener('mouseover', () => {
            setPause(true);
        });
        sliderRef.current.addEventListener('mouseout', () => {
            setPause(false);
        });
    }, [sliderRef]);

    React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next();
            }
        }, 4000);
        return () => {
            clearInterval(timer.current);
        };
    }, [pause, slider]);

    return (
        <div ref={sliderRef} className={`${styles.wrapper} ${styles.fader}`}>
            {images.map((i, idx) => (
                <div
                    key={idx}
                    className={`${styles.fader__slide}`}
                    style={{ opacity: opacities[idx] }}
                >
                    <img src={`${assetsURL}${i.src}`} alt={i.alt} loading={'lazy'} height={height} width={width} />
                </div>
            ))}
        </div>
    );
};

export default ImageCarousel;
