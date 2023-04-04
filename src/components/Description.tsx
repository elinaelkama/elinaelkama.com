import styled from 'styled-components'
import { md, sm, textParagraph, textPrimary, xs } from '../style/DesignSystem'

type Props = {}

const Introduction = styled.p`
	color: ${textParagraph};
	font-size: ${sm};
`
const Header = styled.h2`
	font-size: ${md};
	color: ${textPrimary};
	margin: ${xs};
`

const Description = (props: Props) => {
	return (
		<div>
			<Header>Description</Header>
			<Introduction>
				I'm a student at Haaga-Helia University of Applied Sciences, studying Business Information Technology.
			</Introduction>
			<Introduction>
				My my most recent work is a Discord Bot, that is written with Python, is fully tested and is published.
				It has a CI/CD pipeline that publishes a new version of the bot up and running once I make a commit to GitHub.
			</Introduction>
		</div>
	)
}

export default Description