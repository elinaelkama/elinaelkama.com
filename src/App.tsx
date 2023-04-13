import styled from 'styled-components'
import Portrait from './components/Portrait'
import { backgroundPrimary, backgroundSecondary, lg, shadowLg, sm, typeface, xl } from './style/DesignSystem'
import Links from './components/Links'
import Title from './components/Title'
import Section from './components/Section'
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
  min-width: 35rem;
  min-height: 100vh;
  padding: ${lg};
  display: grid;
  box-shadow: ${shadowLg};
`
const PersonalDetails = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  gap: ${sm};
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
          <Section title='Description'>
            <p>I'm a student at Haaga-Helia University of Applied Sciences, studying Business Information Technology.</p>
            <p>My most recent work is a Discord Bot, that is written with Python, is fully tested and is published.
              It has a CI/CD pipeline that publishes a new version of the bot up and running once I make a commit to GitHub.</p>
            <p>I'm currently looking for work and or work placement.</p>
          </Section>
        </div>
        {/*<div>
          <h2>Portfolio</h2>
  </div>*/}
      </Container>
    </AppContainer>
  )
}

export default App
