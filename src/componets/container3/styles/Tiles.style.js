import styled from "styled-components";

export const Tile = styled.div`
  width: 30%;
  height: 35vh;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 10px;
  align-items: flex-start;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  background-color: #FFFEFC;

  @media (max-width: 1100px) {
    width: 48%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const DepartmentIcon = styled.img`
    height: 30%;
    @media (max-width: 768px) {
    margin-bottom: 2.2rem;
  }
`;

export const DepartmentName = styled.h3`
font-style: normal;
font-weight: 700;
font-size: 1.8rem;
line-height: 32px;
letter-spacing: -0.02em;
color: #555962;

    @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const DepartmentInfo = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #555962;
`;
