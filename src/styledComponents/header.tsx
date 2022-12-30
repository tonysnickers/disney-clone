import styled from 'styled-components'

export const Li = styled.li`
  list-style: none;
  margin-right: 35px;
  text-transform: uppercase;
  font-weight: bold;
`

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  flex-wrap: wrap;
`

export const Div = styled.div`
  display: flex;
  padding: 12px 12px 12px 25px;
  margin: 0px;

  img {
    width: 90px;
    margin-right: 35px;

  }
`
export const HeaderHome = styled.div`
  background: url("https://lumiere-a.akamaihd.net/v1/images/image_1b1494f5.jpeg?region=0,0,640,480");
  background-size: 100% 100%;
  width: 100%;
  background-repeat: no-repeat;
  height: 75vh;
  transition: 0.5s;
  &:hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.1);
    margin-top: 45px;
  }
`

export const Button = styled.button`
  border-radius: 20px;
  border: none;
  background: #0070CB;
  color: #ffff;
  padding: 15px 35px;
  margin: 0 auto;

`
