import React from "react";
import renderPhrase from '../utils/renderPhrase'
const SearchStatus = ({length}) => {
  return (
    <h2>
      <span
        className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
      >
        {length > 0
          ? `${length + " " + renderPhrase(length)} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h2>
  );
};

export default SearchStatus;
