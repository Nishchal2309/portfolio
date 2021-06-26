import styled from "styled-components";
import contactImage from '../../images/contact.svg'

export const ContactContainer = styled.div`
    color: black;
    @media screen and (max-width: 900px){
        padding: 100px 0;
    }

`

export const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    z-index: 5;
    min-height: 550px;
    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 25px ;
    justify-content: center;


    @media  screen and (max-width:900px){
        display: grid;
        grid-template-columns: 2fr;

    }

`

export const LeftSide = styled.div`
    flex: 1;
    overflow: hidden;
`

export const RightSide= styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* white-space: nowrap; */

`
export const Heading = styled.h1`
    /* padding-top: 40px; */
    letter-spacing: 2px;
    font-weight: bold;
    align-items: center;
    background-color: cornflowerblue;
    color: white;
    /* text-decoration: underline solid #ffd700; */
    
    @media screen and (max-width: 500px){
    font-size: 30px;
    }

`

export const MadatoryTitle = styled.h3`
    letter-spacing: 2px;
    font-weight: bold;
    color: #fc6c85;
`