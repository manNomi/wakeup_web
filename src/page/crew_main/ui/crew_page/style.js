import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  font-family: Arial, sans-serif;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
`;

export const DateText = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 5px 0;
  margin-bottom: 20px;
`;

export const TimeText = styled.p`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const CircularWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

export const CircularBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 15px solid #81c784; /* 외부 원형 테두리 */
  border-color: ${(props) => (props.attendanc ? "#81c784" : "#FEC3C3")};
  background: transparent; /* 가운데 빈 부분 */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CircularText = styled.div`
  position: absolute;
  font-size: 30px;
  font-weight: bold;
  color: #333;
  text-align: center;

  p {
    margin: 0;
  }
`;
