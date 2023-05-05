import styled from 'styled-components'
import Portrait from './components/Portrait'
import faciPicture from './assets/faci.jpg'
import { accent, backgroundPrimary, backgroundSecondary, lg, screenSmallPhone, shadowLg, sm, typeface, xl, xs } from './style/DesignSystem'
import Links from './components/Links'
import Title from './components/Title'
import Section from './components/Section'
import Icons from './components/Icons'
import Showcase from './components/Showcase'
import './index.css'

const AppContainer = styled.div`
  background-color: ${backgroundPrimary};
  padding: 0em;
  min-height: 100vh;
`
const Container = styled.div`
  background-color: ${backgroundSecondary};
  width: min(100%,70rem);
  min-width: 20rem;
  min-height: 100vh;
  box-sizing: border-box;
  padding: ${lg};
  display: grid;
  margin: auto;
  box-shadow: ${shadowLg};
  @media screen and (max-width: ${screenSmallPhone}){
    justify-content: left;
    padding: ${sm};
    box-shadow: none;
  }
`
const PersonalDetails = styled.div`
  display: grid;
  grid-template-columns: auto 20rem;
  justify-content: space-evenly;
  gap: ${sm};
  @media screen and (max-width: ${screenSmallPhone}){
    gap: none;
    grid-template-columns: auto;
  }
`

function App() {
  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Nunito+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet"></link>
        <meta name='theme-color' content={accent}></meta>
      </head>
      <body>
        <AppContainer className="App">
          <Container>
            <PersonalDetails>
              <div>
                <Title />
                <Icons />
              </div>
              <div>
                <Portrait altText='Portrait of Elina' />
                <Links />
              </div>
            </PersonalDetails>
            <Section title='About Me'>
              <p>I'm a student at Haaga-Helia University of Applied Sciences, studying Business Information Technology.</p>
              <p>My most recent work is a Discord Bot, that is written with Python, is fully tested and is published.
                It has a CI/CD pipeline that publishes a new version of the bot up and running once I make a commit to GitHub.</p>
              <p>I'm currently looking for work and or work placement.</p>
            </Section>
            <Section title='Portfolio'>
              <Showcase title='Discord bot' link='https://github.com/elinaelkama/faci' img={faciPicture} altText='Faci-bot user profile on Discord'>
                <p>The discord bot is made with Python and discord.py. The code follows Pythons module structure.</p>
                <p>The bots functions are tested using unittest. The coverage of tests with coverage is 100 %.</p>
                <p>The project is running on Google Cloud Run. It has a CD/CI pipeline from the GitHub repository.</p>
                <p>The bot is available to be added to your Discord server using the links in GitHub.</p>
              </Showcase>
              <Showcase title='Website' link='https://github.com/elinaelkama/elinaelkama.com'>
                <p>This page is made with TypeScript and React, using styled-components.</p>
                <p>It's published using GitHub pages.</p>
              </Showcase>
            </Section>
          </Container>
        </AppContainer>
      </body>
    </html>
  )
}

export default App
