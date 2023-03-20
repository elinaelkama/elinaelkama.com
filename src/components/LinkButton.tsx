import { ReactNode } from "react"
import styled from "styled-components"
import { accent, buttonPrimary, md, shadowSm, xs } from "../style/DesignSystem"


type Props = {
	children: ReactNode
	href: string
}

const Link = styled.a`
	text-decoration: none;
`

const Button = styled.button`
	font-size: ${md};
	display: inline-flex;
    justify-content: center;
    align-items: center;
	padding: ${xs};
	gap: ${xs};
	cursor: pointer;
	background-color: ${buttonPrimary};
	&:hover{
		color: white;
		background-color: ${accent};
	}
	box-shadow: ${shadowSm};
`

const LinkButton = ({ children, href }: Props) => {
	return (
		<Link href={href}><Button>{children}</Button></Link>
	)
}

export default LinkButton