import React, {useState, useEffect, Component} from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/footer'
import {HiChevronDoubleUp} from 'react-icons/hi'
import {HiChevronDoubleDown} from 'react-icons/hi'
import arrow from '../images/arrow.png'
import {FaTruckLoading} from 'react-icons/fa'


import { PortfolioPage, ProjectTitle, PortfolioContainer, SingleProjectContainer, ProjectImage, ProjectName, ProjectDescription, CardStyled, HomeBtn, ButtonContainer, ButtonDiv, DataBtn } from '../components/Projects/projectStyled'
import { ProjectsData } from '../components/Projects/projectData'
import { ButtonNames } from '../components/Projects/projectData'

const Projects = () => {
    

    const [projectData, setProjectData] = useState(ProjectsData);
    const [buttonData, setButtonData] = useState(ButtonNames);
    const [filterSkill, setFilterSkill] = useState([]);
    const [readMore, setReadMore] = useState(false);
    const [currentTitle, setCurrentTitle] = useState('');

    const functionToggle = (title)=>{
        setReadMore(!readMore);
        setCurrentTitle(title);
    }

    // const filterItems = (skillName) =>{
    //     const filteredItems = projectData.filter(item => item.skillName === skillName)
    //     setProjectData(filteredItems);
    // }

    const handleFilterBtns = (e)=>{
        let skill = e.target.value;

        if(skill === 'All'){
            setProjectData(ProjectsData);
        }else if(skill === 'JavaScript'){
            const filterResult = ProjectsData.filter((item) => item.category ==='JavaScript')
            setProjectData(filterResult)
        }else if(skill === 'Java'){
            const filterResult = ProjectsData.filter((item) => item.category ==='Java')
            setProjectData(filterResult)

        }else if(skill === 'React'){
            const filterResult = ProjectsData.filter((item) => item.category ==='React')
            setProjectData(filterResult)

        }
    }

    
    return (
        <>
            <PortfolioPage>
                {/* testing something out */}
                
                <ProjectTitle>
                    Projects
                </ProjectTitle>
                <Link to="/">
                    <HomeBtn>Home</HomeBtn>
                </Link>
                
                <ButtonContainer>
                    <ButtonDiv>
                        {buttonData.map((singleVal)=>{
                            const {id, value, skillName} = singleVal;
                            return(
                                
                                <DataBtn onClick={handleFilterBtns} key={id} value={value}>{skillName}</DataBtn>
                            );
                        })}
                                        
                    </ButtonDiv>           
                </ButtonContainer>
                
                <PortfolioContainer>
                    
                    <SingleProjectContainer>
                        
                        {projectData.map((singleProject)=>{
                        const {title, description, image, id, githubLink, category} = singleProject;
                        const lessDescription = description.slice(0,100) + "....";
                        
                        return (
                            <div>
                                
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
                            </div>
                                
                        );
                    })}
                    </SingleProjectContainer>
                    {filterSkill.map((testing)=>{
                    
                    return(
                        console.log(testing.skillName)
                    );
                })}
                    
                </PortfolioContainer>

                
                

            </PortfolioPage>    
            <Footer/>
        </>
    )
}

export default Projects
