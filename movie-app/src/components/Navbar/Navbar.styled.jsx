import styled from "styled-components";

const StyledNavbar = styled.nav`
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
  }

  a:hover {
    color: #f0a500;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin: 0;
      margin-left: 1rem;
    }

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }

    a {
      font-size: 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    h1 {
      font-size: 2rem;
    }

    a {
      font-size: 1rem;
    }

    li {
      margin: 0 1.5rem;
    }
  }
`;

export default StyledNavbar;
