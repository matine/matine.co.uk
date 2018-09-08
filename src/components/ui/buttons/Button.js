import styled from 'styled-components';
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  default: "#fff",
  inverted: "#000",
});

const Button = styled.button`
  background-color: ${backgroundColor};
`;

export default Button;