import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { SkillsSection, SkillContainer, Heading } from './skillStyled'
import TestSkill from './testSkill'
import {DiJavascript} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {DiCss3} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {GrMysql} from 'react-icons/gr'
import {SiSpring} from 'react-icons/si'
import {SiPython} from 'react-icons/si'

import myResume from '../../Resume/resume.pdf'
import Aos from 'aos'
import "aos/dist/aos.css"

const Skills = () => {
    useEffect(()=>{
        Aos.init({duration: 3000});
        }, []);
    return (
        
        <>
            <SkillsSection id="skills" >
                <Heading data-aos="fade-up">Skills</Heading>
                <Link to="/projects">
                                    <button className="resumeButton" data-aos="fade-up">Projects</button>

                </Link>
                


                <SkillContainer data-aos="fade-up">
                    <TestSkill  img={<DiJavascript />} skillName={"JavaScript"} progress={"80%"} widthBar={80}/>
                    <TestSkill img={<FaReact/>} skillName={"React JS"} progress={"80%"} widthBar={80}/>
                    <TestSkill img={<SiSpring/>} skillName={"Spring Boot"} progress={"50%"} widthBar={50}/>
                    <TestSkill img={<FaJava/>} skillName={"Java"} progress={"80%"} widthBar={80}/>
                    <TestSkill img={<FaNodeJs/>} skillName={"Node JS"} progress={"70%"} widthBar={70}/>
                    <TestSkill img={<DiCss3/>} skillName={"CSS"} progress={"85%"} widthBar={85}/>
                    <TestSkill img={<AiFillHtml5/>} skillName={"HTML"} progress={"90%"} widthBar={90}/>
                    <TestSkill img={<GrMysql/>} skillName={"SQL"} progress={"80%"} widthBar={80}/>
                    <TestSkill img={<SiPython/>} skillName={"Python"} progress={"80%"} widthBar={80}/>

                </SkillContainer>

            </SkillsSection>
        </>
    )
}

export default Skills
