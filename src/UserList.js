import React, { useEffect } from "react";

/* 한 파일에 여러개의 컴포넌트 선언해도 무방 */
function User({ user, onRemove, onToggle }) {
  //useEffect를 사용하여 마운트언마운트 업에이트시 할 작업 설정하기
  //useEffect 마운트 언마운트 복습 - 3
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
