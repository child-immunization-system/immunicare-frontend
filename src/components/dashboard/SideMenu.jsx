import logo from '../../assets/logo.png'
import logout from '../../assets/logout.png'
import dashboard from '../../assets/home.png'
import schedule from '../../assets/schedule.png'
import records from '../../assets/document.png'
import resources from '../../assets/bi_stack.png'
import settings from '../../assets/settings.png'

const Sidemenu = () => {
  return (
    <aside className="flex flex-col items-center bg-white rounded-md p-4" style={{width: '15%'}}>

      <img src={logo} alt="" style={{width: '80%'}} />

      <nav className="flex flex-col mt-6" style={{width: '100%'}}>

        <div className="flex items-center text-white mt-6 rounded pt-2 pb-2 pl-8 text-sm font-semibold w-full" style={{backgroundColor: '#3632ff'}}> 
          <img src={dashboard} alt="" className="mr-2" style={{width: '12%'}} /> Dashboard 
        </div>

        <div className="flex items-center mt-3 rounded pt-2 pb-2 pl-8 text-sm font-semibold w-full"> 
          <img src={schedule} alt="" className="mr-2" style={{width: '12%'}} /> Schedule 
        </div>

        <div className="flex items-center mt-3 rounded pt-2 pb-2 pl-8 text-sm font-semibold w-full"> 
          <img src={records} alt="" className="mr-2" style={{width: '12%'}} /> Records 
        </div>

        <div className="flex items-center mt-3 rounded pt-2 pb-2 pl-8 text-sm font-semibold w-full"> 
          <img src={resources} alt="" className="mr-2" style={{width: '12%'}} /> Resources 
        </div>

        <div className="flex items-center mt-3 rounded pt-2 pb-2 pl-8 text-sm font-semibold w-full"> 
          <img src={settings} alt="" className="mr-2" style={{width: '12%'}} /> Settings 
        </div>

      </nav>

      <div className="flex flex-col justify-center items-center mt-32 text-sm font-semibold w-full"> 
        <img src={logout} alt="" style={{width: '20%'}} /> Logout 
      </div>

    </aside>
  )
}

export {Sidemenu}