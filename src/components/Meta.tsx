import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons/faBullhorn";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";

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

type Props = {
  icon: string,
  label: string,
  value: string,
  isLarge: boolean,
};

const defaultProps: Props = {
  icon: "",
  label: "",
  value: "",
  isLarge: false,
};

const Meta: React.FC<Props> = ({ icon, label, value, isLarge }) => {
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
