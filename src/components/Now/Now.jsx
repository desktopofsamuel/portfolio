import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";


const NowGrid = styled.section`
height: auto;
display: grid; 
grid-template-columns: [main] auto;
`

const Main = styled.div`
grid-area: main;
display: grid;
grid-template-columns: repeat(8, minmax(0, 1fr));

grid-gap: var(--padding-l);

@media only screen and (max-width: 768px) {
    grid-gap: var(--padding-s);
}
`

const Box = styled.div`
display: grid;
grid-column-start: span 4;
grid-template-columns: minmax(auto, 30%) auto;
grid-gap: var(--padding-s);

@media only screen and (max-width: 768px) {
    grid-column-start: span 8;
    grid-template-columns: 1fr;
    padding: var(--padding-s);
    grid-gap: 0;
}

`

const Name = styled.h4`
color: var(--color-black-500);
text-transform: none;
letter-spacing: 0;
font-weight: 700;
`

const Content = styled.div`
`

const Title = styled.h4`

`

const Text = styled.p`
font-family: var(--secondary-font);
`
export default props => 

    <NowGrid>
        <Main>
        <Box>
            <Name>Now</Name>
            <Content>
                <Text>Building my first design system</Text>
                <Text>Learning Swedish on Duolingo</Text>
            </Content>
        </Box>
        <Box>
            <Name>Projects</Name>
            <Content>
                <Text>Collecting Design <a href="https://pin.desktopofsamuel.com">Pins</a></Text>
                <Text>What you are visiting...this website</Text>
            </Content>
        </Box>
        <Box>
            <Name>My Passions</Name>
            <Content>
                <Text>Design and Technology</Text>
                <Text>Visiting cities <a href="https://photo.desktopofsamuel.com">through the lens</a></Text>
            </Content>
        </Box>
        <Box>
            <Name>Recent Favorite</Name>
            <Content>
                <Text><a href="https://open.spotify.com/album/1pKIMs0GEePXjDC2EiYEb7?si=ch5tDn3RRf-fFiiwNb7zXw" target="blank">Stella Donnelly's Beware of the dogs</a></Text>
                <Text><a href="https://www.acitymadebypeople.com/" target="blank">A City Made by People</a></Text>
                <Text><a href="https://media.giphy.com/media/l3mZ36q0iqikJhzWw/giphy.gif" target="blank">The Good Place</a></Text>
            </Content>
        </Box>
        </Main>
    </NowGrid>