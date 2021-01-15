import React, { useReducer, useCallback } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: "",
    useremail: "",
  },

  users: [
    {
      id: 1,
      username: "dongmin",
      useremail: "rlaehdals753@naver.com",
      active: true,
    },

    {
      id: 2,
      username: "dongdong",
      useremail: "rlaehdals224@naver.com",
      active: false,
    },

    {
      id: 3,
      username: "kim",
      useremail: "rlaehdals159@naver.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, useremail } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  return (
    <div>
      <CreateUser
        username={username}
        useremail={useremail}
        onChange={onChange}
      />
      <UserList users={users} />
      <div>활성 사용자 수 :0</div>
    </div>
  );
}

export default App;
