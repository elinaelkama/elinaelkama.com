import { FaLinkedin, FaGithub } from "react-icons/fa";
import LinkButton from "./LinkButton";
import styled from "styled-components";
import { md } from "../style/DesignSystem";

const Container = styled.div`
	display: inline-flex;
	gap: ${md};
`

const Links = () => {
	return (
		<Container>
			<LinkButton href="https://www.linkedin.com/in/elina-elkama-99423a232/"><FaLinkedin /><span>LinkedIn</span></LinkButton>
			<LinkButton href="https://github.com/elinaelkama"><FaGithub /><span>GitHub</span></LinkButton>
		</Container>
	)
}

export default Links