import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const renderPhrase = () => {
    if (users.length === 0) {
      return "Никто с тобой не тусанет";
    } else if (users.length === 1) {
      return `${users.length} человек тусанет с тобой сегодня`;
    } else if (users.length > 1 && users.length < 5) {
      return `${users.length} человека тусанут с тобой сегодня`;
    } else if (users.length > 4) {
      return `${users.length} человек тусанет с тобой сегодня`;
    }

    return `${users.length}  человек тусанут с тобой сегодня`;
  };
  const getBadgeClasses = () => {
    let classes = "badge mx-2 ";
    classes += users.length === 0 ? "bg-danger" : "bg-primary";
    return classes;
  };

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((users) => users !== userId));
  };

  return (
    <>
      <h2>
        <span className={getBadgeClasses()}>{renderPhrase()}</span>
      </h2>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <td>
                  {user.qualities.map((quality) => (
                    <span
                      key={quality._id}
                      className={`badge bg-${quality.color} me-1`}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button className="badge bg-danger" onClick={() => handleDelete(user)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
