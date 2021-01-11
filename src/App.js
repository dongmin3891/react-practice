import React, { useRef, useState, useMemo } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

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
      active: true,
    },
    {
      id: 2,
      username: "kimdongmin2",
      useremail: "rlaehdals2@naver.com",
      active: false,
    },
    {
      id: 3,
      username: "kimdongmin3",
      useremail: "rlaehdals3@naver.com",
      active: false,
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
    //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id가 id 인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <div>
      <CreateUser
        username={username}
        useremail={useremail}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 :{count}</div>
    </div>
  );
}

export default App;
