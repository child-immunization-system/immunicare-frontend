<<<<<<< HEAD
import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <p>© 2024 Immunio. All rights reserved.</p>
=======
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/feather.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'

function Footer() {
    return (
        <footer className="bg-white flex flex-col pt-20 pb-4">

            <section className="flex justify-around">

                <div className="flex flex-col">

                    <Link to='/' className='flex'><img src={logo} alt='' /></Link>

                    <div className='flex justify-between items-center mt-4'>
                        <Link to='/' className='flex'><img src={twitter} alt='' /></Link>
                        <Link to='/' className='flex'><img src={instagram} alt='' /></Link>
                        <Link to='/' className='flex'><img src={linkedin} alt='' /></Link>
                        <Link to='/' className='flex'><img src={facebook} alt='' /></Link>
                    </div>

                </div>

                <section className='flex justify-between' style={{width: '60%'}}>

                    <section className='flex justify-around' style={{width: '40%'}}>

                        <div className='flex flex-col text-left'>
                            <p className='font-medium mb-2'>Quick Links</p>
                            <Link to='/' className=''>Home</Link>
                            <Link to='/' className=''>Features</Link>
                            <Link to='/' className=''>About Us</Link>
                            <Link to='/' className=''>Contact</Link>
                            <Link to='/' className=''>How it works</Link>
                            <Link to='/' className=''>Sign Up/Login</Link>
                        </div>

                        <div className='flex flex-col text-left'>
                            <p className='font-medium mb-2'>Features</p>
                            <Link to='/' className=''>Digital Records</Link>
                            <Link to='/' className=''>Educational</Link>
                            <Link to='/' className=''>Resources</Link>
                            <Link to='/' className=''>Management &</Link>
                            <Link to='/' className=''>Analytics</Link>
                        </div>

                    </section>

                    <section className='flex justify-around' style={{width: '60%'}}>

                        <div className='flex flex-col text-left'>
                            <p className='font-medium mb-2'>Legal</p>
                            <Link to='/' className=''>Privacy Policy</Link>
                            <Link to='/' className=''>Cookie Policy</Link>
                            <Link to='/' className=''>Terms of Service</Link>
                            <Link to='/' className=''>Acceptable Use Policy</Link>
                            <Link to='/' className=''>Code of Conduct</Link>
                        </div>

                        <div className='flex flex-col text-left'>
                            <p className='font-medium mb-2'>Company</p>
                            <Link to='/' className=''>About Immunicare</Link>
                            <Link to='/' className=''>Careers</Link>
                            <Link to='/' className=''>Partners</Link>
                            <Link to='/' className=''>Press</Link>
                            <Link to='/' className=''>Contact</Link>
                            <Link to='/' className=''>Reviews</Link>
                        </div>

                    </section>

                </section>

            </section>

            <p className="text-sm text-center mt-8">© 2024 Child Immunization Tracking System. All rights reserved.</p>

>>>>>>> 4ca7357 (first commit)
        </footer>
    );
}

export default Footer;
