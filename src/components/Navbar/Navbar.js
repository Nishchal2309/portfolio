import React from 'react'
import { Link } from 'react-router-dom'

import {Nav, NavContainer, NavLogo, BurgerMenu,ManuItems, SingleItem, Item, ProjectContainer, ProjectBtn} from './NavbarStyled'
// import {AutoVideo2} from '../Hero/HeroStyled'
import {GiMagicTrident} from 'react-icons/gi';
import {FaBars} from 'react-icons/fa'
import BackVideo from '../../videos/video.mp4'
const Navbar = ({toggleBtn}) => {
    return (

        <Nav autoPlay loop muted src={BackVideo} type='video/mp4'>
            
            <NavContainer >
                <NavLogo to="/">RUDRA
                </NavLogo>
                <Link to="/">
                    <GiMagicTrident className="trident"></GiMagicTrident>

                </Link>
                <BurgerMenu onClick={toggleBtn}>
                    <FaBars/>
                </BurgerMenu>

                <ManuItems>
                    <SingleItem>
                        <Item to="description"
                        smooth={true} duration={500} spy={true} exact='true' offset= {-100} activeClass="activeCurrentClass"

                        >
                            About me
                        </Item>
 
                        <Item to="skills" smooth={true} duration={500} spy={true} exact='true' offset= {-100} activeClass="activeCurrentClass"> 
                            Skills
                        </Item>

                        <Item to="contact" smooth={true} duration={500} spy={true} exact='true' offset= {-100} activeClass="activeCurrentClass">
                            Contact
                        </Item>
                    </SingleItem>
                </ManuItems>

                <ProjectContainer>
                    <Link to="/projects">
                        <button className="projectBtn">Projects</button>
                    </Link>
                </ProjectContainer>
            </NavContainer>
        </Nav>


                
    )
}

export default Navbar
