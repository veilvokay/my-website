import React, { useEffect, useState } from 'react';
import AnchorComponent from 'src/components/AnchorComponent';
import BlogComponent from 'src/components/BlogComponent';
import LogoComponent from 'src/components/LogoComponent';
import PowerButton from 'src/components/PowerButton';
import SocialIcons from 'src/components/SocialIcons';
import styled from 'styled-components';
import bgImg from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';

import { Blogs } from '../data/BlogData';


const MainContainer = styled.div`
    background-image: url(${bgImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
`;

const Container = styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
    width: 100%;
    height: auto;
    position: relative;
    padding-bottom: 5rem;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
`;

const BlogPage = () => {

    const [chainLength, setChainLength] = useState(0);

    useEffect(() => {
        const amount = (window.innerHeight - 70) / 30;

        setChainLength(Math.round(amount));
    }, []);


    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <AnchorComponent chainLength={chainLength} />

                <Center>
                    <Grid>
                        {Blogs.map(blog => {
                            return <BlogComponent key={blog.id} blog={blog} />;
                        })}
                    </Grid>
                </Center>

            </Container>
        </MainContainer>
    );
};

export default BlogPage;
