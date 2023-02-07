import React from "react";
import ChildComponent from "../child";

const ParentComponent = ({ group }) => {
  let firstName = "Fezile";
  let lastName = "Chelebiyeva";
  return (
    <div>
      <ChildComponent group={group} firstName={firstName} lastName={lastName} />
    </div>
  );
};

export default ParentComponent;
