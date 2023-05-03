import styled from 'styled-components'
import elinaPortrait from '../assets/elina_2b.jpg'
import { imgShadow, md, screenSmallPhone, xs } from '../style/DesignSystem'

type Props = {
	altText?: string
}
const Container = styled.div`
	text-align: center;
`

const Image = styled.img`
	width: min(100%, 30rem);
	box-shadow: ${imgShadow};
	margin-bottom: ${md};
	box-sizing: border-box;
`

const Portrait = ({ altText }: Props) => {
	return (
		<Container>
			<Image src={elinaPortrait} alt={altText} />
		</Container>
	)
}

export default Portrait