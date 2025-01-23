import STYLE from "./style";
import { useRef } from "react";

import useGetBusDriverDate from "./model/useGetBusDriverDate";
import useManageDriverDate from "./model/useManageDriverDate";
import useDate from "./model/useDate";

import UserBox from "./ui/UserBox";
import NonSchedule from "../../2_Widget/NonSchedule";

const AdminPage = () => {
  const dateInputRef = useRef(null); // DateInput 요소에 접근할 ref 생성

  const { date, handleDateChange, handleDateClick } = useDate(dateInputRef);

  const { busDriverDateData } = useGetBusDriverDate(date);
  const { displayDriverDateData } = useManageDriverDate(
    busDriverDateData,
    date
  );

  return (
    <>
      <STYLE.HeaderTag>
        <STYLE.DateText onClick={handleDateClick}>
          {new Date(date).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            weekday: "short",
          })}
        </STYLE.DateText>
        <STYLE.DateInput
          ref={dateInputRef} // DateInput 요소에 ref 연결
          type="date"
          value={date}
          onChange={handleDateChange}
        />
      </STYLE.HeaderTag>
      {console.log(displayDriverDateData)}
      {displayDriverDateData.length === 0 ? (
        <NonSchedule />
      ) : (
        <STYLE.UserContainer>
          {displayDriverDateData.map((busUser) => (
            <UserBox
              driver={busUser.driver}
              wakeup={busUser.wakeup}
              time={busUser.time}
              date={busUser.date}
            />
          ))}
        </STYLE.UserContainer>
      )}
    </>
  );
};

export default AdminPage;
