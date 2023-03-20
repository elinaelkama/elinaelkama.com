import styled from 'styled-components'
import elinaPortrait from '../assets/elina_2b.jpg'
import { shadowMd, shadowSm } from '../style/DesignSystem'

type Props = {
	altText?: string
}

const Image = styled.img`
	max-height: 30rem;
	max-width: 30rem;
	box-shadow: ${shadowMd};
`

const Portrait = ({ altText }: Props) => {
	return (
		<Image src={elinaPortrait} alt={altText} />
	)
}

export default Portrait