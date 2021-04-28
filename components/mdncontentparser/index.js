import Markdown from 'markdown-to-jsx';
import styles from './MDFileContent.module.scss';

const MDFileContent = ({ content }) => {
    return (
        <div className={styles.MDFileContentComponent}>
            <Markdown>{content}</Markdown>
        </div>
    );
};

export default MDFileContent;
