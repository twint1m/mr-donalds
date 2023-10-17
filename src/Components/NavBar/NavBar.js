import React from "react";
import styled from "styled-components";
import logoImg from "../../image/logo.svg"

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #299B01;
    color: white;
`


const Logo = styled.div`
    display: flex; 
    align-items: center;
`

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px; 
`

const ImgLogo = styled.img`
    width: 50px;
`

const LoginButton = styled.button`
    padding: 10px 15px;
    border: 0;
    border-radius: 10px;
    align-items: center;
    appearance: none;
    background-color: #fff;
    border-radius: 24px;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
    color: #3c4043;
    letter-spacing: .25px;
    line-height: normal;
    max-width: 100%;
    padding: 2px 24px;
    text-align: center;
    text-transform: none;
    transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
    height: 30px;
}
`

export const NavBar = () => {
    return(
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logoImg} alt="logo "/>
                <H1>MrDonald's</H1>
            </Logo>
            <LoginButton>Войти</LoginButton>
        </NavBarStyled>
    )
}