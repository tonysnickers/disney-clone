import styled from "styled-components";

export const Li = styled.li`
  list-style: none;
  margin-right: 35px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  flex-wrap: wrap;
`;

export const Div = styled.div`
  display: flex;
  padding: 12px 12px 12px 25px;
  margin: 0px;
  img {
    width: 90px;
    margin-right: 35px;
  }
`;
export const HeaderHome = styled.div`
  background: url("https://lumiere-a.akamaihd.net/v1/images/image_1b1494f5.jpeg?region=0,0,640,480");
  background-size: 100% 100%;
  width: 100%;
  background-repeat: no-repeat;
  height: 600px;
  transition: 0.9s;
  position: relative;
  &:hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.2);
    transform: scale(.9);
  }
`;

export const HeaderContent = styled.div`
  width: 60%;
  position: absolute;
  text-align: center;
  top: 30%;
`

export const Paragraph = styled.p`
  // position: absolute;
  // top: 65%;
  // left: 19%;
  color: #ffff;
  font-size: 17px;
  margin: 15px;
`;

export const Title = styled.img`
  width: 60%;
  // width: 900px;
  // position: absolute;
  // margin-top: 20vh;
  // top: 30%;
  // left: 5vh;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: none;
  background: #0070cb;
  color: #ffff;
  padding: 15px 45px;
  // position: absolute;
  // top: 70%;
  // left: 20%;
  font-weight: bold;
  transition: .7s;
  cursor: pointer;
  &:hover {
    background: #0488f4;
  }
`;

export const A = styled.a`
  text-decoration: none;
  color: #000;
`
export const Home = styled.div`
  background: #F1F2F3;
`
