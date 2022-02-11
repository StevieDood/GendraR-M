import React from "react";
import Char from "./Char";

const Chars = ({ allChars }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
      }}
    >
      {allChars?.map((char) => {
        return (
          <Char
            key={char.id}
            image={char.image}
            name={char.name}
            species={char.species}
            status={char.status}
            id={char.id}
            gender={char.gender}
            origin={char.origin}
            location={char.location}
          />
        );
      })}
    </div>
  );
};

export default Chars;
