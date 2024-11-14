import { useState, useEffect } from "react";
import getTestData from "./getTestData";

const getBusUserData = async () => {
  try {
    const response = await fetch("http://XXX", {});
    const status = response.status;

    // 상태 코드에 따른 처리
    if (!response.ok) {
      switch (status) {
        case 400:
          console.log("입력 값 오류");
          break;
        case 409:
          console.log("중복임");
          break;
        default:
          console.log("서버 오류 발생");
      }
      return; // 에러 발생 시 이후 처리 중단
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("네트워크 또는 서버 오류:", error);
  }
};

const useBusUserData = () => {
  const [busUserData, setBusUserData] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async (date) => {
    try {
      //   const data = await getBusUserData(date); 후에 데이터를 실제로 넣을 경우를 위해
      const data = getTestData(date);
      setBusUserData(data);
    } catch (error) {
      setError(true);
    }
  };

  return [busUserData, error, fetchData];
};

export default useBusUserData;