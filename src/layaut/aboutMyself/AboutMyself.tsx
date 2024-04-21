import React from 'react'
import styled from 'styled-components'
import { StyledContainer } from '../../components/Container'
import { FlexWrapper } from '../../components/flex_wrapper/FlexWrapper'
import { Icon } from '../../components/icon/Icon'
import { SectionsTitle } from '../../components/sectionsTitle/SectionsTitle'
import { Slider } from '../../components/slider/Slider'
import { StyledIconWrapper } from '../skills/Skill'


export const AboutMyself = () => {
    return (
        <StyledAboutMyself id='aboutMyself'>
            <StyledContainer>
            <SectionsTitle>About Myself</SectionsTitle>
            <FlexWrapper dirrection={'column'} align={'center'}>
                <Slider />
            </FlexWrapper>
            </StyledContainer>
        </StyledAboutMyself>
    )
}

const StyledAboutMyself = styled.section`
    position: relative;
    min-height: 50vh;
    background-color: #649dcf;

    ${StyledIconWrapper}{
        margin: 32px 0 72px;
    }
`
