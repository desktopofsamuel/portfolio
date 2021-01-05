import React from "react";
import Link from "./common/GatsbyLink";

type ToolCardProps = {
  item: {
    name: string,
    description: string,
    platform: string,
    image: string,
    link: string,
  },
};

const ToolCard = ({ item }: ToolCardProps) => {
  return (
    <Link to={item.link} target="_blank">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </Link>
  );
};

export default ToolCard;
