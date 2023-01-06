import styled from "styled-components";

export const SpectacleContent = styled.div`
  display: flex;
  justify-content: space-between;
  background: #feda09;
  width: 90%;
  margin: 15px auto;
  transition: .9s;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    width: 100%;
  }
  &:hover img {
  width: 350px;
  transition: .9s;

  }
`;

export const SpectacleText = styled.div`
  margin: 35px auto;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
  p:nth-of-type(2) {
    font-weight: bold;
  }
`;

export const SpectacleImg = styled.img`
  width: 30%;
  margin-left: 90px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    z-index: 2;
  }
`;
