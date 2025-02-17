import React, { useEffect } from "react";
import STYLE from "./style";
import useManageDate from "./model/useManageDate";
import CircularTimer from "./ui/CircularTimer";
import useGetBusScheduleData from "../../3_Entities/Crew/useGetBusScheduleData";
import useGetMyInfo from "../../3_Entities/Account/useGetMyInfo";
import { formatDateTime } from "./lib/formatedUtil";

const CrewPage = () => {
  const [myInfo] = useGetMyInfo();
  useEffect(() => {
    if (myInfo) if (myInfo?.type !== "crew") window.location.href = "/admin";
  }, [myInfo]);

  const [currentDate, formattedDateKorea, toggleDateTrigger] = useManageDate();
  const [busScheduleData] = useGetBusScheduleData(myInfo?.idx, currentDate);

  return (
    <STYLE.TimerContainer>
      <STYLE.RefreshBtn onClick={toggleDateTrigger}>↻</STYLE.RefreshBtn>
      <STYLE.TextContainer>
        <STYLE.DateText>기사 : {myInfo?.name}</STYLE.DateText>
        <STYLE.DateText>{formattedDateKorea}</STYLE.DateText>
        <STYLE.TimeText>
          배차 시간 :
          {busScheduleData
            ? formatDateTime(busScheduleData.start_time)
            : "배차가 없습니다"}
        </STYLE.TimeText>
        <STYLE.TimeText>{busScheduleData?.title}</STYLE.TimeText>
      </STYLE.TextContainer>
      <CircularTimer
        currentDate={currentDate}
        busScheduleData={busScheduleData}
        toggleDateTrigger={toggleDateTrigger}
      />
    </STYLE.TimerContainer>
  );
};

export default CrewPage;
