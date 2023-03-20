import styled from 'styled-components'
import Portrait from './components/Portrait'
import { backgroundPrimary, backgroundSecondary, lg, shadowLg, sm, typefacePrimary } from './style/DesignSystem'
import Links from './components/Links'
import Title from './components/Title'

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
  box-shadow: ${shadowLg};
`
const PersonalDetails = styled.div`
  display: grid;
  grid-template-columns: 40rem min-content;
  gap: ${sm};
`

function App() {
  return (
    <AppContainer className="App">
      <Container>
        <PersonalDetails>
          <div>
            <Title />
            <h2>JavaScript, Python, PHP, Java, MySQL, C#, React</h2>
            <Links />
          </div>
          <Portrait altText='Portrait of Elina' />
        </PersonalDetails>
        <div>
          <h2>Description</h2>
        </div>
        <div>
          <h2>Portfolio</h2>
        </div>
      </Container>
    </AppContainer>
  )
}

export default App
