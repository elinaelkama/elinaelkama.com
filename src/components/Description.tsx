import styled from 'styled-components'
import { accent, lg, md, sm, xs } from '../style/DesignSystem'

type Props = {}

const Introduction = styled.div`
	font-size: ${sm};
	margin: ${sm};
	max-width: 61rem;
`
const Header = styled.h2`
	font-size: ${md};
	margin: ${xs};
`
const Container = styled.div`
	border-left: 15px solid ${accent};
	padding-left: ${xs};
	max-height: 20rem;
`

const Description = (props: Props) => {
	return (
		<Container>
			<Header>Description</Header>
			<Introduction>
				<p>I'm a student at Haaga-Helia University of Applied Sciences, studying Business Information Technology.</p>
				<p>My most recent work is a Discord Bot, that is written with Python, is fully tested and is published.
					It has a CI/CD pipeline that publishes a new version of the bot up and running once I make a commit to GitHub.</p>
				<p>I'm currently looking for work and or work placement.</p>
			</Introduction>
		</Container>
	)
}

export default Description