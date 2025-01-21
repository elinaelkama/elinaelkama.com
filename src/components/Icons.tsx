import styled from "styled-components";
import { FaJava, FaPhp, FaPython, FaReact, FaAws, FaDocker, FaUnity } from "react-icons/fa";
import { SiMysql, SiJavascript, SiCsharp, SiTypescript, SiGo, SiRuby, SiHtml5, SiCss3, SiPostgresql, SiGithub } from "react-icons/si";
import { lg, md, sm, xxl, xs, accent, backgroundTertiary, screenSmallPhone, xl } from "../style/DesignSystem";

type Props = {}

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: ${sm} 0;
	flex-wrap: wrap;
`

const Icon = styled.div`
	background-color: ${backgroundTertiary};
	//background-color: rgba(255, 255, 255, 0.5);
	display: inline-flex;
	margin: ${xs};
	padding: ${xs};
	border-radius: 50%;
	font-size: ${xl};
	@media screen and (max-width: ${screenSmallPhone}){
		font-size: ${lg};
	}
`
//JavaScript Python PHP Java MySQL C# React

const Icons = (props: Props) => {
	return (
		<Container>
			<Icon><SiJavascript /></Icon>
			<Icon><SiTypescript /></Icon>
			<Icon><FaReact /></Icon>
			<Icon><FaJava /></Icon>
			<Icon><FaPython /></Icon>
			<Icon><SiGo /></Icon>
			<Icon><FaPhp /></Icon>
			<Icon><SiCsharp /></Icon>
			<Icon><SiRuby /></Icon>
			<Icon><SiMysql /></Icon>
			<Icon><SiPostgresql /></Icon>
			<Icon><FaAws /></Icon>
			<Icon><FaDocker /></Icon>
			<Icon><FaUnity /></Icon>
			<Icon><SiGithub /></Icon>
		</Container>
	)
}

export default Icons