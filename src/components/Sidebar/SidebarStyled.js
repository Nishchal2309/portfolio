// this file is for side bar styled components
import styled from 'styled-components'
import {Link as LinkScroller} from 'react-scroll'
import {Link as LinkRouter} from 'react-router-dom'
import {ImCross} from 'react-icons/im'


export const SideContainer = styled.aside`
    z-index:999;
    position: fixed;
    width: 100%;
    height: 100%;
    background:#002f47;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.1s ease-in;
    opacity: ${({sideOpen})=>(sideOpen ? '100%':'0')};
    top: ${({sideOpen})=>(sideOpen ? '0':'-100%')};



`
export const IconContainer = styled.div`
    position: fixed;
    background: transparent;
    top: 1.2rem;
    right: 2rem;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`

export const CloseBtn  = styled(ImCross)`
    color: white;
    width: 1.5rem;
    height: 1.5rem;

`

export const SideWraps = styled.div`
    color: black;

`
export const SideManuItems = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    grid-template-rows: repeat(3, 75px);

    @media screen and (max-width:600px){
        grid-template-rows: repeat(3, 55px);

    }

`

export const Item = styled(LinkScroller)`
    /* display: flex;
    align-items: center;
    justify-content: center; */
    text-decoration: none;
    transition: 0.3s ease-in;
    color: white;
    cursor: pointer;

    &:hover{
        color: #ffd700;
        transition: 0.3s ease-in
    }

`

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
`
// button styling
export const SideButton = styled(LinkRouter)`
    cursor: pointer;
    
    text-decoration: none;
`


