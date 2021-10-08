import { useEffect } from "react";
import { useState } from "react";

const UseFakeUsers = () => {
  // Fake user data for instructors 
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/FakeUsers.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return users;
};
export default UseFakeUsers;
