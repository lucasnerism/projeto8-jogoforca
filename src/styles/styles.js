import styled from "styled-components";

export const Button = styled.button`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 700;
  background: #27AE60;
  width: 200px;
  height: 60px;
  border-radius: 8px;
  font-size: 20px;
  color: #FFFFFF;  
  border: none;  
`;

export const Img = styled.img`
  width: 400px;
  heigth: 466.67px;    
`;

export const Buttonletra = styled.button`
  width: 40px;
  height: 40px;
  font-size: 16px;
  color: #39739D;
  background: #E1ECF4;
  border: 1px solid #7AA7C7;
  
  &:hover{
    background: #E1FCF4;
  }
  &:disabled {
    background: #9FAAB5;
    color: #798A9F;    
  };
`;