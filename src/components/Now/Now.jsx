import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NowGrid = styled.section`
  height: auto;
  display: grid;
  grid-template-columns: [main] auto;
  margin-bottom: -2rem;
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
  font-family: var(--font-secondary);
`;
export default props => (
  <NowGrid>
    <Main>
      <Box>
        <Name>Now</Name>
        <Content>
          <Text>Stand With Hong Kong</Text>
        </Content>
      </Box>
      <Box>
        <Name>Projects</Name>
        <Content>
          <Text>
            Collecting Design{" "}
            <a href="https://pins.desktopofsamuel.com">Pins</a>
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
            <a href="https://maketime.blog" target="blank">
              Make Time
            </a>
          </Text>
          <Text>
            <a
              href="https://www.books.com.tw/products/0010834124"
              target="blank"
            >
              你看港楷招牌
            </a>
          </Text>
        </Content>
      </Box>
      <Box>
        <Name>Recent Favorites</Name>
        <Content>
          <Text>
            <a
              href="https://open.spotify.com/artist/4NZvixzsSefsNiIqXn0NDe?si=v4HKt8o1STa3Ybr6wC7G3g"
              target="blank"
            >
              Maggie Rogers
            </a>
          </Text>
          <Text>
            <a
              href="https://www.youtube.com/watch?v=eTzBIH51Irc"
              target="blank"
            >
              1987 When The Day Comes
            </a>
          </Text>
          <Text>
            <a
              href="https://www.youtube.com/watch?v=6uWCNHQgfnc"
              target="blank"
            >
              Undone
            </a>
          </Text>
          <Text>
            <a href="https://www.apple.com/iphone-11-pro/" target="blank">
              Wide Angle Lens
            </a>
          </Text>
        </Content>
      </Box>
    </Main>
  </NowGrid>
);
