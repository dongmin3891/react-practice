import React, { useEffect } from "react";

/* 한 파일에 여러개의 선언해도 무방 */
function User({ user, onRemove, onToggle }) {
  //useEffect 이해 좀더 복습!
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>{" "}
      <span>({user.useremail})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  /* 동적인 배열을 렌더링해야 할 때에는 자바스크립트
  내장함수 map()을 사용합니다. */
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
