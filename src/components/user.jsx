import React from "react";
import Quality from "./quality";
import BookMark from "./bookmark";

const User = ({_id, name, qualities, completedMeetings, rate, onDelete, profession, bookmark, onHandleClick}) => {
  return (
    <>
      <tr key={_id}>
        <td>{name}</td>
        <td>
          {qualities.map((item) => (
           <Quality key={item._id} {...item}/>
          ))}
        </td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate} /5</td>
        <td><BookMark id={_id} status={bookmark} onHandleClick={onHandleClick}/></td>
        <td>
          <button
            onClick={() => onDelete(_id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default User;
