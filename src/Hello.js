import React from "react";

/*  props 기본 사용법 */ 

/* function Hello(props) {
  return (
    <div
      style={{
        color: props.color,
      }}
    >
      안녕하세요 {props.name}
    </div>
  );
}  */

/* 비구조할당으로 사용하는 방법  */

/* function Hello(props) {
  const { name, color } = props;
  return <div style={{ color }}>안녕하세요 {name}</div>;
} */

 /* 비구조할당으로 사용하는 방법 2 */

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>;
} */

/* defaultProps로 기본값 설정   */
function Hello({ color, name }) {
  return (
    <>
      <div style={{ color }}> Hello, {name} </div>
    </>
  );
}
Hello.defaultProps = {
  name: "이름없음",
};
export default Hello;
