import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
    from{
        /* transform: rotate(0deg); */
        opacity: 0;
    }

    to{
        /* transform: rotate(360deg); */
        opacity: 1;
    }
 
`

export const PortfolioPage = styled.div`
    background: #002f47;
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    align-items: center;
    overflow-y: scroll;
    justify-content: center;
    


`

export const ProjectTitle = styled.h1`
    margin-top: 10px;
    color: white;
    align-items: center;
    letter-spacing: 2px;
    background-color: #ffe135;

    animation: ${rotate} 3s linear;

`
export const ButtonContainer = styled.div`
    align-items: center;
    justify-content: center;
    margin-top: 20px;
   
`

export const ButtonDiv = styled.div`
    align-items: center;
    justify-content: center;
    
    padding: 1rem;
    /* position: sticky; */

    @media screen and (max-width:300px){
        display: grid;
        grid-template-columns: 2fr 2fr;
    }

`


export const PortfolioContainer = styled.div`
    color: white;
    letter-spacing: 2px;
    position: absolute;
    margin-top: 1rem;
    padding: 30px;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    
`

export const DataBtn = styled.button`
    margin: 0.7rem;
    text-decoration: none;
    position: sticky;
    
    animation: ${rotate} 3s linear;
    margin-top: 15px;
    color: white;
    background: orange;
    border-color: orange;
    height: 2.5rem;
    width: 7rem;
    border-radius: 0.1rem;
    font-weight: normal;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    letter-spacing: 2px;
    box-shadow: 2px 2px lightblue;
    cursor: pointer;

    &:hover{
        color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px lightblue;
    transition: 0.2s ease-in-out;
    }
`


export const SingleProjectContainer = styled.div`
    
    position: relative;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    padding-bottom: 20px;
    height: 100%;
    width: auto;
    align-items: center;
    display: flex;
    justify-content: center;
        
    @media screen and (max-width: 1400px){
        display: grid;
        grid-template-columns: 2fr 2fr 2fr;
    }

    @media screen and (max-width: 950px){
        display: grid;
        grid-template-columns: 2fr 2fr;
        

    }

    @media screen and (max-width: 700px){
        display: grid;
        grid-template-columns: 2fr;
        
    }

`

export const ProjectImage = styled.img`
    width: 250px;
    height: 200px;
    border-radius: 2rem;

`

export const ProjectName = styled.h2`


`

export const ProjectDescription = styled.p`
    padding: 0.4rem;
    font-size: 13px;
    color: yellow;

`




export const CardStyled = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 1.5rem;
  width: 270px;
  padding-top: 0.5rem;
  border-radius: 1rem;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  color: white;
  min-height: 410px;
  animation: ${rotate} 3s linear;

  &:hover{
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px lightblue;
    transition: 0.5s ease-in-out;
  }

  @media screen and (max-width:300px){
      width: 265px
  }

`

export const HomeBtn = styled.button`
text-decoration: none;
animation: ${rotate} 3s linear;
margin-top: 15px;
  color: white;
  background: cornflowerblue;
  border-color: cornflowerblue;
  height: 2.7rem;
  width: 7rem;
  border-radius: 3em;
  font-weight: normal;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  letter-spacing: 2px;
  box-shadow: 2px 2px lightblue;
  cursor: pointer;
  font-size: 20px;

  &:hover{
      color: rgba(255, 255, 255, 1);
  box-shadow: 0 5px 15px lightblue;
  transition: 0.2s ease-in-out;
  }
`



