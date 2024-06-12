import styled from "styled-components";

const Image = styled.img`
  max-width: ${(props) => props.maxWidth || "100%"};
  height: auto;
  border-radius: ${(props) => props.borderRadius || "0"};
`;

export default Image;
