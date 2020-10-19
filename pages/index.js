import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Festival Regadora</title>
                <meta
                    name='description'
                    content="Festival Regadora | Omplim Sabadell d'Alternatives Sostenibles"
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <a href='https://regadora.cat'>
                        <img
                            width='2362'
                            height='1181'
                            loading='lazy'
                            alt='Festival Regadora'
                            src='/tampo-bn-regadora.jpg'
                        />
                    </a>
                </h1>
                <section className={styles.grid}>
                    <h2>
                        El Regadora Fest és una trobada per reconèixer i celebrar totes les
                        alternatives que ja existeixen a la ciutat, per reivindicar i apostar per la
                        lluita contra el canvi climàtic, la sostenibilitat i la justícia social.
                    </h2>
                    <h2>Canviem el sistema no el clima!</h2>
                </section>
            </main>

            <footer className={styles.footer}>
                <a
                    href='https://xes.cat/teler-cooperatiu-sabadell/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Una iniciativa XES Sabadell
                </a>
            </footer>
        </div>
    );
}
