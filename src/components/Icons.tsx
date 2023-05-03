import styled from "styled-components";
import { FaJava, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { SiMysql, SiJavascript, SiCsharp } from "react-icons/si";
import { lg, md, sm, xxl, xs, accent, backgroundTertiary, screenSmallPhone } from "../style/DesignSystem";

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
	font-size: ${xxl};
	@media screen and (max-width: ${screenSmallPhone}){
		font-size: ${lg};
	}
`
//JavaScript Python PHP Java MySQL C# React

const Icons = (props: Props) => {
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

export default Icons