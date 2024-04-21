import React from 'react'
import styled from 'styled-components'
import { StyledContainer } from '../../components/Container'
import { FlexWrapper } from '../../components/flex_wrapper/FlexWrapper'
import { Logo } from '../../components/logo/Logo'
import { theme } from '../../styles/Theme'
import { HeaderMenu } from './HeaderMenu'
import { MobileHeaderMenu } from './MobileHeaderMenu'



export const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
                <FlexWrapper justify='space-between' align='center'>
                    <Logo />
                    <HeaderMenu  />
                    <MobileHeaderMenu />
                </FlexWrapper>
            </StyledContainer>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: ${theme.colors.secondaryBg};
    padding: 20px 0;
    //фиксируем Header при сколле
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`