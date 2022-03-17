import styled from 'styled-components';
const colors = {
  error: "red",
  info: "blue",
  warn: "red",
  success: "green"
}
const StyledCaption = styled.div`
  background: ${({color}) => color ? colors[`${color}`] : "none"};
`;

export const Caption = ({message, state}) => {
  return (
    <StyledCaption color={state}>
      {console.log(state)}
      {message}</StyledCaption>
  )
}
