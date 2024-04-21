import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../components/flex_wrapper/FlexWrapper'
import { Icon } from '../../components/icon/Icon'
import { theme } from '../../styles/Theme'


type SkillPropsType = {
    iconId: string
    title: string
    discription: string
    viewBox?: string
}


export const Skill = ({ iconId, title, discription, viewBox, ...props }: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper dirrection='column' align='center'>
                <StyledIconWrapper>
                    <Icon iconId={iconId} viewBox={viewBox} />
                </StyledIconWrapper>
                <StyledSkillTitle>{title}</StyledSkillTitle>
                <StyledSkillText>
                    {discription}
                </StyledSkillText>
            </FlexWrapper>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
    width: 330px;
    //занимает всё свободное пространство
    flex-grow: 1;
    padding: 62px 20px 40px;

    @media ${theme.media.mobile}{
        padding: 62px 0 40px; 
    };

`
const StyledSkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;

`

const StyledSkillText = styled.p`
text-align: center;
line-height: 1.4;
    
`

export const StyledIconWrapper = styled.div`
    position: relative;

    &::before{
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;

    }

`