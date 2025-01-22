import styled from "styled-components"
import { accent, accentDark, backgroundTertiary, lg, md, screenSmallPhone, sm, xs } from "../style/DesignSystem"

type Props = {}

const Container = styled.div`
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: auto ${md};
`

const Card = styled.div`
	background-color: ${backgroundTertiary};
	padding: ${xs};
	@media screen and (max-width: ${screenSmallPhone}) {
		padding-bottom: 0;
	}
`

const Header = styled.h1`
	font-size: ${lg};
	margin: ${xs};
`

const Subtitle = styled.h2`
	font-size: ${md};
	margin: ${xs};
`
const Underbar = styled.div`
	background: linear-gradient(to bottom, ${accentDark}, ${accent} ${sm});
	height: ${md};
	border-radius: 0 0.2rem 0 0;
`

const Title = (props: Props) => {
	return (
		<Container>
			<Card>
				<Header>Elina Elkama</Header>
				<Subtitle>Software Developer</Subtitle>
			</Card>
			<Underbar></Underbar>
		</Container>
	)
}

export default Title