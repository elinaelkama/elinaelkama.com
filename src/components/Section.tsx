import styled from 'styled-components'
import { accent, backgroundTertiary, lg, md, screenSmall, sm, textSize, xs, xxl } from '../style/DesignSystem'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	title: string
}

const Body = styled.div`
	font-size: ${textSize};
	margin: ${sm};
	max-width: 61rem;
	@media screen and (max-width: ${screenSmall}) {
		margin: none;
		padding: none;
	}
`
const Header = styled.h2`
	font-size: ${md};
	margin: ${xs};
	@media screen and (max-width: ${screenSmall}) {
		margin: none;
		padding: none;
	}
`
const Container = styled.div`
	border-left: ${xxl} solid ${accent};
	padding: ${xs};
	margin: ${sm} 0;
	background-color: ${backgroundTertiary};
	@media screen and (max-width: ${screenSmall}) {
		border-left: ${md} solid ${accent};
		max-width: 90%;
	}
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