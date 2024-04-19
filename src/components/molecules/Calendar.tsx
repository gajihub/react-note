import React from "react";
import { Box as MuiBox, styled } from "@mui/material";
import ReactCalendar from "react-calendar";
import { formatDate } from "date-fns";
import "react-calendar/dist/Calendar.css";

const StyledCalendarBox = styled(MuiBox, {
  name: "CalendarBox",
  slot: "Root",
})({});

const Calendar: React.FC = (props) => {
  return (
    <StyledCalendarBox>
      <ReactCalendar
        formatDay={(locale: string | undefined, date: Date) =>
          formatDate(date, "d")
        }
        {...props}
      />
    </StyledCalendarBox>
  );
};

export default Calendar;
