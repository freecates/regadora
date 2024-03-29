import { generateShareIcon, ShareButtons } from 'react-share';
import { useRouter } from 'next/router';
import styles from './SocialNetworksSupport.module.scss';

const {
    FacebookShareButton, LinkedinShareButton, TwitterShareButton, EmailShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const LinkedinIcon = generateShareIcon('linkedin');
const EmailIcon = generateShareIcon('email');

const SocialNetworksSupport = ({ title, claim }) => {
    const router = useRouter();
    const url = `https://regadora.cat${router.pathname}`;
    const supportQuote = `Dono el meu suport a ${title}: ${claim}`;
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
                    quote={supportQuote}
                    hashtag={'#FestivalRegagora'}
                    role={'button'}
                >
                    <FacebookIcon size={32} round />
                    <span className={styles['visually-hidden']}>Facebook Share Button</span>
                </FacebookShareButton>
            </div>

            <div className={styles.someNetwork}>
                <TwitterShareButton
                    url={url}
                    title={supportQuote}
                    hashtags={[
                        'FestivalRegagora',
                        'QuinPlanetaEtDeixem',
                        'CanviaElSistemaNoElClima',
                    ]}
                    className={styles.someNetworkButton}
                    via={'regadorafest'}
                    role={'button'}
                >
                    <TwitterIcon size={32} round />
                    <span className={styles['visually-hidden']}>Twitter Share Button</span>
                </TwitterShareButton>
            </div>

            <div className={styles.someNetwork}>
                <LinkedinShareButton
                    url={url}
                    title={supportQuote}
                    hashtags={[
                        'FestivalRegagora',
                        'QuinPlanetaEtDeixem',
                        'CanviaElSistemaNoElClima',
                    ]}
                    className={styles.someNetworkButton}
                    role={'button'}
                >
                    <LinkedinIcon size={32} round />
                    <span className={styles['visually-hidden']}>Linkedin Share Button</span>
                </LinkedinShareButton>
            </div>

            <div className={styles.someNetwork}>
                <EmailShareButton
                    url={url}
                    subject={supportQuote}
                    body={`Fes-li un cop d'ull a: ${title}: ${claim} | ${url}`}
                    className={styles.someNetworkButton}
                    role={'button'}
                >
                    <EmailIcon size={32} round />
                    <span className={styles['visually-hidden']}>Email Share Button</span>
                </EmailShareButton>
            </div>
        </section>
    );
};

export default SocialNetworksSupport;
