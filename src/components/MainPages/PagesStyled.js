import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroller} from 'react-scroll'
import styled from 'styled-components'
import aboutMe from '../../images/aboutMe.png'

export const InformationContainer = styled.div`
    color: black;
    /* background: ${({changeBackground}) => (changeBackground ? 'black' : 'white')}; */
    /* background-image: url(${aboutMe}); */
    @media screen and (max-width: 900px){
        padding: 100px 0;
    }

`



export const InformationWrapper = styled.div`
    display: grid;
    z-index: 5;
    min-height: 550px;
    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 25px ;
    justify-content: center;
    background-image: url(${aboutMe});

    

`

export const TextContainer = styled.div`
    top: 0;
    max-width: 700px;
    margin: auto;
    width: 50%;
    justify-content: center;
    

`

export const Heading = styled.h1`
    font-weight: bold;
    align-items: center;
    letter-spacing: 2px;
    
    @media screen and (max-width: 500px){
    font-size: 30px;
    }

`
export const Introduction = styled.p`
    max-width: 700px;
    border: 10px solid #002f47;
    margin: 50px;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 22px;

    @media screen and (max-width: 900px){
            max-width: 600px;

        font-size: 17px;
    }

    @media screen and (max-width: 700px){
            max-width: 500px;

        font-size: 14px;
    }
`



// export const Columns1 = styled.div`
//     margin-bottom: 20px;
//     padding: 0 15px;
//     grid-area: col1;

// `

// export const Columns2 = styled.div`
//     margin-bottom: 20px;
//     padding: 0 15px;
//     grid-area: col1;

// `

// export const ImgWrapper = styled.div`
//     max-width: 600px;
//     height: 500px;

// `

// export const InformationRows = styled.div`
//     display: grid;
//     grid-template-columns: 1fr;
    
//     /* align-items: center; */
//     /* grid-template-areas: ${({aboutImage}) => (aboutImage ? `'col2 col1'` : `'col1 col2'`)};

//     @media screen and (max-width: 900px){
//         grid-template-areas: ${({aboutImage}) => (aboutImage ? `'col1 col2'` : `'col1 col1' 'col2 col2`)};

//     } */

// `
// export const BackgroundImageAbout = styled.div`
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 500px;
// `