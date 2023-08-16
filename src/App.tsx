import styled from 'styled-components'
import Portrait from './components/Portrait'
import faciPicture from './assets/faci.jpg'
import facadePicture from './assets/facade.jpg'
import dbdPicture from './assets/dbdperk.jpg'
import crappyBird from './assets/crappybird2.png'
import { accent, backgroundPrimary, backgroundSecondary, lg, screenSmallPhone, shadowLg, sm, typeface, xl, xs } from './style/DesignSystem'
import Links from './components/Links'
import Title from './components/Title'
import Section from './components/Section'
import Icons from './components/Icons'
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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Lato&family=Questrial&display=swap" />
        <meta name='theme-color' content={accent} />
        <meta name='description' content="Portfolio of Software Developer Elina Elkama" />
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
            <Section title='Façade' git='https://github.com/elinaelkama/facade' demo="https://facade.elinaelkama.com/" img={facadePicture} altText='Restaurant Facade Homepage'>
              <p>A website for a fictional restaurant made with HTML5 and CSS3.</p>
              <p>It is published using GitHub pages.</p>
            </Section>
            <Section title='Faci' git='https://github.com/elinaelkama/faci' img={faciPicture} altText='Faci-bot user profile on Discord'>
              <p>The discord bot is made with Python and discord.py. The code follows Pythons module structure.</p>
              <p>The bots functions are tested using unittest. The coverage of tests is 100 %.</p>
              <p>The project is running on Google Cloud Run. It has a CD/CI pipeline from the GitHub repository.</p>
              <p>The bot is available to be added to your Discord server using the links in GitHub.</p>
            </Section>
            <Section title='Crappy Bird' git='https://github.com/elinaelkama/crappybird' img={crappyBird} altText='CrappyBird Java game'>
              <p>A simple game written in Java because why not.</p>
            </Section>
            <Section title='DBD Perk Randomizer' git='https://github.com/elinaelkama/dbdrperkrandom' demo="https://dbd.lol/" img={dbdPicture} altText='Dead by Daylight Perk Randomizer'>
              <p>Tool to get random perks and character for the game Dead By Daylight.</p>
              <p>Character randomization can be turned on or off. Responsive for mobile usage.</p>
              <p>Made with TypeScript, React, Redux, Vite, GitHub pages.</p>
            </Section>
            <Section title='elinaelkama.com' git='https://github.com/elinaelkama/elinaelkama.com'>
              <p>This page is made with TypeScript and React, using styled-components.</p>
              <p>It's published with GitHub pages.</p>
            </Section>
          </Container>
        </AppContainer>
      </body>
    </html>
  )
}

export default App
