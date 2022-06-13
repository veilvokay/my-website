import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IconAnchor, IconLink } from './SVGs';

interface IAnchorComponentProps {
    chainLength: number,
}

const Container = styled.div`
    position: relative;
`;

const Slider = styled.div`
    position: fixed;
    top: 0;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    
    .chain {
        transform: rotate(135deg);
    }
`;

const PreDisplay = styled.div`
    position: absolute;
    top: 0;
    right: 2rem;
`;

const AnchorComponent = (props: IAnchorComponentProps) => {
    const ref = useRef(null);
    const hiddenRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.offsetHeight;

            const diff = Math.max(bodyHeight - (scrollPosition + windowHeight));
            // diff * 100 / scrollPosition
            const diffP = (diff * 100) / (bodyHeight - windowHeight);

            ref.current.style.transform = `translateY(${-diffP}%)`;

            if (window.scrollY > 5) {
                hiddenRef.current.style.display = 'none';
            } else {
                hiddenRef.current.style.display = 'block';
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <Container>
            <PreDisplay ref={hiddenRef} className='hidden'>
                <IconAnchor width={70} height={70} />
            </PreDisplay>
            <Slider ref={ref}>
                {
                    [...Array(props.chainLength)].map((x, id) => {
                        return <IconLink key={id} width={25} height={25} className='chain' />;
                    })
                }
                <IconAnchor width={70} height={70} />
            </Slider>
        </Container>
    );
};

export default AnchorComponent;
