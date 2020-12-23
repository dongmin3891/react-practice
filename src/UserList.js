import React from "react";

/* 한 파일에 여러개의 선언해도 무방 */
function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.useremail})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove }) {
  /* 동적인 배열을 렌더링해야 할 때에는 자바스크립트
  내장함수 map()을 사용합니다. */
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;
