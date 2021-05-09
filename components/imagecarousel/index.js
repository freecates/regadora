import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import styles from './ImageCarousel.module.scss';

const ImageCarousel = ({ images }) => {
    return (
        <div className={styles.wrapper}>
            <Carousel images={images} hasMediaButton={false} hasThumbnails={false} isAutoPlaying={true} hasSizeButton={false} hasIndexBoard={false} style={{height: 'auto'}} />
        </div>
    );
};

export default ImageCarousel;
