import React from "react";

/* 조건부 렌더링 */
function Hello({ color, name, isSpecial }) {
  return (
    <>
      <div style={{ color }}>
        {/* {isSpecial ? <b>*</b> : null}  
        삼항연산자를 사용한 조건부 렌더링은 주로 특정 조건에 따라
        내용이 다를 때 사용 현재는 그냥 보여주고 숨기는 용도
        이기 때문에 하단의 코드를 사용하면 효율적*/}
        {isSpecial && <b>*</b>}
        Hello, {name}
      </div>
    </>
  );
}
Hello.defaultProps = {
  name: "이름없음",
};
export default Hello;
