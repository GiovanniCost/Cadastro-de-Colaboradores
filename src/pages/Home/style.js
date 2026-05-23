import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: #071467;
`;



export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background: linear-gradient(to right, #e47f45, #dc8383);
  border-radius: 8px;
  margin: 15px;
`;

export const Title = styled.h2`
  font-size: 36px;
  color: #ffffff;
  text-align: center;
  font-style: normal;
  font-weight: 700;
`;

export const UserData = styled.div`
  display: flex;
  gap: 10px;
`
export const JobData = styled.div`
  display: flex;
  gap: 45px;;
`

export const ContainerInput = styled.div`
  display: flex;



  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #eeeeee;
  margin-bottom: 3px;
  border-color: 1px solid #000;
`;

export const Span = styled.span`
  color: #631c14;
  margin-left: 4px;
  border-color: 1px solid #000;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 12px 20px;
  background-color: #fff;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-family: Roboto, sans-serif;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
  }
`;

