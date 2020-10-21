import Head from 'next/head';
import styles from '../styles/Home.module.css';
import api from '../libs/api.js';

const Home = ({ data }) => {
    const { title, description, content, footer } = data;

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name='description' content={`${description}`} />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <a href='https://regadora.cat'>
                        <img
                            width='2362'
                            height='1181'
                            loading='lazy'
                            alt={title}
                            src='/tampo-color-regadora.jpg'
                        />
                    </a>
                </h1>
                <section className={styles.grid}>
                    <h2>{content.description}</h2>
                    <h2>{content.claim}</h2>
                </section>
            </main>

            <footer className={styles.footer}>
                <a
                    href={footer.xess.url}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {footer.xess.name}
                </a>
            </footer>
        </div>
    );
};

export const getStaticProps = async () => {
    const [regadora, common] = await Promise.all([api.regadora.getData(), api.common.getData()]);
    return {
        props: {
            data: {...regadora[0],...common[0]},
        },
    };
};

export default Home;
