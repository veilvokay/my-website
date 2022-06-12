import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from './Themes';

interface ILogoComponentProps {
    theme: 'dark' | 'light'
}

const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
    font-family: 'Pacifico', cursive;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;
`;

const LogoComponent = (props: ILogoComponentProps) => {
    return (
        <Logo color={props.theme}>RY</Logo>
    );
};

export default LogoComponent;
