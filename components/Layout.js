import Head from 'next/head';
import styles from './Layout.module.scss';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <>
            <Head>
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
                <Footer footer={props.footer} />
            </div>
        </>
    );
};

export default Layout;
