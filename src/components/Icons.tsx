import { FaAws, FaDocker, FaJava, FaPhp, FaPython, FaReact, FaUnity } from "react-icons/fa";
import { SiCsharp, SiGithub, SiGo, SiJavascript, SiMysql, SiPostgresql, SiRuby, SiTypescript } from "react-icons/si";
import styled from "styled-components";
import { backgroundTertiary, lg, md, screenSmallPhone, sm, xs } from "../style/DesignSystem";

type Props = {}

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(8, auto);
	justify-content: space-evenly;
	margin: ${sm} 0;
	flex-wrap: wrap;
	@media screen and (max-width: ${screenSmallPhone}){
		grid-template-columns: repeat(6, auto);
	}
`

const Icon = styled.div`
	background-color: ${backgroundTertiary};
	display: inline-flex;
	margin: ${xs};
	padding: ${xs};
	border-radius: 50%;
	box-shadow: 0.15rem 0.15rem 0px black;
	box-sizing: border-box;
	font-size: ${lg};
	@media screen and (max-width: ${screenSmallPhone}){
		font-size: ${md};
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