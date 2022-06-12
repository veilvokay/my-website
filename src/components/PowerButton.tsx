import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IconPower } from './SVGs';


const Power = styled.button`
    padding: 0.3rem;
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: ${props => props.theme.body};
    border-radius: 50%;
    border: 1px solid ${props => props.theme.text};
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    cursor: pointer;

    &:hover {
        background-color: rgba(0, 255, 0, 0.4) ;
        box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
    }

    &>*:first-child {
        display: flex;
        text-decoration: none;
        color: inherit;
    }
`;

const PowerButton = () => {
    return (
        <Power>
            <NavLink to='/' >
                <IconPower width={30} height={30} fill='currentColor' />
            </NavLink>
        </Power>
    );
};

export default PowerButton;
