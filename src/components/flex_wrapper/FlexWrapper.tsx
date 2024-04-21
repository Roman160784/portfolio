import styled from "styled-components";

type FlexWrapperPropsType = {
    dirrection?: string
    justify?: string
    align?: string
    wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.dirrection || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    height: 100%;
`
    

    