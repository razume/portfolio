import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/users").then((response) => setUsers(response.data));
  }, []);
  return (
    <div>
      <div>Leighton's app</div>
      <ul>
        {users.map((user) => {
          return <li key={Math.random()}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
