import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = props => {
    return (
        <div>
            <Head>
                <title>FFXIV Free Company Site</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/slate/bootstrap.min.css"/>
            </Head>
            
            <Navbar />
            <body className="container">
                <main>
                    {props.children}
                </main>
            </body>
            <Footer />

            <style jsx>{`
                .container {
                    margin-top: 30px;
                    margin-bottom: 30px;
                }
            `}</style>
        </div>
    );
}

export default Layout;