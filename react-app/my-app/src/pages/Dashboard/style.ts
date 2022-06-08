import Styled from 'styled-components'

const DashoardStyle = Styled.div`
  padding: 30px;
  
  .list-container {
    display: flex;
    flex-wrap: wrap;
  }

  .pokemon {
    margin: 5px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 3px solid var(--color-blue-100);
    background-color: var(--color-yellow-100);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  
  h1 {
    color: var(--color-blue-100);
  }
`

export default DashoardStyle
