

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import codingImg from '../../images/coding.png'
import stalker from '../../images/stalker.jpg'
import turkey from '../../images/turkey.jpg'
import china from '../../images/chinaWorks.jpg'
import competition from '../../images/competition.jpg'
import { theme } from '../../styles/Theme';
import '../../styles/slider.css'




type AboutMeType = {
    text: string;
    picture: string;
}

type SlidePropsType = {
    aboutMe: AboutMeType 
}

const aboutMe: AboutMeType[]  = [
    {picture: stalker, text: 'healthy lifestyle, life without alcohol and smoking'},
    {picture: codingImg, text: 'coding - part of my life, all free time near computer'},
    {picture: competition, text: 'I likes competitions'},
    {picture: turkey, text: 'prefer to travel'},
    {picture: china, text: 'and international projects'},
]

const Slide = ({aboutMe, ...props} : SlidePropsType) => {
    return (
        <StyledSlid>
            <StyledImg src={aboutMe.picture} alt='picture' />
            <StyledText>{aboutMe.text}</StyledText>
        </StyledSlid>

    )
}

const items = aboutMe.map((el, i) => {
    return(
        <Slide key={i} aboutMe={el}/>
    )
})

export const Slider = () => (
    <StyledSlider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </StyledSlider>
);

const StyledSlider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledSlide = styled.div`
max-width: 500px;
text-align: center;
`

const StyledSlid = styled.div`
max-width: 500px;
text-align: center;
`
const StyledText = styled.p`

`
const StyledImg = styled.img`
  width: 100%;
  max-height: 350px;
  object-fit: cover;
`

const StyledPagination = styled.div`

   span{
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;

    & + span{
        margin-left: 5px;
    }
    &.active{
        background-color: ${theme.colors.accent};
        width: 20px;
    }
   }
`