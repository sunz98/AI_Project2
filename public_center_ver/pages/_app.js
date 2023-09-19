import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const styles = {
    layout: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    header: {
        height: 60,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#333',
        color: '#fff',
        padding: '0 20px',
    },
    main: {
        flex: 1,
        padding: '20px',
    },
    footer: {
        height: 60,
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        margin: '0 8px',
        color: '#fff',
    },
};

function RootApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>public center ver</title>
            </Head>
            <div style={styles.layout}>
            <header style={styles.header}>
                    <Link href="/" legacyBehavior>
                        <a style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
                    </Link>
                    <span style={styles.divider}>|</span>
                    <Link href="/post" legacyBehavior>
                        <a style={{ color: '#fff', textDecoration: 'none' }}>Post</a>
                    </Link>
                    <span style={styles.divider}>|</span>
                    <Link href="/about" legacyBehavior>
                        <a style={{ color: '#fff', textDecoration: 'none' }}>About</a>
                    </Link>
                </header>
                <main style={styles.main}>
                    <Component {...pageProps} />
                </main>
                <footer style={styles.footer}>Footer</footer>
            </div>
        </>
    );
}

export default RootApp;