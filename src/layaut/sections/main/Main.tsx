import React from 'react'
import styled from 'styled-components'
import { StyledContainer } from '../../../components/Container'
import { FlexWrapper } from '../../../components/flex_wrapper/FlexWrapper'
import myPhoto from '../../../images/my_photo.jpg'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main = () => {


    return (
        <StyledMain id='home'>
            <StyledContainer>
                <FlexWrapper align='center' justify='space-between' wrap='wrap'>
                    <div>
                        <StyledSmallText>Hi Everyone</StyledSmallText>
                        <StyledName> I'm <span>Roman Matveyenko</span> </StyledName>
                        <StyledMainTitle>
                            <p>A Frontend Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Frontend Developer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                }}
                            />
                        </StyledMainTitle>
                    </div>
                    <Tilt
                    className="parallax-effect-img"
                    tiltMaxAngleX={40}
                    tiltMaxAngleY={40}
                    perspective={800}
                    transitionSpeed={1500}
                    scale={1.1}
                    gyroscope={true}
                    >
                    <StyledPhotoWrapper>
                        <StyledPhoto src={myPhoto} alt="My photo" />
                    </StyledPhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </StyledContainer>
        </StyledMain>
    )
}

const StyledPhoto = styled.img`
    width: 350px;
    height:430px;
    object-fit: cover;
    margin-right: 20px;

    @media ${theme.media.mobile}{
        width: 310px;
        height: 380px;
    }
`

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #7bb1df;
    display: flex;
`

const StyledMainTitle = styled.h1`
${font({ weight: 400, fMax: 27, fMin: 20 })};

p{
    display: none;
} 
`
const StyledName = styled.h2`
    ${font({ family: "'Josefin Sans', sans-serif", weight: 700, fMax: 50, fMin: 36 })}
    letter-spacing: 0.05em;
    margin: 10px 0;

    span{
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before{
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
    @media ${theme.media.mobile}{
        margin: 15px 0 22px;
    }
`
const StyledSmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
`

const StyledPhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;


    &::before{
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile}{
        width: 314px;
        height: 414px;
        top: -17;
        left: 20;
    }
    }

`