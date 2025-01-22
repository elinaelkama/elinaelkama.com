import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { accent, accentDark, backgroundTertiary, md, screenSmallPhone, sm, xs } from "../style/DesignSystem";

const Container = styled.div`
	margin: 0;
	padding: 0;
	display: grid;
	width: 100%;
	grid-template-columns: auto;
	grid-template-rows: auto ${md};
`

const LinkCont = styled.div`
	padding: ${sm};
	display: flex;
	gap: ${xs};
	background-color: ${backgroundTertiary};
	justify-content: space-evenly;
`
const Link = styled.a`
	display: flex;
	align-items: center;
	gap: ${xs};
	color: black;
	font-size: ${md};
	transition: 0.1s linear color;
	&:hover{
		text-decoration: none;
		color: ${accent};
	}
`

const Underbar = styled.div`
	background: linear-gradient(to bottom, ${accentDark}, ${accent} ${sm});
	height: ${md};
	border-radius: 0 0.2rem 0 0;
	@media screen and (max-width: ${screenSmallPhone}) {
		height: ${sm};
	}
`

const Links = () => {
	return (
		<Container>
			<LinkCont>
				<Link href="https://www.linkedin.com/in/elina-elkama-99423a232/" target="_blank"><FaLinkedin /> <span>LinkedIn</span></Link>
				<Link href="https://github.com/elinaelkama" target="_blank"><FaGithub /> <span>GitHub</span></Link>
			</LinkCont>
			<Underbar></Underbar>
		</Container>
	)
}

export default Links