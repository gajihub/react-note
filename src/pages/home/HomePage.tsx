import { styled } from "@mui/material";
import React from "react";
import Calendar from "@/components/molecules/Calendar";
import Navigation from "@/components/molecules/Navigation";

const StyledPage = styled("div", {
  name: "HomePageWrap",
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
        <Calendar />
      </StyledContainer>
    </StyledPage>
  );
};

export default HomePage;
