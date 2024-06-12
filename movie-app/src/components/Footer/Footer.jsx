import Heading from "../ui/Heading/Heading";
import StyledFooter from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <Heading as='h2'>Movie App</Heading>
        <p>Created by Yudha Rizky Alvingky</p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
