import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    useremil: "",
  });

  const { username, useremail } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
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
  ]);
  /* useRef로 컴포넌트 안의 변수 만들기 */
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      useremail,
    };
    //setUsers([...users, user]); spread 연산자

    setUsers(users.concat(user)); //concat 함수

    setInputs({
      username: "",
      useremail: "",
    });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <CreateUser
        username={username}
        useremail={useremail}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </div>
  );
}

export default App;
