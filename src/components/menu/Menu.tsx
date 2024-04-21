import React from 'react'
import styled from 'styled-components'
import { StyledLink } from '../styledLink/StyledLink'

export type StatusType = 'all' | 'react' | 'bot'

type MenuPropsType = {
    changeFilterStatus: (status: StatusType) => void
    tabsItems: Array<{title: string, status: StatusType}>
    currentFilter: StatusType
}


export const Menu = ({tabsItems, changeFilterStatus, currentFilter, ...props}: MenuPropsType) => {

  
    return(
        
        <StyledMenu>
        <ul>
        {
                tabsItems.map((el, i) => {
                    return(
                       <StyledListIlem onClick={() => {changeFilterStatus(el.status)}} key={i}> 
                       <StyledLink active={currentFilter === el.status} as={'button'} >{el.title}</StyledLink>
                       </StyledListIlem> 
                    )
                })
            }
        </ul>
    </StyledMenu>
    )
}

const StyledMenu = styled.nav`

    ul{
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`

const StyledListIlem = styled.li`
  
`


