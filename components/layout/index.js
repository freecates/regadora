import Head from 'next/head';
import Nav from '@components/nav';
import Footer from '@components/footer';
import SocialNetworksSupport from '@components/socialnetworkssupport';
import Cofinance from '@components/cofinance';
import XXSS from '@components/xxss';
import styles from './Layout.module.scss';

const Layout = (props) => (
    <>
        <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
                name='viewport'
                content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
            />
            <meta name='theme-color' content='#ffffff' />
            <link rel='apple-touch-icon' href='/icons/icon-192x192.png'></link>
            <link rel='manifest' href='/manifest.json' />
            <title>
                {!props.home ? `${props.pageTitle} | ${props.title}` : props.pageTitle}
            </title>
            <meta
                name='description'
                content={
                    !props.home ?
                        `${props.pageDescription} | ${props.title}` :
                        props.pageDescription
                }
            />
            <link rel='icon' href='/favicon.ico' />

            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='regadorafest' />
            <meta name='twitter:creator' content='Regadora - La ciutat de les alternatives' />
            <meta
                name='twitter:title'
                content={!props.home ? `${props.pageTitle} | ${props.title}` : props.pageTitle}
            />
            <meta
                name='twitter:description'
                content={
                    !props.home ?
                        `${props.pageDescription} | ${props.title}` :
                        props.pageDescription
                }
            /><meta name='twitter:image:src' content={'https://regadora.cat/tampo-color-regadora.jpg'} />
        </Head>
        <Nav title={props.title} navRoutes={props.navRoutes} />
        <div>{props.children}</div>
        <div className={styles.container}>
            <SocialNetworksSupport title={props.title} claim={props.claim} />
            <Cofinance />
            <XXSS />
        </div>
        <div className={styles.container}>
            <Footer footer={props.footer} />
        </div>
    </>
);

export default Layout;
