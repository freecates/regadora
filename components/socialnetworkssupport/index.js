import { generateShareIcon, ShareButtons } from 'react-share';
import styles from './SocialNetworksSupport.module.scss';

const {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const LinkedinIcon = generateShareIcon('linkedin');
const EmailIcon = generateShareIcon('email');

const SocialNetworksSupport = ({ title, claim }) => {
    const url = 'https://regadora.cat';
    return (
        <section className={styles.socialNetworks}>
            <div>
                <p>
                    <small>Expressa el teu suport</small>
                </p>
            </div>

            <div className={styles.someNetwork}>
                <FacebookShareButton
                    url={url}
                    className={styles.someNetworkButton}
                    quote={`${title}: ${claim}`}
                    hashtag={`#FestivalRegagora`}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </div>

            <div className={styles.someNetwork}>
                <TwitterShareButton
                    url={url}
                    title={`${title}: ${claim}`}
                    hashtags={['FestivalRegagora']}
                    className={styles.someNetworkButton}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            </div>

            <div className={styles.someNetwork}>
                <LinkedinShareButton
                    url={url}
                    title={`${title}: ${claim}`}
                    className={styles.someNetworkButton}
                >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>

            <div className={styles.someNetwork}>
                <EmailShareButton
                    url={url}
                    subject={`${title}: ${claim}`}
                    body={`Fes-li un cop d'ull a: ${title}: ${claim} | ${url}`}
                    className={styles.someNetworkButton}
                >
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </div>
        </section>
    );
};

export default SocialNetworksSupport;