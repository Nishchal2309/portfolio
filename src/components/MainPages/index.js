import React, {useEffect} from 'react'

import { InformationContainer, InformationWrapper, InformationRows, Columns1, Columns2, TextContainer, Heading, ImgWrapper, Imgs, Introduction, BackgroundImageAbout } from './PagesStyled' 
import aboutMe from '../../images/aboutMe.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const MainPages = ({changeBackground, aboutImage, changeColor, headLine, img, alt, id}) => {
    useEffect(()=>{
        Aos.init({duration: 3000});
    }, []);
    return (
        <>
            <InformationContainer id="description">
                
                    
                    <InformationWrapper>

                            <TextContainer>

                                <Heading data-aos="fade-up">About Me</Heading>

                            </TextContainer>
                            <Introduction data-aos="fade-up">
                                 
                                My name is Nishchal Bhardwaj, I was born in Indiaaaaaa.
                                I came to Canada in 2016, where I first started coding in high school. During highschool
                                I decided that I wanted to pursue Computer Science. 
                                Currently, I am pursuing my BSc degree in Computer Science at the <p className="schoolStyles">University of Ontechu</p>
                                I am planning to finish my degree by 2022                            
                            </Introduction>
                            
                        
                    </InformationWrapper>

                

            </InformationContainer>
        </>
    )
}

export default MainPages
{/* <Columns1>
                                

                        
                            </Columns1>
                            <Columns2>
                                <ImgWrapper>
                                    <Imgs />
                                </ImgWrapper>

                            
                            </Columns2> */}
