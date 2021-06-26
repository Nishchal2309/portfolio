// this file is for nav bar styled components
import styled from 'styled-components'
import {Link as LinkScroller} from 'react-scroll'
import {Link as LinkRouter} from 'react-router-dom'

export const Nav = styled.nav`
    background-color: #002f47;
    height: 90px;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    z-index: 10;
    top: 0;
    position: sticky;
    width: 100%;
    height: 100%;
    -o-object-fit: none;
    object-fit: none;

@media screen and (max-width: 1000px){
    transition: 1s all ease;
}

`

export const NavContainer = styled.div`
    display: flex;
    justify-self: space-between;
    height: 90px;
    padding: 0.75rem 1.5rem;
    z-index: 1;
    position: sticky;
    /* max-width: 1100px; */

`
export const NavLogo = styled(LinkScroller)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    margin-bottom: 15px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    font-family: Aclonica;
    letter-spacing: 0.1rem;

    @media screen and (max-width:950px){
    font-size: 1.8rem;
    }

    @media screen and (max-width:700px){
    font-size: 1.6rem;
    }

`

export const BurgerMenu = styled.div`
    display: none;

@media screen and (max-width: 950px){
    color: white;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    cursor: pointer;
    /* transform: translate(-90%, 90%); */
    transform: translate(-30px, 25px);

}

`

export const ManuItems = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: 250px;

@media screen and (max-width: 950px){
    display: none;
}

`
export const SingleItem = styled.li`
    height: 140px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    margin-top: 60px;
    position: absolute;
    padding-top: 25px;
    padding-bottom: 25px;

`

export const Item= styled(LinkScroller)`
    color: white;
    align-items: center;
    cursor: pointer;
    text-decoration:none;
    font-size: 15px;
    height: 100%;

 
`
export const ProjectContainer = styled.nav`
    display: flex;
    align-items: center;
    padding-left: 400px;

@media screen and (max-width: 950px){
    display: none;
}    

`




