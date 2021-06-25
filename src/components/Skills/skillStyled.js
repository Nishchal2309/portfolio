import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroller} from 'react-scroll'
import styled from 'styled-components'
import aboutMe from '../../images/aboutMe.png'

export const SkillsSection = styled.div`
    color: white;
    background: #002f47;
    @media screen and (max-width: 900px){
        padding: 100px 0;
    }

`

export const SkillContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    column-gap:200px;
    z-index: 5;
    min-height: 550px;
    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 25px ;
    

    @media screen and (max-width: 900px){
        column-gap: 100px;
        display: grid;
        grid-template-columns: 2fr 2fr;
    }

    @media screen and (max-width: 440px){
        display: grid;
        grid-template-columns: 2fr;
        justify-content: center;

    }
    

`

export const SkillContent = styled.div`
    padding-top: 50px;

`

export const SkillName = styled.h5`
    letter-spacing: 2px;
    font-size: 15px;
    margin-top: 5px;
    position: absolute;
`
export const Percentage = styled.p`
    padding-top: 5px;

`
export const SkillAcomplish = styled.div`
    
    padding-left: 40px;
    position: absolute;


`

export const SkillProgrss = styled.div`


`

export const SkillBar = styled.div`
    width: 7rem;
    height: 0.5rem;
    margin-left: 1rem;
    background-color: #50BFE6;
    border-radius: 50px;
    position: absolute;
    cursor: pointer;

    &:hover{
        transition: 0.3s ease-in-out;
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 5px 15px lightblue;
    }

`

export const InnerProgress = styled.div`
    content: "";
    position: absolute;
    background-color: #CCFF00;
    border-radius: 50px;
    height: 100%;
    bottom: 0;
    left: 0;
`


export const Heading = styled.h1`
    /* padding-top: 40px; */
    margin-top: 10px;
    letter-spacing: 2px;
    font-weight: bold;
    align-items: center;
    background-color: #ffe135;
    /* text-decoration: underline solid #ffd700; */
    
    @media screen and (max-width: 500px){
    font-size: 30px;
    }

`