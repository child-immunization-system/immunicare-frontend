import logo from '../../assets/logo.png'
import logout from '../../assets/logout.png'
import dashboard from '../../assets/home.png'
import schedule from '../../assets/schedule.png'
import records from '../../assets/document.png'
import resources from '../../assets/bi_stack.png'
import settings from '../../assets/settings.png'
import toggleIcon from '../../assets/Ellipse.png'
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Sidemenu = ({ isExpanded, onToggle }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
      localStorage.removeItem('auth');
      navigate('/login/');
  };

  return (
    <aside className={`relative flex flex-col items-center bg-white rounded-md p-4 transition-all duration-300 ${isExpanded ? 'w-[15%]' : 'w-20'}`}
      //className="flex flex-col items-center bg-white rounded-md p-4" 
      //style={{width: '15%'}}
    >

      <Link to='/' className={`transition-all duration-300 ${isExpanded ? 'w-4/5' : 'w-[100%]'}`}>
        <img src={logo} alt="" />
      </Link>

      <img src={toggleIcon} alt='' onClick={onToggle} className="absolute top-4 right-0 transform translate-x-1/2 p-2 cursor-pointer" />

      <nav className="flex flex-col mt-6" style={{width: '100%'}}>

        <div className={`flex items-center text-white mt-6 rounded pt-2 pb-2 text-sm font-semibold w-full ${isExpanded ? 'pl-8' : 'pl-2'} `} 
          style={{backgroundColor: '#3632ff'}}
        > 
          <img src={dashboard} alt="" className={`mr-2 ${isExpanded ? 'w-[12%]' : 'w-50'}`} /> {isExpanded && 'Dashboard'} 
        </div>

        <div className={`flex items-center mt-3 rounded pt-2 pb-2 text-sm font-semibold w-full ${isExpanded ? 'pl-8' : 'pl-2'}`}> 
          <img src={schedule} alt="" className={`mr-2 ${isExpanded ? 'w-[12%]' : 'w-50'}`} /> {isExpanded && 'Schedule'}
        </div>

        <div className={`flex items-center mt-3 rounded pt-2 pb-2 text-sm font-semibold w-full ${isExpanded ? 'pl-8' : 'pl-2'}`}> 
          <img src={records} alt="" className={`mr-2 ${isExpanded ? 'w-[12%]' : 'w-50'}`} /> {isExpanded && 'Records'}
        </div>

        <div className={`flex items-center mt-3 rounded pt-2 pb-2 text-sm font-semibold w-full ${isExpanded ? 'pl-8' : 'pl-2'}`}> 
          <img src={resources} alt="" className={`mr-2 ${isExpanded ? 'w-[12%]' : 'w-50'}`} /> {isExpanded && 'Resources'}
        </div>

        <div className={`flex items-center mt-3 rounded pt-2 pb-2 text-sm font-semibold w-full ${isExpanded ? 'pl-8' : 'pl-2'}`}> 
          <img src={settings} alt="" className={`mr-2 ${isExpanded ? 'w-[12%]' : 'w-50'}`} /> {isExpanded && 'Settings'}
        </div>

      </nav>

      <div className="flex flex-col justify-center items-center mt-32 text-sm font-semibold w-full"> 
        <img src={logout} alt="" className={`${isExpanded ? 'w-[20%]' : 'w-[50%]'}`} onClick={handleLogout} /> {isExpanded && 'Logout'}
      </div>

    </aside>
  )
};

Sidemenu.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export {Sidemenu}