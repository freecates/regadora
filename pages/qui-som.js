import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.scss';
import api from '../libs/api.js';

const Qui = ({ data }) => {
    const { title, description, content, footer, siteTitle } = data;

    return (
        <>
            <Head>
                <title>
                    {title} | {siteTitle}
                </title>
                <meta name='description' content={`${description} | ${siteTitle}`} />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Nav title={siteTitle}/>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>{description}</h1>
                    <section className={styles.grid}>
                        <div
                            className='description'
                            dangerouslySetInnerHTML={{ __html: content.description }}
                        />
                    </section>
                </main>

                <footer className={styles.footer}>
                    <a href={footer.xess.url} target='_blank' rel='noopener noreferrer'>
                        {footer.xess.name}
                    </a>
                </footer>
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const [quisom, common] = await Promise.all([api.quisom.getData(), api.common.getData()]);
    return {
        props: {
            data: { ...quisom[0], ...common[0] },
        },
    };
};

export default Qui;
