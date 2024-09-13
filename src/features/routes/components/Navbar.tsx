import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>Logo</Logo>
    </Nav>
  );
};

// Styled Components
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.h1`
  color: #000;
  font-size: 1.5rem;
`;

export default Navbar;
