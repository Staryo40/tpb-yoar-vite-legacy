import '../../CommonStyles/Text.css'
import '../../CommonStyles/Bigbox.css'
import '../../CommonStyles/Component.css'
import NavBar from '../../../components/organisms/NavBar'
import Footer from '../../../components/organisms/Footer'
import MainContent from '../../MainContent'
import SideBar from '../../SideBar'
import { ScrollProvider } from '../../ScrollContext'


function UsahaDanEnergi() {
    return (
        <>
        <div className='MacroContainer'>
            <NavBar />
            <div className="storage">
            <div className="MainContainer">
                <ScrollProvider>
                <MainContent pageName="Usaha dan Energi"/>
                <SideBar sidebarName="Fisika Dasar IA Materi" scrollItem='usahadanenergi'/>
                </ScrollProvider>
            </div>
            </div>
            <Footer />
        </div>
        </>
  )
}

export default UsahaDanEnergi;