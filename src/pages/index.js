import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Hero from '../components/Hero/Hero'
import MainPages from '../components/MainPages'
import Skills from '../components/Skills/skills'
import Contact from '../components/Contact/contact'
import Footer from '../components/Footer/footer'
import ScrollToTop from '../components/ScrollToTop'
const Main = () => {
    const [sideOpen, setSideOpen] = useState(false);

    const toggleBtn = () => {
        setSideOpen(!sideOpen);
    }

    // const openSideBar = ()=>{
    //     setSideOpen(true);
    // }

    // const closeSideBar = () =>{
    //     setSideOpen(false);
    // }
    return (
        <>
            <ScrollToTop/>
            <Sidebar sideOpen={sideOpen} toggleBtn={toggleBtn}/>
            <Navbar toggleBtn={toggleBtn}/>
            <Hero/>
            <MainPages />
            {/* <TestSkill/> */}
            <Skills/>
            <Contact/>
            <Footer/>
        </>

    )
}

export default Main
