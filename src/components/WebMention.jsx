import React from "react";

const WebMention = ({ edges }) => {
  const likes = edges.filter(({ node }) => node.wmProperty === "like-of");
  const retweets = edges.filter(({ node }) => node.wmProperty === "repost-of");
  const retweetFaces = retweets.map(
    ({ node }) => node.author && { wmId: node.wmId, ...node.author },
  );

  const likeFaces = likes.map(
    ({ node }) => node.author && { wmId: node.wmId, ...node.author },
  );
  return (
    <div>
      <h4>
        <span>{`${likes.length} likes`}</span>
      </h4>
      <div>
        {likeFaces.map(face => (
          <a href={face.url} key={face.wmId}>
            {face.photo ? (
              <img alt={face.name} src={face.photo} />
            ) : (
              <div>{face.name}</div>
            )}
          </a>
        ))}
      </div>
      <h4>
        <span>{`${retweets.length} reposts`}</span>
      </h4>
      <div>
        {retweetFaces.map(face => (
          <a href={face.url} key={face.wmId}>
            {face.photo ? (
              <img alt={face.name} src={face.photo} />
            ) : (
              <div>{face.name[0]}</div>
            )}
          </a>
        ))}
      </div>
      {/* <pre>
    {JSON.stringify(edges, null, 2)}
  </pre> */}
    </div>
  );
};

export default WebMention;
