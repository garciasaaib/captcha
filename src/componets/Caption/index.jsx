import styled from 'styled-components';
const colors = {
  error: "red",
  info: "blue",
  warn: "yellow",
  success: "green"
}
const StyledCaption = styled.div`
  background: green;
`;

export const Caption = ({message}) => {
  return (
    <StyledCaption>{message}</StyledCaption>
  )
}
