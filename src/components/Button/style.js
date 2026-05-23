import styled from "styled-components";
export const Button = styled.button`
  width: fit-content;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background:${props => props.theme === 'primary' ? 'linear-gradient(to right, #0d0d0d, #7f3841)' : 'transparent'};
  border:${props => props.theme === 'primary' ? ' rgba(102, 126, 234, 0.3)' : '1px solid #fff'}; 
  border-radius: 20px;
  margin-bottom: 8px;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover  {
   
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(102, 126, 234, 0.3);
    background-color: ${props => props.theme !== 'primary' ? '#161515' : 'auto'};
    color: ${props => props.theme !== 'primary' ? '#ef0808' : 'auto'};
  }

  &:active {
    transform: translateY(0);
  }
`;
