import styled from "styled-components";

export const Tile = styled.div`
  width: 30%;
  height: 30vh;
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  align-items: flex-start;
  justify-content: space-evenly;
  background-color: #FFFEFC;

  @media (max-width: 1100px) {
    width: 48%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const DepartmentIcon = styled.img`
    height: 30%;
`;

export const DepartmentName = styled.h3`
font-style: normal;
font-weight: 700;
font-size: 1.8rem;
line-height: 32px;
letter-spacing: -0.02em;
color: #555962;
`;

export const DepartmentInfo = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #555962;
`;
