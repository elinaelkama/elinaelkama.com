import styled from 'styled-components'
import { accent, backgroundTertiary, lg, md, screenSmallPhone, sm, textSize, xs, xxl } from '../style/DesignSystem'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	title: string
}

const Body = styled.div`
	font-size: ${textSize};
	margin: ${sm};
	max-width: 61rem;
	@media screen and (max-width: ${screenSmallPhone}) {
		margin: 0;
		padding: 0;
	}
`
const Header = styled.h2`
	font-size: ${md};
	margin: ${xs};
	@media screen and (max-width: ${screenSmallPhone}) {
		margin: 0;
	}
`
const Container = styled.div`
	border-left: ${xxl} solid ${accent};
	padding: ${xs};
	margin: ${sm} 0;
	background-color: ${backgroundTertiary};
	@media screen and (max-width: ${screenSmallPhone}) {
		border-width: ${xs};
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