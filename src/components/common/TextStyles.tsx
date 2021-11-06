import styled from "styled-components";

export const H1 = styled.h1`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xxl);
  line-height: 1.3em;
  margin-top: calc(var(--font-base-line-height) * var(--font-size-base) * 4);
  margin-bottom: calc(var(--font-base-line-height) * var(--font-size-base) * 1);
  letter-spacing: -0.75px;
  color: var(--color-title);
`;

export const H2 = styled.h2`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-l);
  margin: 0;
`;

export const H3 = styled.h3`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-m);
  margin: 0;
`;

export const Subtitle = styled.p`
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-m);
  color: var(--color-text-secondary);
  margin: 0;
`;

export const BodyMain = styled.p`
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-s);
  color: var(--color-text-secondary);
`;

export const BodySecondary = styled.p`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold-alt);
  font-size: var(--font-size-s);
  color: var(--color-text);
`;

export const SmallText = styled.p`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  text-transform: uppercase;
  line-height: normal;
  font-size: 14px;
  letter-spacing: 0.025rem;
  margin-top: 0;
  color: var(--color-text-secondary);
`;
