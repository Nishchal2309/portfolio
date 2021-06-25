import styled from "styled-components";
import picture from '../../images/nishchal.jpg'
import { keyframes } from "styled-components";
import {Link as LinkScroller} from 'react-scroll'
import {Link as LinkRouter} from 'react-router-dom'




export const HeroContainer = styled.div`
    background: #002f47;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    z-index: 1;
    height:650px;
    position: relative;

`

export const NestedContainer = styled.div`
    background: #002f47;

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

export const AutoVideo = styled.video`

    width: 100%;
    height: 100%;
    -o-object-fit: fill;
    object-fit: fill;
    background: white;

`


export const HContent = styled.div`
    display: gird;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    z-index: 5;
    width: 1000px;

`

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


export const TitleTest = styled.h1`
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 43px;
    color: #FFFF66;
    animation: ${rotate} 3s linear;
    display:inline;

    @media screen and (max-width: 900px){
        font-size: 40px;
    }

    @media screen and (max-width: 700px){
        font-size: 25px;
    }

`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
 
`

export const MyImage = styled.img`
    width: 350px;
    height: 250px;
    border-radius: 50%;
    margin: 15px;
    animation: ${rotate} 3s linear;
    cursor: pointer;

    @media screen and (max-width: 900px){
        width: 300px;
        height: 200px;


    }
    @media screen and (max-width: 700px){
        width: 250px;
        height: 150px;


    }

    &:hover{
        animation: ${rotate} 3s linear infinite;

    }

`


export const BtnContainer = styled.div`
    margin: 30px;
    align-items: center;
    display: flex;
    flex-direction: column;

`

export const ScrollDownBtn = styled(LinkScroller)`

text-decoration: none;
color: rgba(255, 255, 255, 0.8);
background: cornflowerblue;
border-color: cornflowerblue;
height: 2.5rem;
width: 6rem;
border-radius: 3em;
font-size: 15px;
font-weight: normal;
text-transform: uppercase;
transition: all 0.2s ease-in-out;
font-weight: bold;
letter-spacing: 2px;
box-shadow: 2px 2px lightblue;
cursor: pointer;
animation: ${rotate} 3s linear;



&:hover{
color: rgba(255, 255, 255, 1);
  box-shadow: 0 5px 15px lightblue;
}

`


export const HTag = styled.h4`
    /* animation: ${rotate} 3s linear; */

`

export const JobChanger = styled.p`
  margin-top: 5px;

    letter-spacing: 3px;
    color: white;
    font-size: 25px;

    @media screen and (max-width: 900px){
        font-size: 20px;
    }

    @media screen and (max-width: 700px){
        font-size: 15px;
    }


`