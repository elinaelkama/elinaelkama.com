import styled from 'styled-components'
import { accent, backgroundTertiary, lg, md, sm, textSize, typeface, xs, xxl } from '../style/DesignSystem'
import { ReactNode } from 'react'
import { FaGithub } from "react-icons/fa";


type Props = {
	children: ReactNode
	title: string
	link?: string
}

const Body = styled.div`
	font-size: ${textSize};
	margin: ${sm};
	max-width: 61rem;
`
const Header = styled.h2`
	font-size: ${textSize};
	margin: ${xs};
`
const Container = styled.div`
	padding: ${xs};
	background-color: ${backgroundTertiary};
	border-top: ${xs} solid ${accent};
`
const Link = styled.a`
	text-decoration: none;
	font-family: ${typeface};
	color: black;
	font-size: ${sm};
	transition: 0.1s linear color;
	&:hover{
		text-decoration: none;
		color: ${accent};
	}
`

const Showcase = ({ title, children, link }: Props) => {
	return (
		<Container>
			<Header>{title}</Header>
			<Body>
				{children}
			</Body>
			<Link href={link} target="_blank"><FaGithub />GitHub</Link>
		</Container>
	)
}


export default Showcase