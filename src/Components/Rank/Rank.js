import React from "react";

const Rank = (props) => {
  const name = props.name;
  const entries = props.entries;

  // --- Destructuring ---
  // const { name, entries } = props;

  return (
    <div>
      <div className="white f3">
        {`${name}, your current submission count is...`}
      </div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
