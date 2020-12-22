import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Boxed from "components/utils/Boxed";

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
  color: var(--color-text);
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
            <a
              href="https://www.bookdepository.com/The-Everything-Store--Jeff-Bezos-and-the-Age-of-Amazon/9780552167833/?a_aid=desktopofsamuel"
              target="blank"
            >
              The Everything Store
            </a>
          </Text>
          <Text>
            <a
              href="https://www.bookdepository.com/Atomic-Habits-James-Clear/9781847941831/?a_aid=desktopofsamuel"
              target="blank"
            >
              Atomic Habits
            </a>
          </Text>
        </Content>
      </Box>
      <Box>
        <Name>Recent Favorites</Name>
        <Content>
          <Text>
            <a
              href="https://image.insider.com/5de2bba479d7577cd722e553?width=1100&format=jpeg&auto=webp"
              target="blank"
            >
              The Mandalorian
            </a>
          </Text>
          <Text>
            <a
              href="https://www.youtube.com/watch?v=ktuwTuuoQIE"
              target="blank"
            >
              The Detention
            </a>
          </Text>
          <Text>
            <a
              href="https://open.spotify.com/album/2FeyIYDDAQqcOJKOKhvHdr?si=GM_O3XopT4qX_qw-7Yx-iw"
              target="blank"
            >
              Everyday Life
            </a>
          </Text>
        </Content>
      </Box>
    </Main>
  </NowGrid>
);
