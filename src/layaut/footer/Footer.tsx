import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../components/flex_wrapper/FlexWrapper'
import { Icon } from '../../components/icon/Icon'
import { font } from '../../styles/Common'
import { theme } from '../../styles/Theme'

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper dirrection='column' align='center'>
                <StyledName>Roman</StyledName>
                <StyledSocialIconsList>
                    <StyledSocialIconsItem>
                        <SocialIconLink>
                            <Icon height='21' width='21' viewBox='0 0 21 21' iconId={'tg'} />
                        </SocialIconLink>
                    </StyledSocialIconsItem>
                    <StyledSocialIconsItem>
                        <SocialIconLink>
                            <Icon height='21' width='21' viewBox='0 0 21 21' iconId={'insta'} />
                        </SocialIconLink>
                    </StyledSocialIconsItem>
                    <StyledSocialIconsItem>
                        <SocialIconLink>
                            <Icon height='21' width='21' viewBox='0 0 21 21' iconId={'code'} />
                        </SocialIconLink>
                    </StyledSocialIconsItem>

                </StyledSocialIconsList>
                <StyledCopyright>© 2023 Roman Matveyenko, All Rights Reserved.</StyledCopyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    position: relative;
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const StyledName = styled.span`

    ${font({family:"'Josefin Sans', sans-serif", weight: 700, fMax: 22, fMin: 16})}
    letter-spacing: 3px;


`

const StyledSocialIconsList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const StyledSocialIconsItem = styled.li`
    
`
const SocialIconLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${theme.animations.transition};
    color: ${theme.colors.accent};

    &:hover{
        color: ${theme.colors.primaryBg};
        /* transform: scale(1.5); */
        transform: translateY(-5px);
    }
`
const StyledCopyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`