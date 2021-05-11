import styles from './Iframe.module.scss';

const Iframe = ({ width, height, src, allow, allowfullscreen }) => {
    return (
        <div className={styles.iframeWrapper}>
            <iframe
                className={styles.iframe}
                src={src}
                width={width}
                height={height}
                frameborder='0'
                allow={allow}
                allowFullScreen={allowfullscreen}
            />
        </div>
    );
};

export default Iframe;
