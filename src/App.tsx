import styled from 'styled-components'
import Portrait from './components/Portrait'
import { backgroundPrimary } from './style/DesignSystem'

const Container = styled.div`
  background-color: ${backgroundPrimary};
  padding: 0em;
  min-height: 100vh;
`

function App() {
  return (
    <Container className="App">
      <Portrait altText='Portrait of Elina' />
      <h1>Elina Elkama</h1>
    </Container>
  )
}

export default App
