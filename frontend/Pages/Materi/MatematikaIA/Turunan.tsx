import '../../CommonStyles/Text.css'
import '../../CommonStyles/Bigbox.css'
import '../../CommonStyles/Component.css'
import NavBar from '../../../components/organisms/NavBar'
import Footer from '../../../components/organisms/Footer'
import MainContent from '../../MainContent'
import SideBar from '../../SideBar'
import { ScrollProvider } from '../../ScrollContext'


function Turunan() {
    return (
        <>
        <div className='MacroContainer'>
            <NavBar />
            <div className="storage">
            <div className="MainContainer">
                <ScrollProvider>
                <MainContent pageName="Turunan"/>
                <SideBar sidebarName="Matematika IA Materi" scrollItem='turunan'/>
                </ScrollProvider>
            </div>
            </div>
            <Footer />
        </div>
        </>
  )
}

export default Turunan;