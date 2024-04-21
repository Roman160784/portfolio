import React, { ElementRef, useRef } from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../components/button/Button'
import { StyledContainer } from '../../components/Container'
import { SectionsTitle } from '../../components/sectionsTitle/SectionsTitle'
import { theme } from '../../styles/Theme'
import emailjs from '@emailjs/browser';


export const Contacts = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_xtkglb7', 'template_vvqulmb', form.current, 'aPqTGnfdbE-vI0nh5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    }




    return (
        <StyledContacts id={'contact'}>
            <StyledContainer>
                <SectionsTitle>Contact</SectionsTitle>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <StyledField required placeholder='Name' name={'user_name'} />
                    <StyledField required placeholder='Email' name={'email'} />
                    <StyledField required placeholder='Subject' name={'subject'} />
                    <StyledField required placeholder='Message' as='textarea' name={'message'} />
                    <StyledButton type={'submit'}>Send message</StyledButton>
                </StyledForm>
            </StyledContainer>
        </StyledContacts>
    )
}


const StyledContacts = styled.section`
   position: relative;
`
const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    //выровнять по цетру
    margin: 0 auto;

    textarea{
        resize: none;
        height: 155px;
    }

`
const StyledField = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};

    &::placeholder{
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }

    &:focus-visible{
        outline: 1px solid ${theme.colors.borderColor}
    }

`
