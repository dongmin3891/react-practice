import React, { useContext } from "react";
import { UserDispatch } from "./App";

/* 한 파일에 여러개의 컴포넌트 선언해도 무방 */
const User = React.memo(function User({ user }) {
  //useEffect를 사용하여 마운트언마운트 업에이트시 할 작업 설정하기
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => {
          dispatch({ type: "TOGGLE_USER", id: user.id });
        }}
      >
        {user.username}
      </b>{" "}
      <span>({user.useremail})</span>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_USER", id: user.id });
        }}
      >
        삭제
      </button>
    </div>
  );
});

function UserList({ users }) {
  /* 동적인 배열을 렌더링해야 할 때에는 자바스크립트
  내장함수 map()을 사용합니다. */
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList);
