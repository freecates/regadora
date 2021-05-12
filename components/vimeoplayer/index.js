import styles from './VimeoPlayer.module.scss';
import ReactPlayer from 'react-player/vimeo'

const VimeoPlayer = ({ width, height, src, thumbnail }) => {
    return (
        <div className={styles.vimeoPlayerWrapper}>
            <ReactPlayer
                className={styles.vimeoPlayer}
                url={src}
                width={width}
                height={height}
                controls={true}
                light={thumbnail}
            />
        </div>
    );
};

export default VimeoPlayer;
