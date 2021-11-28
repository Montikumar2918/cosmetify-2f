import React from "react";
import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
     0%   {background-color: rgb(105,105,105);}
    50%  {background-color:  rgb(153,50,204);}
    100% {background-color: rgb(147,112,219);}
`;

const Container = styled.div`
  /* height: 80%; */
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: #fff;
  animation: ${colorChange} 4s infinite linear;
`;

const UpperAnnouncement = () => {
  return (
    <div>
      <Container>
        <div style={{ marginTop: "10px" }}>
          <p>WEAKEND SALE!!! upto 30% OFF Hurry up!</p>
        </div>
      </Container>
    </div>
  );
};

export default UpperAnnouncement;
