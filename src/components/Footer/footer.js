import React from 'react'
import { MainFooter, FooterContainer, FooterRow, FooterColumn, Row1, CreateAnnotation, IconHolder } from './footerStyled'
import {AiFillInstagram} from 'react-icons/ai'
import {SiLinkedin} from 'react-icons/si'
import { Link } from 'react-router-dom'
import {AiFillGithub} from  'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {RiBearSmileFill} from 'react-icons/ri'


const Footer = () => {
    return (
        <>
            <MainFooter>
                <FooterContainer>
                    <FooterRow>
                        <FooterColumn>
                            
                            {/* social media handles */}
                            <div>
                                <a href="https://www.instagram.com/nishchalbhardwaj/" className="iconHandler">
                                    <AiFillInstagram  />
                                </a>
                                
                               
                            </div>

                            <div >
                                <a href="https://www.linkedin.com/in/nishchal-bhardwaj-b1a7241a6/" className="iconHandler">
                                <SiLinkedin/>
                                </a>
                               
                            </div>
                            
                            
                            <div >
                                <a href="https://github.com/Nishchal2309" className="iconHandler">
                                <AiFillGithub />
                                </a>
                            </div>

                        </FooterColumn>
                        <Row1>
                            
                            <CreateAnnotation ><IconHolder><a href="https://reactjs.org/docs/getting-started.html"><FaReact className="styleIcon"/></a></IconHolder>This website was created using React js <RiBearSmileFill className="styleSmiley"/> </CreateAnnotation>
                                <p className="classPrivacy">
                                    &copy;{new Date().getFullYear()} Nishchal Bhardwaj INC | All rights reserved
                                </p>
                        </Row1>
                    </FooterRow>
                </FooterContainer>
            </MainFooter>
        </>
    )
}

export default Footer
