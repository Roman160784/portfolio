import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { animateScroll as scroll } from 'react-scroll'


export const Logo = () => {
    return (
        <a onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={'ts'} />
        </a>
    )
}