import React from "react";

import { H3, Paragraph } from "../styles/StyledComponents";

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <H3>{user.username}</H3>
      <Paragraph>{user.password}</Paragraph>
      <Paragraph>{user.role}</Paragraph>
    </div>
  );
};

export default UserDetails;
