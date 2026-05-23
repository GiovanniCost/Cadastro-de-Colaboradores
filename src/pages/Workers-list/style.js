import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100%;
  padding: 20px;
  background-color: #071467;
`;

export const Title = styled.h2`
  font-size: 36px;
  color: #ffffff;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  margin: 25px 10px;
`;

export const ContainerWorker = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 750px){
    grid-template-columns: 1fr;
  }
`;

export const CardWorker = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 30px;
  border: solid 1.5px #6f6d6d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  margin: 5px;

  p{
    color: #fff;
    font-size: 15px;
    margin: 5px 5px ;
  }

  h3{
     color: #fff;
     margin-top:6px ;
    font-size: 16px;
    text-transform: capitalize;
  }
`;

export const AvatarWorkers = styled.img`
border: 1px solid #6f6d6d;


&:hover{
  opacity: 0.8;
}

`;

export const TrashIcon = styled.img`
cursor: pointer;
margin-top: 5px;

&:hover{
  opacity: 0.8;
}
&:active{
  opacity: 0.5;
}
  
`;

