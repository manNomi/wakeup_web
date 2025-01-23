import styled from "styled-components";

const STYLE = {
  HeaderTag: styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 10px;
    height: 10vh;
  `,

  DateText: styled.span`
    font-size: 22px;
    font-weight: 700;
    color: #333;
    cursor: pointer;
    width: 90%;
  `,

  DateInput: styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: auto; /* 포커스를 받을 수 있도록 설정 */
  `,
  UserContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 90vh;
    justify-content: start;
    align-items: center;
  `,
};
export default STYLE;
