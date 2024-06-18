<<<<<<< HEAD
import React from 'react';
import Header from '../components/Header';
//import Sidebar from '../components/Sidebar';
//import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Main from '../components/Main';
=======
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/home/Main';
>>>>>>> 4ca7357 (first commit)

function Home() {
    return (
        <div className='flex flex-col'>

            <Header />

            <Main />

<<<<<<< HEAD
            {/*<div className="d-flex" id="wrapper">

                <Sidebar />

                <div id="page-content-wrapper">
                    <MainContent />
                </div>
                
            </div>*/}

=======
>>>>>>> 4ca7357 (first commit)
            <Footer />

        </div>
    );
}

export default Home;
