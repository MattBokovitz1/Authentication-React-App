import React, { useContext, useEffect } from "react";
import { AppContext } from "../utils/AppContext";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Header } from "../styles/StyledComponents";
import UserDetails from "./UserDetails";

const MyUsers = () => {
  const [userList, setUserList] = useContext(AppContext);

  const fetchUsers = () => {
    axiosWithAuth()
      .get(`/api/users`)
      .then((res) => setUserList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  });

  return (
    <>
      <div className="user-card">
        <Header>My Users</Header>
        {userList.map((user) => {
          return <UserDetails key={user.username} user={user} />;
        })}
      </div>
    </>
  );
};

export default MyUsers;
