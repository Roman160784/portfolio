
import styled from 'styled-components'
import { font } from '../../styles/Common'
import { theme } from '../../styles/Theme'

export const SectionsTitle = styled.h2`
${font({family: "'Josefin Sans', sans-serif", weight: 600, fMax: 36, fMin: 30})};

    text-align: center;
    letter-spacing: 5px;
    margin-bottom: 90px;

    position: relative;

    &::before{
        content: '';
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};

        position: absolute;
        left: 50%;
        bottom: -30px;
        transform:translateX(-50%);

        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
    
`