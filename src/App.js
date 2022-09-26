import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";
import SearchStatus from "./components/searchStatus";

const App = () => {
  const initialState = api.users.fetchAll();
  const [users, setUsers] = useState(initialState);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const handleToggleBookMark = (userid) => {
    const newUser = users.map((item) => {
      if (userid === item._id) {
        // return {...item, bookmark: !item.bookmark}
        item.bookmark = !item.bookmark
      } 
      return item
    })
    setUsers(newUser)
  }

  return (
    <div>
      <SearchStatus length={users.length}/>
      <Users onDelete={handleDelete} users={users} onHandleClick={handleToggleBookMark}/>
    </div>
  );
};

export default App;
