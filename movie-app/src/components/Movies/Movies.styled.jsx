import styled from "styled-components";

const StyledMovies = styled.div`
  margin: 1rem;

  section {
    margin: 5rem 0;
    padding: 20px;
    text-align: center;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #4361ee;
  }

  a {
    text-decoration: none;
  }

  .movie__container {
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Default untuk layar kecil */
    gap: 20px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .movie__container {
      grid-template-columns: repeat(2, 1fr); /* 2 kolom untuk layar sedang */
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .movie__container {
      grid-template-columns: repeat(4, 1fr); /* 4 kolom untuk layar besar */
    }
  }
`;

export default StyledMovies;
