import styled from "styled-components";
import { FaJava, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { SiMysql, SiJavascript, SiCsharp } from "react-icons/si";
import { lg, md, sm, xxl, xs, accent, backgroundTertiary } from "../style/DesignSystem";

type Props = {}

const Container = styled.div`
	max-height: 30rem;
	display: flex;
	justify-content: space-evenly;
	margin: ${sm} 0;
`

const Icon = styled.div`
	background-color: ${backgroundTertiary};
	//background-color: rgba(255, 255, 255, 0.5);
	display: inline-flex;
	margin: ${xs};
	padding: ${xs};
	border-radius: 50%;
	font-size: ${xxl};
`
//JavaScript Python PHP Java MySQL C# React

const Languages = (props: Props) => {
	return (
		<Container>
			<Icon><SiJavascript /></Icon>
			<Icon><FaPython /></Icon>
			<Icon><FaPhp /></Icon>
			<Icon><FaJava /></Icon>
			<Icon><SiMysql /></Icon>
			<Icon><SiCsharp /></Icon>
			<Icon><FaReact /></Icon>
		</Container>
	)
}

export default Languages