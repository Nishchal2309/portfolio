import {React, useState, useEffect} from 'react'
import { HeroContainer, NestedContainer,AutoVideo, HContent, ImageContainer, TitleTest, MyImage, BtnContainer, ScrollDownBtn, HTag, JobChanger } from './HeroStyled'
import BackVideo from '../../videos/video.mp4'
import picture from '../../images/Nish.jpeg'
import {Spring} from 'react-spring'
import Aos from 'aos'
import "aos/dist/aos.css"
import {FaArrowDown} from 'react-icons/fa'
import Typical from 'react-typical'
import {ImBooks} from 'react-icons/im'

const Hero = () => {
    useEffect(()=>{
        Aos.init({duration: 3000});
    }, []);

    const [isHover, setIsHover] = useState(false);

    const toggleScroll = () =>{
        setIsHover(!isHover);
    }
    return (
        <HeroContainer>
            <NestedContainer>
                <AutoVideo autoPlay loop muted src={BackVideo} type='video/mp4'>

                </AutoVideo>
            </NestedContainer>


            <HContent>
                <ImageContainer >
                    
                    <MyImage src={picture}/>

                    
                </ImageContainer>
                <h1 className="testSth" >"Welcome,  I'm </h1> <TitleTest>Nishchal Bhardwaj</TitleTest><h1 className="testSth">"</h1>
                <JobChanger>I am a {' '}
                    
                    <Typical className="styledJobs"
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Student' , 3000,
                            'Coder',<ImBooks className="iconHandler"/>, 3000,
                            'Web Developer',<ImBooks className="iconHandler"/>, 4000,
                            'Fitness Lover',<ImBooks className="iconHandler"/>, 4000
                        ]}
                    
                    />
                </JobChanger>


                {/* <h3>Hello, </h3>
                <TitleTest>Nishchal Bhardwaj</TitleTest> */}
                <BtnContainer>
                    <ScrollDownBtn to="description" onMouseEnter={toggleScroll} onMouseLeave={toggleScroll}>
                        {isHover ?  <FaArrowDown/> : <HTag>Read More</HTag>}
                    </ScrollDownBtn>
                </BtnContainer>
            </HContent>
        </HeroContainer>
    )
}

export default Hero
