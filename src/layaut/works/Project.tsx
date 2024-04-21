import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../components/button/Button'
import { StyledLink } from '../../components/styledLink/StyledLink'
import { theme } from '../../styles/Theme'
import { projectType } from './Works'

type ProjectPropsType = {
    project: projectType
}

export const Project = ({ project, ...props }: ProjectPropsType) => {
    return (
        <StyledProject>

            <StyledImageWrapper>
                <StyledImg src={project.src} alt='picture' />
                <StyledButton>
                    View project
                </StyledButton>
            </StyledImageWrapper>

            <StyledDiscription>
                <StyledTitle>{project.title}</StyledTitle>
                <StyledText>{project.text}</StyledText>
                <StyledLink active href={project.demo}>demo</StyledLink>
                <StyledLink href={project.code}>code</StyledLink>
            </StyledDiscription>

        </StyledProject>
    )
}

const StyledProject = styled.div`
    
    /* width: 330px;
    flex-grow: 1; */
    background-color: ${theme.colors.secondaryBg};
    
   ${StyledLink} {
    padding: 10px 0; 
    
    & + ${StyledLink} {
    margin-left: 20px;
    };
   };

   /* @media ${theme.media.dsesktop} {
    max-width: 540px;
   } */

`

const StyledImageWrapper = styled.div`
    position: relative;

    ${StyledButton} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -30%);
        transition: ${theme.animations.transition};

        &::before{
             width: 100%;;
             height: 100%;
        }
    }

    &::before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2px);
        opacity: 0;
        transition: ${theme.animations.transition}
     }

    &:hover{
        &::before {
            opacity: 1;
        }

        ${StyledButton} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }


   @media ${theme.media.tablet}{

    &::before{
        opacity: 1;
    }

    ${StyledButton} {
            opacity: 1;
        }

   }

`

const StyledImg = styled.img`
width: 100%;
height: 260px;
object-fit: cover;   
`

const StyledTitle = styled.h3`
    
`
const StyledText = styled.p`
    margin: 14px 0 10px;
`
const StyledDiscription = styled.div`
    padding: 25px 20px;

`