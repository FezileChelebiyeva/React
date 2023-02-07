import React from "react";

const ChildComponent = ({ firstName, lastName, group }) => {
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <h2>{group}</h2>
    </div>
  );
};

export default ChildComponent;
