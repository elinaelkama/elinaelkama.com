import styled from 'styled-components'
import { accent, backgroundTertiary, button, md, screenSmallPad, screenSmallPhone, shadowSm, sm, textSize, xs, xxl } from '../style/DesignSystem'
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
	display: flex;
	margin: ${sm} 0;
	background-color: ${backgroundTertiary};
	@media screen and (max-width: ${screenSmallPhone}) {
		border-width: ${xs};
	}
`
const Sidebar = styled.div`
	background: linear-gradient(to right, ${accent}, 43px, black);
	min-width: ${xxl};
	max-height: inherit;
	border-radius: 0 0.2rem 0 0;
	@media screen and (max-width: ${screenSmallPhone}) {
		min-width: ${md};
		background: linear-gradient(to right, ${accent}, 21px, black);
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

const TextCont = styled.div`
	display: grid;
	padding: ${md};
	@media screen and (max-width: ${screenSmallPhone}) {
		padding: ${sm};
	}
`

const Image = styled.img`
	justify-self: center;
	width: min(100%, 20rem);
	box-shadow: ${shadowSm};
`
const Button = styled.button`
	background-color: ${button};
	border-radius: 0.2rem;
	box-shadow: 0.15rem 0.15rem 0px black;
	box-sizing: border-box;
	margin: 0 0.2rem;
`

const Section = ({ title, children, img, git, demo, altText }: Props) => {
	if (img != undefined) {
		return (
			<Container>
				<Sidebar></Sidebar>
				<TextCont>
					<Header>{title}</Header>
					<ImageCont>
						<Image alt={altText} src={img}></Image>
						<Body>
							{children}
							{git && <Button><Link href={git} target="_blank"><FaGithub />GitHub</Link></Button>}
							{demo && <Button><Link href={demo} target="_blank"><FaColumns />Webpage</Link></Button>}
						</Body>
					</ImageCont>
				</TextCont>
			</Container>
		)
	}
	return (
		<Container>
			<Sidebar></Sidebar>
			<TextCont>
				<Header>{title}</Header>
				<Body>
					{children}
					{git && <Button><Link href={git} target="_blank"><FaGithub />GitHub</Link></Button>}
					{demo && <Button><Link href={demo} target="_blank"><FaColumns />Webpage</Link></Button>}
				</Body>
			</TextCont>
		</Container>
	)
}

export default Section