import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
function App() {
  return (
    <>
      <Wrapper>
        {/* props 값 설정을 생략하면 = {true} */}
        <Hello name="react" color="red" isSpecial />
        {/* <Hello name="react" color="red" isSpecial={true} /> */}
        <Hello color="red" />
      </Wrapper>
    </>
  );
}

export default App;
