import { Header } from "../components/dashboard/Header"
import { Main } from "../components/dashboard/Main"
import {Sidemenu} from "../components/dashboard/SideMenu"

const Dashboard = () => {
  return (
    <div className="flex justify-between p-4" style={{backgroundColor: 'hsla(241, 100%, 92%, 1)', height: '100vh'}}>

        <Sidemenu />

        <section className="flex flex-col" style={{width: '83%', margin: 'auto', marginTop: '1px'}}>

          <Header />

          <Main />

        </section>

    </div>
  )
}

export default Dashboard