import React, { useRef } from "react";
import UserList from "./UserList";

function App() {
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
  /* useRef로 컴포넌트 안의 변수 만들기 */
  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    //...
  };

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default App;
