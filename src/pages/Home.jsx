import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/home/Main';
import Spinner from '../components/spinner/Spinner';
import { useState, useEffect } from 'react';

function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='flex flex-col'>

            {loading && <Spinner />}

            {!loading && (
                <>
                    <Header />
                    <Main />
                    <Footer />
                </>
            )}

        </div>
    );
}

export default Home;
