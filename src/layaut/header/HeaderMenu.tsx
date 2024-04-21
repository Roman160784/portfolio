import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'


const items = [
    { href: 'home', title: 'Home'},
    { href: 'skills', title: 'Skills'},
    { href: 'myProjects', title: 'My Projects'},
    { href: 'aboutMyself', title: 'About Myself'},
    { href: 'contact', title: 'Contact'},]

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <ul>
                {
                    items.map((el, i) => {
                        return (
                            <StyledListItem key={i}>
                                <StyledLink to={el.href} 
                                smooth={true}
                                activeClass='active'
                                spy={true}
                                >
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
        </StyledHeaderMenu>
    )
}


const StyledHeaderMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        justify-content: center;
    }

    @media ${theme.media.tablet} {
        display: none;
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
   transition: ${theme.animations.transition};

   & + & {
    top: 50%;
    span{
        display: inline-block;
        transform: translateY(-50%);
    }
   }
`


export const StyledLink = styled(Link)`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: transparent;

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
        transition: ${theme.animations.transition};
    }

    &:hover, &.active {
        &::before{
            transform: scale(1);
        }
        ${StyledMask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.font};

            & + ${StyledMask} {
            transform: skewX(12deg) translateX(-5px);
        }
        }
    }
    
`



const StyledListItem = styled.li`
    position: relative;

`