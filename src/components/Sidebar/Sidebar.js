
import React from 'react'
import {ImCross} from 'react-icons/im'
import { Link } from 'react-router-dom'

import {SideContainer, IconContainer, CloseBtn, SideWraps, SideManuItems, Item, ProjectContainer, SideButton} from './SidebarStyled'

const Sidebar = ({sideOpen, toggleBtn}) => {
    return (
        <SideContainer sideOpen={sideOpen} onClick={toggleBtn}>

            <IconContainer onClick={toggleBtn}>
                <CloseBtn/>
            </IconContainer>

            <SideWraps>
                <SideManuItems>

                    <Item to="description" onClick={toggleBtn}>
                            About me
                        </Item>

                        <Item to="skills" onClick={toggleBtn}>
                            Skills
                        </Item>

                        <Item to="contact" onClick={toggleBtn}>
                            Contact
                        </Item>

                </SideManuItems>

                
                <ProjectContainer>
                    {/* <Link to="/projects">
                        <button className="projectBtn">Projects</button>
                    </Link> */} 
                    {/* <SideButton to="/projects">
                        Projects
                    </SideButton> */}

                    <Link to="/projects" onClick={toggleBtn}>
                        <button className="projectBtn">Projects</button>
                    </Link>
                </ProjectContainer>
            </SideWraps>
        </SideContainer>
    )
}

export default Sidebar
