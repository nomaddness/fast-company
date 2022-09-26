import React from "react";

const BookMark = ({ status, id, onHandleClick }) => {
  return (
    <>
    <button className="btn btn-sm" onClick={() => onHandleClick(id)}>
      {status ? (<i className="bi bi-emoji-smile-fill fs-2 "></i>) : (<i className="bi bi-emoji-smile fs-2 "></i>)}
    </button>
    </>
  );
};

export default BookMark;