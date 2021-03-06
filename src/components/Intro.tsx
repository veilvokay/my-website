import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../assets/Images/profile-pic.png';

interface IIntroProps {
    isActive: boolean,
}

const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 65vw;
    height: 55vh;
    display: flex;

    // Below gradient is to create 2 color border
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index: 1;
`;

const SubBox = styled.div`
    position: relative;
    display: flex;
    width: 50%;

    .pic {
        position: absolute;
        bottom: 0;
        left: 50%;
        max-width: 500px; // TEMPORARTY
        width: 100%;
        height: auto;
        transform: translate(-50%, 0);
    }
`;

const Text = styled.div`
    padding: 2rem;
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child {
        color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
        font-size: calc(0.5rem + 1.5vw);
        font-weight: 300;
    }
`;

const ImgMotionDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const ImgBox = styled.div`
    padding: 1.5rem 3rem;
    border: 1px solid ${props => props.theme.text};
    
    span {
        font-size: 1.75rem;
    }
`;

const Intro = (props: IIntroProps) => {
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Roman.</h3>
                    <h6>I create websites and web applications.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <ImgMotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    {/* <img className='pic' src={Me} alt='Profile Pic' /> */}
                    <ImgBox>
                        <span>IMG</span>
                    </ImgBox>
                </ImgMotionDiv>
            </SubBox>
        </Box>
    );
};

export default Intro;
