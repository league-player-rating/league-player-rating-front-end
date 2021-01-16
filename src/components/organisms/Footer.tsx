import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <p>
        Made with <span>❤</span> by <a href="https://www.hayofriese.dev" rel="noopener norefferer">CodeColde</a>.
      </p>
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.footer`
  background-color: #090909;
  color: white;
  width: 100%;
  padding: 40px 0;

  & > p {
    text-align: center;
  }

  & > p > span {
    color: red;
  }
`;