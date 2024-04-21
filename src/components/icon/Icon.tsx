import React from 'react'
import styled from 'styled-components'
import iconsSprite from '../../images/sprite.svg';

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = ({iconId, width, height, viewBox, ...props}: IconPropsType) => {
    return (
        <svg width={width || '50'} height={height || '50'} viewBox={viewBox || '0 0 50 50'} fill='none' xmlns="http://www.w3.org/2000/svg" >
            <use xlinkHref={`${iconsSprite}#${iconId}`} width={width || '50px'} height={height || '50px'}  />
        </svg>
    )
}