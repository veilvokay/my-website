import React from 'react';
import styled from 'styled-components';
import { IconFacebook, IconGithub, IconTwitter, IconYouTube } from './SVGs';
import { DarkTheme } from './Themes';

interface ISocialIconsProps {
    theme?: 'dark' | 'light',
}

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;
    
    z-index: 3;

    &>*:not(:last-child) {
        margin: 0.5rem 0;
    }

    a {
        display: flex;
        color: inherit;
    }
`;

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props: ISocialIconsProps) => {
    return (
        <Icons>
            <div>
                <a target='_blank' href='https://github.com/veilvokay'>
                    <IconGithub width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}/>
                </a>
            </div>
            <div>
                <a target='_blank' href='https://twitter.com/veilvokay'>
                    <IconTwitter width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}/>
                </a>
            </div>
            <div>
                <a target='_blank' href='https://facebook.com/veilvokay'>
                    <IconFacebook width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}/>
                </a>
            </div>
            <div>
                <a target='_blank' href='https://youtube.com/veilvokay'>
                    <IconYouTube width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}/>
                </a>
            </div>

            <Line color={props.theme} />
        </Icons>
    );
};

export default SocialIcons;
