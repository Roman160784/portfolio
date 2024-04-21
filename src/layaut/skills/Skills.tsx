import React from 'react'
import styled from 'styled-components'
import { StyledContainer } from '../../components/Container'
import { FlexWrapper } from '../../components/flex_wrapper/FlexWrapper'
import { SectionsTitle } from '../../components/sectionsTitle/SectionsTitle'
import { Skill } from './Skill'
import { Fade } from "react-awesome-reveal";

export const Skills = () => {
    return (
        <StyledSkills id='skills'>
            <StyledContainer>
          <SectionsTitle>My Skills</SectionsTitle>
            <FlexWrapper wrap={'wrap'} justify='space-around'>
                <Fade cascade={true} damping={0.2}>
                <Skill discription={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus magnam fuga maiores quia, obcaecati sapiente! Et architecto maxime debitis cupiditate dolorum harum, exercitationem aspernatur possimus vero facere ad unde.'} title='html5' iconId={'html'}/>
                <Skill discription={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus magnam fuga maiores quia, obcaecati sapiente! Et architecto maxime debitis cupiditate dolorum harum, exercitationem aspernatur possimus vero facere ad unde.'}  title='css3' iconId={'css'}/>
                <Skill discription={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus magnam fuga maiores quia, obcaecati sapiente! Et architecto maxime debitis cupiditate dolorum harum, exercitationem aspernatur possimus vero facere ad unde.'}  title='React' iconId={'react'}/>
                <Skill discription={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus magnam fuga maiores quia, obcaecati sapiente! Et architecto maxime debitis cupiditate dolorum harum, exercitationem aspernatur possimus vero facere ad unde.'}  title='typescript' iconId={'ts'}/>
                <Skill discription={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus magnam fuga maiores quia, obcaecati sapiente! Et architecto maxime debitis cupiditate dolorum harum, exercitationem aspernatur possimus vero facere ad unde.'}  title='styled components' iconId={'styled'}/>
                <Skill discription={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus magnam fuga maiores quia, obcaecati sapiente! Et architecto maxime debitis cupiditate dolorum harum, exercitationem aspernatur possimus vero facere ad unde.'}  title='telegraf js' viewBox="-210 -230 450 450" iconId={'telegraf'}/>
                </Fade>
            </FlexWrapper>
            </StyledContainer>
        </StyledSkills>
    )


}


const StyledSkills = styled.section`
    position: relative; 
`