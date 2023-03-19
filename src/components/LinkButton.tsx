import { ReactNode } from "react"
import styled from "styled-components"
import { buttonPrimary, md, xs } from "../style/DesignSystem"


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
`

const LinkButton = ({ children, href }: Props) => {
	return (
		<Link href={href}><Button>{children}</Button></Link>
	)
}

export default LinkButton