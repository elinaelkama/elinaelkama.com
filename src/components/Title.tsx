import styled from "styled-components"
import { accent, border, lg, md, sm, xs } from "../style/DesignSystem"

type Props = {}

const Card = styled.div`
	border: ${sm} double ${accent};
	border-radius: ${xs};
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