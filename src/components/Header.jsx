import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png'
//import "../styles/Header.css";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('auth');
        navigate('/login/');
    };

    return (

        <div className='flex justify-between items-center m-auto mt-4' style={{width: '90%'}}>

            <Link to='/' className='flex w-1/5'><img src={logo} alt='' style={{width: '60%'}} /></Link>

            <nav className='flex justify-between items-center w-2/6 font-semibold'>

                <Link to='/'>Home</Link>
                <Link to='/'>How It works</Link>
                <Link to='/'>Features</Link>
                <Link to='/'>Contact</Link>

            </nav>

            <div className='flex justify-between items-center' style={{width: '30%'}}>

                {/*<button className='flex justify-center items-center' onClick={handleLogout}> <FaSignOutAlt className="mr-1" />Logout </button>*/}

                <button style={{backgroundColor: '#3632ff'}} className='flex justify-center items-center rounded-md text-white px-8 py-2' onClick={handleLogout}> 
                    Sign Up 
                </button>

                <button style={{border: '1px solid #3632ff', color: '#3632ff'}} className='flex justify-center items-center rounded-md px-8 py-2 font-bold' onClick={handleLogout}> 
                    Sign In 
                </button>
            
            </div>

        </div>

    );
};

export default Header;
