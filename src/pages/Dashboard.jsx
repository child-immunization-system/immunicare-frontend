import { Header } from "../components/dashboard/Header"
import { Main } from "../components/dashboard/Main"
import Sidemenu from "../components/dashboard/SideMenu"

const Dashboard = () => {
  return (
    <div className="flex">

        <Sidemenu />

        <section className="flex flex-col">

          <Header />

          <Main />

        </section>

    </div>
  )
}

export default Dashboard