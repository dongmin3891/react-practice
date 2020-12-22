import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>{user.useremail}</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "kimdongmin1",
      useremail: "rlaehdals1@naver.com",
    },
    {
      id: 2,
      username: "kimdongmin2",
      useremail: "rlaehdals2@naver.com",
    },
    {
      id: 3,
      username: "kimdongmin3",
      useremail: "rlaehdals3@naver.com",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
