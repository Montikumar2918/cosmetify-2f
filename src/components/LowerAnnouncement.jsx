import React from "react";
import styled, { keyframes } from "styled-components";
import { small } from "../responsive";

const runningText = keyframes`
0% {transform:translateX(100%)}
100%{transform:translateX(-100%)}
`;

const Container = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(205,133,63);
  overflow: hidden;
  ${small({ height: "4rem" })};
  & p {
    width: 100%;
    position: relative;
    top: -5px;
    animation: ${runningText} 15s infinite linear;
  }
`;

const LowerAnnouncement = () => {
  return (
    <Container>
      <p style={{ marginTop: "10px" }}>
        Big! Big!! News : Grab ALL Products of NYX  Up TO 50 % OFF{" "}
      </p>
    </Container>
  );
};

export default LowerAnnouncement;
