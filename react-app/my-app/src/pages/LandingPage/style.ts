import Styled from 'styled-components'

const LandingPageStyle = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .login {
    border: 3px solid var(--color-blue-100);
    padding: 30px;
    border-radius: 15px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }
`

export default LandingPageStyle
