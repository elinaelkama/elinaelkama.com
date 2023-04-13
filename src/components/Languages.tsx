import styled from "styled-components";
import { FaJava, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { SiMysql, SiJavascript, SiCsharp } from "react-icons/si";
import { lg, md, sm, xl, xs } from "../style/DesignSystem";

type Props = {}

const Container = styled.div`
	max-height: 30rem;
	max-width: 30rem;
	padding: ${xs} ${sm};
`

const Header = styled.h1`
	padding: ${xs} ${sm};
	text-indent: ${md};
	word-spacing: ${md};
`
//JavaScript Python PHP Java MySQL C# React

const Languages = (props: Props) => {
	return (
		<Container>
			<Header>
				<SiJavascript /> <FaPython /> <FaPhp /> <FaJava /> <SiMysql /> <SiCsharp /> <FaReact />
			</Header>
		</Container>
	)
}

export default Languages