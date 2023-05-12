import styled from 'styled-components'
import { accent, backgroundTertiary, md, screenSmallPad, screenSmallPhone, shadowSm, sm, textSize, xs, xxl } from '../style/DesignSystem'
import { ReactNode } from 'react'
import { FaGithub, FaColumns } from 'react-icons/fa'

type Props = {
	children: ReactNode
	title?: string
	git?: string
	demo?: string
	img?: string
	altText?: string
}

const Body = styled.div`
	font-size: ${textSize};
	max-width: 61rem;
	p:first-child{
		margin-top: 0;
	}
	@media screen and (max-width: ${screenSmallPhone}) {
		margin: 0;
		padding: 0;
	}
`
const Header = styled.h2`
	font-size: ${md};
	margin: 0 0 ${sm} 0;
`
const Container = styled.div`
	border-left: ${xxl} solid ${accent};
	padding: ${md};
	margin: ${sm} 0;
	background-color: ${backgroundTertiary};
	@media screen and (max-width: ${screenSmallPhone}) {
		border-width: ${xs};
		padding: ${sm};
	}
`
const Link = styled.a`
	display: flex;
	align-items: center;
	gap: ${xs};
	text-decoration: none;
	color: black;
	font-size: ${sm};
	transition: 0.1s linear color;
	&:hover{
		text-decoration: none;
		color: ${accent};
	}
`
const ImageCont = styled.div`
	display: grid;
	gap: ${md};
	grid-template-columns: min(100%, 20rem) auto;
	@media screen and (max-width: ${screenSmallPad}){
		grid-template-columns: none;
		text-align: left;
  	}
`

const Image = styled.img`
	justify-self: center;
	width: min(100%, 20rem);
	box-shadow: ${shadowSm};
`

const Section = ({ title, children, img, git, demo, altText }: Props) => {
	if (img != undefined) {
		return (
			<Container>
				<Header>{title}</Header>
				<ImageCont>
					<Image alt={altText} src={img}></Image>
					<Body>
						{children}
						{git && <Link href={git} target="_blank"><FaGithub />GitHub</Link>}
						{demo && <Link href={demo} target="_blank"><FaColumns />Webpage</Link>}
					</Body>
				</ImageCont>
			</Container>
		)
	}
	return (
		<Container>
			<Header>{title}</Header>
			<Body>
				{children}
				{git && <Link href={git} target="_blank"><FaGithub />GitHub</Link>}
				{demo && <Link href={demo} target="_blank"><FaColumns />Webpage</Link>}
			</Body>
		</Container>
	)
}

export default Section