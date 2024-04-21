import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../components/flex_wrapper/FlexWrapper'
import { Menu, StatusType } from '../../components/menu/Menu'
import { SectionsTitle } from '../../components/sectionsTitle/SectionsTitle'
import { Project } from './Project'
import flashCardsImg2 from '../../images/flachCards.jpg'
import tgBotImg from '../../images/tfBotImg.png'
import todoListImg from '../../images/to-do-lists.jpeg'
import { StyledContainer } from '../../components/Container'
import { AnimatePresence, motion } from "framer-motion"

const tabsItems : Array<{title: string, status: StatusType}> = [
{title: 'All', status: 'all'},
{title: 'React', status: 'react'},
{title: 'BOT', status: 'bot'},
]

export type projectType = {
    id: string
    title: string
    text: string
    src: string
    filter: string
    demo: string
    code: string
}

const projects: projectType[] = [
    { id: '1', title: 'ToDo List', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quae amet totam esse dicta dolores cupiditate maiores deleniti obcaecati odit nesciunt est corporis, pariatur a enim omnis rerum suscipit veritatis.', src: todoListImg, filter: 'react', demo: '#', code: '#' },
    { id: '2', title: 'Flash cards', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quae amet totam esse dicta dolores cupiditate maiores deleniti obcaecati odit nesciunt est corporis, pariatur a enim omnis rerum suscipit veritatis.', src: flashCardsImg2, filter: 'react', demo: '#', code: '#' },
    { id: '3', title: 'Telegram Bot', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quae amet totam esse dicta dolores cupiditate maiores deleniti obcaecati odit nesciunt est corporis, pariatur a enim omnis rerum suscipit veritatis.', src: tgBotImg, filter: 'bot', demo: '#', code: '#' },
]

export const Works = () => {

    const [currentFilter, setCurrentFilter] = useState<StatusType>('all')

let filtredProjects = projects


if(currentFilter === 'react') {
    filtredProjects = projects.filter(el => el.filter === 'react')
}

if(currentFilter === 'bot') {
    filtredProjects = projects.filter(el => el.filter === 'bot')
}


const changeFilterStatus = (status: StatusType) => {
    setCurrentFilter(status)
}

    return (
        <StyledWorks id='myProjects'>
            <StyledContainer>
                <SectionsTitle>My Projects</SectionsTitle>
                <Menu tabsItems={tabsItems} 
                changeFilterStatus={changeFilterStatus}
                currentFilter={currentFilter}
                />
                <FlexWrapper justify='space-between' align='flex-start' wrap='wrap'>

                <AnimatePresence>
                    {
                        filtredProjects.map(el => {
                            return (
                                <motion.div
                                style={{width: '400px', flexGrow: 1, maxWidth: '540px'}}
                                layout={true}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={el.id}
                                >
                                <Project key={el.id} project={el} />
                                </motion.div>
                            )
                        }
                        )
                    }
                    </AnimatePresence>

                </FlexWrapper>
            </StyledContainer>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
   ${FlexWrapper} {
    gap: 30px;
   };
   position: relative;
`