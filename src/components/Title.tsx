import styled from "styled-components"
import { accent, backgroundTertiary, lg, md, screenSmall, sm, xs, xxl } from "../style/DesignSystem"

type Props = {}

const Card = styled.div`
	border-bottom: ${md} solid ${accent};
	background-color: ${backgroundTertiary};
	padding: ${xs};
	@media screen and (max-width: ${screenSmall}) {
		border-bottom: ${xs} solid ${accent};
	}
`

const Header = styled.h1`
	font-size: ${lg};
	margin: ${xs};
`

const Subtitle = styled.h2`
	font-size: ${md};
	margin: ${sm};
`

const Title = (props: Props) => {
	return (
		<Card>
			<Header>Elina Elkama</Header>
			<Subtitle>Software Developer</Subtitle>
		</Card>
	)
}

export default Title