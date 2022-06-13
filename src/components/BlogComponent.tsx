import React from 'react';
import { NavLink } from 'react-router-dom';
import { IBlogPost } from 'src/data/BlogData';
import styled from 'styled-components';

interface IBlogComponentProps {
    blog: IBlogPost,
}

const Box = styled(NavLink)`
    padding: 1rem;
    width: calc(10rem + 15vw);
    height: 20rem;
    color: ${props => props.theme.text};
    text-decoration: none;
    border: 2px solid ${props => props.theme.text};
    backdrop-filter: blur(2px);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;

    display: flex;
    flex-direction: column;
    z-index: 5;

    &:hover {
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
        transition: all 0.3s ease;
    }
`;

const Image = styled.div<{img: string}>`
    background-image: ${props => `url(${props.img})`};
    width: 100%;
    height: 60%;
    background-size: cover;
    border: 1px solid transparent;
    background-position: center center;

    ${Box}:hover & {
        border: 1px solid ${props => props.theme.body};
    }
`;

const Title = styled.h3`
    color: inherit;
    padding: 1rem 0 0.5rem 0;
    font-family: 'Karla', sans-serif;
    font-weight: 700;
    border-bottom: 1px solid ${props => props.theme.text};

    ${Box}:hover & {
        border-bottom: 1px solid ${props => props.theme.body};
    }
`;

const HashTags = styled.div`
    padding: 0.5rem 0;
`;

const Tag = styled.span`
    padding-right: 0.5rem;
`;

const Date = styled.span`
    padding: 0.5rem 0;
`;

const BlogComponent = (props: IBlogComponentProps) => {
    const { name, tags, date, imgSrc, link } = props.blog;
    return (
        <Box target='_blank' to={{ pathname: link }}>
            <Image img={imgSrc} />
            <Title>{name}</Title>
            <HashTags>
                {tags.map((tag, i) => {
                    return <Tag key={i}>#{tag}</Tag>;
                })}
            </HashTags>
            <Date>
                {date}
            </Date>
        </Box>
    );
};

export default BlogComponent;
