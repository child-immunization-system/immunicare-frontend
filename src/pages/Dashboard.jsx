import { Header } from "../components/dashboard/Header"
import { Main } from "../components/dashboard/Main"
import {Sidemenu} from "../components/dashboard/SideMenu"
import Spinner from '../components/spinner/Spinner';
import { useState, useEffect } from 'react';

const Dashboard = () => {

  const [isExpanded, setIsExpanded] = useState(true);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-between p-4" style={{backgroundColor: 'hsla(241, 100%, 92%, 1)', height: '100vh'}}>

      {loading && <Spinner />}

            {!loading && (
                <>
                  <Sidemenu isExpanded={isExpanded} onToggle={toggleSidebar} />

                  <section className={`flex flex-col ${isExpanded ? 'w-[83%]' : 'w-[93%]'}`} style={{margin: 'auto', marginTop: '1px'}}>

                    <Header />

                    <Main />

                  </section>
                  
                </>
            )}

    </div>
  )
}

export default Dashboard