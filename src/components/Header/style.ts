import styled from 'styled-components';

const Header = styled.div`
  .navbar {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 80px;
    padding: 0px 30px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: rgba(32, 29, 32);
  }

  .navbar-backdrop {
    height: 80px;
  }

  .logo {
    width: 125px;
  }
`;

export default Header;
