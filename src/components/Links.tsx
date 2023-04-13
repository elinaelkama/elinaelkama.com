import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { accent, lg, md, sm, textPrimary, textShadow, typeface } from "../style/DesignSystem";

const Container = styled.div`
	padding: ${sm};
	display: inline-flex;
	gap: ${md};
`
const Link = styled.a`
	text-decoration: none;
	font-family: ${typeface};
	color: black;
	font-size: ${md};
	&:hover{
		text-decoration: none;
		color: ${accent};
	}
`

const Links = () => {
	return (
		<Container>
			<Link href="https://www.linkedin.com/in/elina-elkama-99423a232/" target="_blank"><FaLinkedin /> <span>LinkedIn</span></Link>
			<Link href="https://github.com/elinaelkama" target="_blank"><FaGithub /> <span>GitHub</span></Link>
		</Container>
	)
}

export default Links