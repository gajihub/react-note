import { styled } from "@mui/material";
import React from "react";
import Calendar from "react-calendar";
import Navigation from "@/components/molecules/Navigation";
import { formatDate } from "date-fns";
import "react-calendar/dist/Calendar.css";

const StyledPage = styled("div", {
  name: "HomePage",
  slot: "Root",
})({});

const StyledContainer = styled("div", {
  name: "HomeContainer",
  slot: "Root",
})({});

const HomePage: React.FC = () => {
  return (
    <StyledPage>
      <Navigation />
      <StyledContainer>
        <Calendar
          formatDay={(locale: string | undefined, date: Date) =>
            formatDate(date, "d")
          }
          className={"homepage-calendar"}
        />
      </StyledContainer>
    </StyledPage>
  );
};

export default HomePage;
