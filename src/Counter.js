import React, { useState } from "react";

/* useState를 통해 컴포넌트에서 바뀌는 값 관리하기 */

function Counter() {
  /* 배열 비구조화 할당을 통하여 각 원소를 추출 */
  const [number, setNumber] = useState(0);

  /* 원래는 다음과 같이 해야함 
  const numberState = useState(0);
  const number = numberState[0];
  const setNumber = numberState[1]; 
  */

  /* 그 다음 상태를 파라미터로 넣어줌 */
  /* const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDcrease = () => {
    setNumber(number - 1);
  }; */

  /* 함수형 업데이트 = 값을 업데이트 하는 함수를 파라미터로 넣어줌 => 최적화 */
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDcrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDcrease}>-1</button>
    </div>
  );
}

export default Counter;
