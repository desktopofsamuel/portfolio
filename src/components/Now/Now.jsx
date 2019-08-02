import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NowGrid = styled.section`
  height: auto;
  display: grid;
  grid-template-columns: [main] auto;
`;

const Main = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));

  grid-gap: var(--padding-l);

  @media only screen and (max-width: 768px) {
    grid-gap: var(--padding-s);
  }
`;

const Box = styled.div`
  display: grid;
  grid-column-start: span 5;
  grid-template-columns: 30% auto;
  grid-gap: var(--padding-s);

  @media only screen and (max-width: 768px) {
    grid-column-start: span 10;
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

const Name = styled.h4`
  color: var(--color-black-500);
  text-transform: none;
  letter-spacing: 0;
  font-weight: 700;
`;

const Content = styled.div``;

const Title = styled.h4``;

const Text = styled.p`
  font-family: var(--secondary-font);
`;
export default props => (
  <NowGrid>
    <Main>
      <Box>
        <Name>Now</Name>
        <Content>
          <Text>
            Shipping design at{" "}
            <a href="https://www.hyperair.com/zh-HK">HyperAir</a>
          </Text>
          <Text>Learning Swedish on Duolingo</Text>
        </Content>
      </Box>
      <Box>
        <Name>Projects</Name>
        <Content>
          <Text>
            Collecting Design <a href="https://pin.desktopofsamuel.com">Pins</a>
          </Text>
          <Text>
            Visiting cities{" "}
            <a href="https://photo.desktopofsamuel.com">through the lens</a>
          </Text>
        </Content>
      </Box>
      <Box>
        <Name>Read In Progress</Name>
        <Content>
          <Text>
            <a href="https://amzn.to/31GYIyZ" target="blank">
              Leonardo da Vinci - Walter Isaacson
            </a>
          </Text>
          <Text>
            <a href="https://amzn.to/31HPMJL" target="blank">
              Thanks for the Feedback - Douglas Stone
            </a>
          </Text>
        </Content>
      </Box>
      <Box>
        <Name>Recent Favorites</Name>
        <Content>
          <Text>
            <a
              href="https://www.youtube.com/watch?v=-xZFQjeZwaw"
              target="blank"
            >
              Barry
            </a>
          </Text>
          <Text>
            <a
              href="https://open.spotify.com/track/7wsRS8wZuK1SxsS1XZCmaW?si=ApnKjSAwRfiqMNnCqUxHHw"
              target="blank"
            >
              Always Be My Maybe
            </a>
          </Text>
          <Text>
            <a
              href="https://media.giphy.com/media/l3mZ36q0iqikJhzWw/giphy.gif"
              target="blank"
            >
              The Good Place
            </a>
          </Text>
          <Text>
            <a
              href="https://www.facebook.com/%E9%BA%B5%E5%8C%A0%E9%A2%A8%E9%BE%8D-537470633371893/"
              target="blank"
            >
              This ramen restaurant
            </a>
          </Text>
        </Content>
      </Box>
    </Main>
  </NowGrid>
);
