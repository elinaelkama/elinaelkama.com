import styled from 'styled-components'
import Portrait from './components/Portrait'
import { backgroundPrimary, backgroundSecondary, lg, typefacePrimary } from './style/DesignSystem'
import Links from './components/Links'

const AppContainer = styled.div`
  background-color: ${backgroundPrimary};
  padding: 0em;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-content: start;
  font-family: ${typefacePrimary};
`
const Container = styled.div`
  background-color: ${backgroundSecondary};
  max-width: 50vw;
  padding: ${lg};
  display: grid;
`
const PersonalDetails = styled.div`
  display: grid;
  grid-template-columns: 40rem min-content;
`

function App() {
  return (
    <AppContainer className="App">
      <Container>
        <PersonalDetails>
          <div>
            <h1>Elina Elkama</h1>
            <h2>Software Developer</h2>
            <h2>Keywords</h2>
            <Links />
          </div>
          <Portrait altText='Portrait of Elina' />
        </PersonalDetails>
        <div>
          <h1>Kuvaus</h1>
        </div>
        <div>
          <h1>Portfolio</h1>
        </div>
      </Container>
    </AppContainer>
  )
}

export default App
