import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../components/button/Button'
import { StyledContainer } from '../../components/Container'
import { FlexWrapper } from '../../components/flex_wrapper/FlexWrapper'
import { SectionsTitle } from '../../components/sectionsTitle/SectionsTitle'


export const Slogan = () => {
    return (
        <StyledSlogan>
            <StyledContainer>
                <FlexWrapper dirrection='column' align='center'>
                    <SectionsTitle>First fifty years of childhood very hard for men </SectionsTitle>
                    <StyledButton >Hire me</StyledButton>
                </FlexWrapper>
            </StyledContainer>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #1b3221
`