import { useEffect, useState, useCallback } from "react";
import getMyInfo from "../../../3_Entities/Account/getMyInfo";

const useGetUserMyInfo = (showErrorModal) => {
  const [userInfo, setUserInfo] = useState([]);

  const fetchUserInfo = useCallback(async () => {
    try {
      const userInfoData = await getMyInfo();
      setUserInfo((prev) => [...prev, ...userInfoData]);
    } catch (error) {
      showErrorModal(error.message);
    }
  }, []);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  return { userInfo };
};

export default useGetUserMyInfo;
