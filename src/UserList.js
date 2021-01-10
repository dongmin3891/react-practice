import React, { useEffect } from "react";

/* 한 파일에 여러개의 컴포넌트 선언해도 무방 */
function User({ user, onRemove, onToggle }) {
  //useEffect를 사용하여 마운트언마운트 업에이트시 할 작업 설정하기
  //useEffect 정리
  /* useEffect 를 사용할때는 첫번째 파라미터는 

함수를 등록하고 두번째 파라미터는 deps라는 배열을 등록한다

그리고 return 어떤 특정 함수로 반환하게 되면 뒷정리 함수여서

업데이트 되기 직전에 바로 호출이 되는거에요 그리고 여기서 조회하고 있는

어떤 값이 있다면 상태나 혹은 props가 있다면 deps에 넣어주는게 규칙이에요

그리고 만약에 이걸 비운다 하면 컴포넌트가 처음 나타날때만 호출이 되고 

만약에 제가 어떤 함수를 넣게 되면

useEffect(() => {

return () => {};

}, []);

이 함수는 컴포넌트가 사라질 때 호출이 되는거고 만약에

user를 넣게 되다면

useEffect(() => {

return () => {};

}, [user]);

이 함수 자체는 컴포넌트가 처음 나타날때도 호출이 되고 유저객체가 바뀔때도 

호출이되고 하는거죠 그리고 여기에 있는 clear함수 같은 경우에는 

return () => {}; 유저 객체가 바로 바뀌기 직전에도 호출이되고 컴포넌트가

사라지기 전에도 호출이 된느겁니다. */
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
