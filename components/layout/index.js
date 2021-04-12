import Head from 'next/head';
import styles from './Layout.module.scss';
import Nav from '@components/nav';
import Footer from '@components/footer';
import SocialNetworksSupport from '@components/socialnetworkssupport';

const Layout = (props) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="theme-color" content="#ffffff"/>
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
                <link rel="manifest" href="/manifest.json" />
                <title>
                    {!props.home ? props.pageTitle + ' | ' + props.title : props.pageTitle}
                </title>
                <meta
                    name='description'
                    content={
                        !props.home
                            ? props.pageDescription + ' | ' + props.title
                            : props.pageDescription
                    }
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Nav title={props.title} navRoutes={props.navRoutes} />
            <div>{props.children}</div>
            <div className={styles.container}>
                <SocialNetworksSupport title={props.title} claim={props.claim} />
            </div>
            <div className={styles.container}>
                <Footer footer={props.footer} />
            </div>
        </>
    );
};

export default Layout;
