import styled from 'styled-components'
import { accent, backgroundTertiary, lg, md, screenSmallPad, sm, textSize, typeface, xs, xxl } from '../style/DesignSystem'
import { ReactNode } from 'react'
import { FaGithub } from "react-icons/fa";


type Props = {
	children: ReactNode
	title: string
	link?: string
	img?: string
	altText?: string
}

const Body = styled.div`
	font-size: ${textSize};
	max-width: 61rem;
	margin-left: ${md};
	@media screen and (max-width: ${screenSmallPad}){
		margin-left: 0;
  	}
`
const Header = styled.h2`
	font-size: ${textSize};
`
const Container = styled.div`
	padding: ${sm};
	background-color: ${backgroundTertiary};
	border-top: ${xs} solid ${accent};
	@media screen and (max-width: ${screenSmallPad}){
		padding: 0;
  	}
`
const Link = styled.a`
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
	grid-template-columns: auto auto;
	@media screen and (max-width: ${screenSmallPad}){
		grid-template-columns: none;
		text-align: left;
  	}
`

const Image = styled.img`
	width: min(100%, 20rem);
`

const Showcase = ({ title, children, link, img, altText }: Props) => {
	if (img != undefined) {
		return (
			<Container>
				<Header>{title}</Header>
				<ImageCont>
					<Image alt={altText} src={img}></Image>
					<Body>
						{children}
						<Link href={link} target="_blank"><FaGithub />GitHub</Link>
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
			</Body>
			<Link href={link} target="_blank"><FaGithub />GitHub</Link>
		</Container>
	)
}


export default Showcase