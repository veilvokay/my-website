import React from 'react';
import PowerButton from 'src/components/PowerButton';
import styled from 'styled-components';


const MainContainer = styled.div`
    background: ${props => props.theme.body} ;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    position: relative;

    h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }
`;

const Container = styled.div`
    padding: 2rem;
    
`;

const MainPage = () => {
    return (
        <MainContainer>
            <Container>
                <PowerButton />
            </Container>
        </MainContainer>
    );
};

export default MainPage;
