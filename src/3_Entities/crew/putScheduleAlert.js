import { useEffect } from "react";
import { useFetch } from "../../4_Shared/util/apiUtil";
import useAlertModalAtom from "../../4_Shared/Recoil/useAlertModalAtom";

const isDevelopment = process.env.NODE_ENV === "development";

const usePutScheduleAlert = () => {
  const [serverState, request] = useFetch();
  const [setAlert] = useAlertModalAtom();

  const putScheduleAlert = async (id, password) => {
    if (isDevelopment) {
      console.log("개발 모드: 테스트 데이터를 반환합니다.");
      return true;
    }

    await request("PUT", "/account/login", { id, password });
  };

  useEffect(() => {
    if (!serverState) return;

    switch (serverState.status) {
      case 400:
        setAlert("입력 값 오류");
        break;
      case 409:
        setAlert("로그인 실패");
        break;
      case 200:
        setAlert("스케줄 알림이 성공적으로 설정되었습니다.");
        break;
      default:
        setAlert("서버 오류가 발생했습니다.");
        break;
    }
  }, [serverState]);

  return [putScheduleAlert];
};

export default usePutScheduleAlert;
