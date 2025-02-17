import styled from "styled-components";

const STYLE = {
  NavContainer: styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    justify-content: space-around;
    background-color: #fff;
    border-top: 1px solid #ddd;
    height: 10vh;
    padding: 10px;
  `,
  NavItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: ${(props) => (props.active ? "#7ed321" : "#888")};

    svg {
      fill: ${(props) => (props.active ? "#7ed321" : "#888")};
      width: 24px;
      height: 24px;
    }

    span {
      font-size: 12px;
      color: ${(props) => (props.active ? "#7ed321" : "#888")};
    }
  `,
};
export default STYLE;
