import React from "react";

function CreateUser({ username, useremail, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="useremail"
        placeholder="이메일"
        onChange={onChange}
        value={useremail}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;
