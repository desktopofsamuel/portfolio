import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faMobile,
  faBullhorn,
  faCalendarAlt,
  faMugHot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMobileAlt, faMobile, faMugHot, faBullhorn, faCalendarAlt, faUser);

const Head = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-right: 8px;
  margin-top: 4px;
`;

const Label = styled.p`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-secondary);
  letter-spacing: 0.12em;
  font-size: 14px;
  text-transform: uppercase;
  margin: 0;
`;

type ValueProps = {
  isLarge: boolean,
};

const Value =
  styled.p <
  ValueProps >
  `
  color: var(--color-text);
  font-size: ${props =>
    props.isLarge ? "var(--font-size-l)" : "var(--font-size-s)"};
    font-weight: ${props =>
      props.isLarge ? "var(--font-weight-bold)" : "var(--font-weight-regular)"};
  margin: 0;
  margin-bottom: var(--padding-s);
`;

type MetaProps = {
  icon: string,
  label: string,
  value: string,
  isLarge: boolean,
};

const defaultProps: MetaProps = {
  icon: "",
  label: "",
  value: "",
  isLarge: false,
};

const Meta: React.FC<MetaProps> = ({
  icon,
  label,
  value,
  isLarge,
}: MetaProps) => {
  return (
    <div>
      <Head>
        <Icon icon={["fas", icon]} title={label} />
        <Label>{label}</Label>
      </Head>
      <Value isLarge={isLarge}>{value}</Value>
    </div>
  );
};

Meta.defaultProps = defaultProps;

export default Meta;
