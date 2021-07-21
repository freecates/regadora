import ReactPlayer from 'react-player/vimeo';
import styles from './VimeoPlayer.module.scss';

const VimeoPlayer = ({
    width, height, src, thumbnail,
}) => (
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

export default VimeoPlayer;
