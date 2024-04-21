import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from 'react-scroll'

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])


    return (
        <>
            {
                showBtn && <StyledGoTop onClick={() => { scroll.scrollToTop() }}>
                <Icon iconId={"goTop"} height="28" width="26" viewBox={"0 0 27 24"} />
            </StyledGoTop>
        
                    
            }

        </>

    )
}


const StyledGoTop = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`