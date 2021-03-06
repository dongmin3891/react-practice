import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  const { name, nickName } = inputs; // 비구조할당으로 inputs 값 추출
  const nameInputs = useRef(); //useRef()를 사용하여 Ref객체 생성

  /* 불변성을 유지하기 위해 기존의 객체를 복사하여 값 변경 */
  const onChange = (e) => {
    const { value, name } = e.target; // e.target에서 name과 value를 추출
    setInputs({
      ...inputs, // 기존의 inputs 객체를 복사
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickName: "",
    });

    nameInputs.current.focus(); //.current 값은 우리가 원하는 DOM을 가르킴
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInputs}
      />
      <input
        name="nickName"
        placeholder="닉네임"
        onChange={onChange}
        value={name}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {name}({nickName})
      </div>
    </div>
  );
}

export default InputSample;
