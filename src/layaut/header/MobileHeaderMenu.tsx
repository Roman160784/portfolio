import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/Theme'
import { StyledLink } from './HeaderMenu'

const items = [
    { href: 'home', title: 'Home'},
    { href: 'skills', title: 'Skills'},
    { href: 'myProjects', title: 'My Projects'},
    { href: 'aboutMyself', title: 'About Myself'},
    { href: 'contact', title: 'Contact'},]

export const MobileHeaderMenu = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const onMenuBureger = () => {
        setMenuOpen(!menuOpen) 
    }
    

    return (
        <StyledMobileHeaderMenu>
            <StyledBurgerButton onClick={onMenuBureger} isOpen={menuOpen}>
                <span></span>
            </StyledBurgerButton>

            <StyledMobileMenuPopup isOpen={menuOpen} onClick={() => setMenuOpen(false)}>
                <ul>
                    {
                        items.map((el, i) => {
                            return (
                                <StyledListItem key={i}>
                                    <StyledLink to={el.href}>
                                        {el.title}
                                        <StyledMask>
                                            <span>
                                                {el.title}
                                            </span>
                                        </StyledMask>
                                        <StyledMask>
                                            <span>
                                                {el.title}
                                            </span>
                                        </StyledMask>
                                    </StyledLink>
                                </StyledListItem>
                            )
                        })
                    }
                </ul>

            </StyledMobileMenuPopup>

        </StyledMobileHeaderMenu>
    )
}


const StyledMobileHeaderMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`
const StyledMobileMenuPopup = styled.div<{ isOpen: boolean }>`
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 99999;

background-color: rgba(31, 31, 32, 0.9);

   display: flex;
   justify-content: center;
   align-items: center; 
   transform: translateY(-100%);
   transition: .7s ease-in-out;



    ul{
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: .7s ease-in-out;
    } 

 ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);

    & ul {
        gap: 40px;
    }
`}
`

const StyledBurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 99999999;

    span{
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}>` 
        background-color: rgba(255, 255, 255, 0);
        
`}

&::before{
        content: '';
        display: block;
        width: 36px;
        height: 2px;;
        background-color: ${theme.colors.font};
        position: absolute; 
        transform: translateY(-10px);

        ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0px);  
`} 
        }
    
        &::after{
        content: '';
        display: block;
        width: 24px;
        height: 2px;;
        background-color: ${theme.colors.font};
        position: absolute; 
        transform: translateY(10px);

        ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0px);
        width: 36px;
        
`}
}  
        } 
        
`





const StyledMask = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   display: inline-block;
   height: 50%;
   overflow-y: hidden;
   /* outline: 1px solid red;  */
   color: ${theme.colors.accent};
   & + & {
    top: 50%;
    span{
        display: inline-block;
        transform: translateY(-50%);
    }
   }
`

const StyledListItem = styled.li`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }


    &:hover {
        &::before{
            transform: scale(1);
        }
        ${StyledMask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.font};

            & + ${StyledMask} {
            transform: skewX(12deg) translateX(-5px) 
        }
        }
       
    }

`