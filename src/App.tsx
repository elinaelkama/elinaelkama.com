import styled from 'styled-components'
import Portrait from './components/Portrait'
import { backgroundPrimary, backgroundSecondary, lg, shadowLg, sm, typeface, xl } from './style/DesignSystem'
import Links from './components/Links'
import Title from './components/Title'
import Description from './components/Description'
import Languages from './components/Languages'

const AppContainer = styled.div`
  background-color: ${backgroundPrimary};
  padding: 0em;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-content: start;
  font-family: ${typeface};
`
const Container = styled.div`
  background-color: ${backgroundSecondary};
  max-width: 50vw;
  min-width: 64rem;
  min-height: 100vh;
  padding: ${lg};
  display: grid;
  box-shadow: ${shadowLg};
`
const PersonalDetails = styled.div`
  display: grid;
  grid-template-columns: 40rem min-content;
  gap: ${sm};
  max-height: 20rem;
`

function App() {
  return (
    <AppContainer className="App">
      <Container>
        <PersonalDetails>
          <div>
            <Title />
            <Languages />
          </div>
          <div>
            <Portrait altText='Portrait of Elina' />
            <Links />
          </div>
        </PersonalDetails>
        <div>
          <Description />
        </div>
        {/*<div>
          <h2>Portfolio</h2>
  </div>*/}
      </Container>
    </AppContainer>
  )
}

export default App
