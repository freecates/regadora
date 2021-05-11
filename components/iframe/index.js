import styles from './Iframe.module.scss';
import ReactPlayer from 'react-player/vimeo'

const Iframe = ({ width, height, src }) => {
    return (
        <div className={styles.iframeWrapper}>
            <ReactPlayer
                className={styles.iframe}
                url={src}
                width={width}
                height={height}
                controls={true}
                light={true}
            />
        </div>
    );
};

export default Iframe;
