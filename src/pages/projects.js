import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/footer'
import {HiChevronDoubleUp} from 'react-icons/hi'
import {HiChevronDoubleDown} from 'react-icons/hi'
import arrow from '../images/arrow.png'
import {FaTruckLoading} from 'react-icons/fa'


import { PortfolioPage, ProjectTitle, PortfolioContainer, SingleProjectContainer, ProjectImage, ProjectName, ProjectDescription, CardStyled, HomeBtn } from '../components/Projects/projectStyled'
import { ProjectsData } from '../components/Projects/projectData'

const Projects = () => {
    

    const [projectData, setProjectData] = useState(ProjectsData);
    const [readMore, setReadMore] = useState(false);
    const [currentTitle, setCurrentTitle] = useState('');

    const functionToggle = (title)=>{
        setReadMore(!readMore);
        setCurrentTitle(title);
    }

    return (
        <>
            <PortfolioPage>

                <ProjectTitle>
                    Projects
                </ProjectTitle>
                <Link to="/">
                    <HomeBtn>home</HomeBtn>
                </Link>

                <PortfolioContainer>
                    <SingleProjectContainer>
                        {projectData.map((singleProject)=>{
                        const {title, description, image, id, githubLink} = singleProject;
                        const lessDescription = description.slice(0,100) + "....";
                        return (

                                <CardStyled  key={id}>

                                    <div>
                                    <ProjectImage src={image} alt="">
                                    </ProjectImage>
                                    <ProjectName>{title}</ProjectName>
                                    <a href={githubLink}>
                                        <button className="gitBtn">Source</button>
                                    </a>
                                    

                                    
                                    <div>
                                        {readMore && currentTitle === title ? <ProjectDescription>{description}</ProjectDescription>: <ProjectDescription>{lessDescription}</ProjectDescription>}
                                        {readMore ? <a href={githubLink}>
                                    </a> : null}
                                    </div>
                                    <span className="iconSize" onClick={()=>functionToggle(title)}>{readMore && currentTitle === title ? <HiChevronDoubleUp/> : <HiChevronDoubleDown/>}</span>
                                    </div>
                                </CardStyled>
                            
                                
                                
                            
                                
                        );
                    })}
                    </SingleProjectContainer>
                    
                </PortfolioContainer>

                
                

            </PortfolioPage>    
            <Footer/>
        </>
    )
}

export default Projects
