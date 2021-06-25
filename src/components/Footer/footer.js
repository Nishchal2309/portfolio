import React from 'react'
import { MainFooter, FooterContainer, FooterRow, FooterColumn, Row1 } from './footerStyled'
import {AiFillInstagram} from 'react-icons/ai'
import {SiLinkedin} from 'react-icons/si'
import { Link } from 'react-router-dom'
import {AiFillGithub} from  'react-icons/ai'


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
