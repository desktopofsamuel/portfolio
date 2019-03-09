import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";


const NowGrid = styled.section`
width: 100vw;
position: relative;
left: 50%;
right: 50%;
margin-left: -50vw;
margin-right: -50vw;
height: auto;
margin-top: 100px;
display: grid; 
grid-template-columns: minmax(1vw,10vw) [main] auto minmax(1vw,10vw);
background: #f1f0e7;
`

const Main = styled.div`
grid-area: main;
display: grid;
grid-template-columns: repeat(8, minmax(0, 1fr));
padding: var(--padding-xl) 0;
grid-gap: var(--padding-l);

@media only screen and (max-width: 768px) {
    grid-gap: var(--padding-s);
}
`

const Box = styled.div`
display: grid;
grid-column-start: span 4;
grid-template-columns: minmax(min-content, 30%) auto;
grid-gap: var(--padding-m);

@media only screen and (max-width: 768px) {
    grid-column-start: span 8;
    grid-template-columns: 1fr;
    padding: var(--padding-s);
    grid-gap: 0;
}

`

const Name = styled.div`
`

const Content = styled.div`
`

const Text = styled.h2`

`
export default props => 

    <NowGrid>
        <Main>
        <Box>
            <Name><h3>Now</h3></Name>
            <Content>
                <Text>Building my first design system</Text>
                <Text>Learning Swedish on Duolingo</Text>
            </Content>
        </Box>
        <Box>
            <Name><h3>Projects</h3></Name>
            <Content>
                <Text>Collecting Design <a href="https://pin.desktopofsamuel.com">Pins</a></Text>
                <Text>My React Portfolio</Text>
            </Content>
        </Box>
        <Box>
            <Name><h3>My Passions</h3></Name>
            <Content>
                <Text>Building my first design system</Text>
            <Text>Learning Swedish on Duolingo</Text>
            </Content>
        </Box>
        <Box>
            <Name><h3>Recent Favorite</h3></Name>
            <Content>
                <Text>The Good Place</Text>
                <Text><a href="https://www.acitymadebypeople.com/">A City Made by People</a></Text>
                <Text><a href="https://www.youtube.com/watch?v=JILfwu5AWIQ">The Black Keys</a></Text>
            </Content>
        </Box>
        </Main>
    </NowGrid>