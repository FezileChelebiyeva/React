import React from "react";
import ListItemComp from "../ListItem";

const ListComp = ({ usersData }) => {
  return (
    <div>
      {usersData.map((element, i) => {
        return <ListItemComp key={element.id} element={element}/>;
      })}
    </div>
  );
};

export default ListComp;
