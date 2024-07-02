import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
//import "../styles/Header.css";

const Header = () => {

    return (

        <div className='flex justify-between items-center m-auto mt-4' style={{width: '90%'}}>

            <Link to='/' className='flex w-1/5'><img src={logo} alt='' style={{width: '60%'}} /></Link>

            <nav className='flex justify-between items-center w-2/6 font-medium'>

                <Link to='/'>Home</Link>
                <Link to='/'>How It works</Link>
                <Link to='/'>Features</Link>
                <Link to='/'>Contact</Link>

            </nav>

            <div className='flex justify-between items-center' style={{width: '25%'}}>

                {/*<button className='flex justify-center items-center' onClick={handleLogout}> <FaSignOutAlt className="mr-1" />Logout </button>*/}

                <Link to='' style={{backgroundColor: '#3632ff'}} className='flex justify-center items-center rounded-md text-white px-8 py-2'> 
                    Sign Up 
                </Link>

                <Link to='/login' style={{border: '1px solid #3632ff', color: '#3632ff'}} 
                    className='flex justify-center items-center rounded-md px-8 py-2 font-bold'
                > 
                    Sign In 
                </Link>
            
            </div>

        </div>

    );
};

export default Header;
