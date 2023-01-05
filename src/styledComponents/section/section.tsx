import styled from "styled-components";

export const Section = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 16px;
  width: 90%;
  height: auto;
  margin: 25px auto;
  cursor: pointer;
  // justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;
export const CardMovie = styled.div`
  width: 100%;
  background: #ffffff;
`;
export const ImgMovie = styled.img`
  width: 100%;
  height: 380px;
  &:first-child {
    width: 100%;
  }
`;
export const SectionText = styled.div`
  padding: 15px;
`;

export const H3 = styled.h3`
  padding: 15px;
`;
export const Description = styled.p`
  padding: 25px;
  // margin-bottom: 5%;
`;

export const ParcSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  width: 90%;
  height: auto;
  cursor: pointer;
  margin: 25px auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
