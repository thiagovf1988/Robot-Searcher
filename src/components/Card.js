import React from "react";

const Card = ({ name, email, id }) => {
  const ff = id + 255;
  return (
    <div className="tc bg-lightest-blue dib br3 pa2 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${ff}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
