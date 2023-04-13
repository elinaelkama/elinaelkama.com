import styled from 'styled-components'
import { accent, backgroundTertiary, lg, md, sm, textSize, xs, xxl } from '../style/DesignSystem'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	title: string
}

const Body = styled.div`
	font-size: ${textSize};
	margin: ${sm};
	max-width: 61rem;
`
const Header = styled.h2`
	font-size: ${md};
	margin: ${xs};
`
const Container = styled.div`
	border-left: ${xxl} solid ${accent};
	padding: ${xs};
	max-height: 20rem;
	background-color: ${backgroundTertiary};
`

const Section = ({ title, children }: Props) => {
	return (
		<Container>
			<Header>{title}</Header>
			<Body>
				{children}
			</Body>
		</Container>
	)
}

export default Section