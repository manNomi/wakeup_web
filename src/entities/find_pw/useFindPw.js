import { useState, useEffect } from "react";
import getTestData from "./getTestData";
import regexData from "./regexFindPwData";

const findPw = async (id, phoneNumber, companyName) => {
  try {
    const response = await fetch("http://XXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        phone: phoneNumber,
        company: companyName,
      }),
    });

    // 상태 코드 처리
    const status = response.status;
    switch (status) {
      case 400:
        alert("입력 값 오류: 전화번호나 회사명을 확인하세요.");
        break;
      case 404:
        alert("아이디를 찾을 수 없습니다.");
        break;
      case 200:
        const result = await response.json(); // 성공 시 JSON 응답 파싱
        alert(`아이디를 찾았습니다: ${result.id}`);
        return result.id; // 찾은 아이디 반환
      default:
        alert("알 수 없는 오류가 발생했습니다.");
    }
  } catch (error) {
    console.error("서버와의 통신 중 오류 발생:", error);
    alert("서버 요청 실패. 나중에 다시 시도해주세요.");
  }
};

const useFindPw = () => {
  const [pw, setPw] = useState(null);

  const fetchData = async (id, phone, company) => {
    try {
      regexData(id, phone, company);
      //   const data = await findPw(id,phone,company); 후에 데이터를 실제로 넣을 경우를 위해
      const data = getTestData(id, phone, company);
      alert(`찾으시려는 PW 는 ${data} 입니다`);
      setPw(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return [pw, setPw, fetchData];
};

export default useFindPw;
