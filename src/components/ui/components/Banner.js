import styled from 'styled-components';
import BackgroundImage from '../objects/BackgroundImage';
import { breakpoints } from '../../../styles/theme';

const Banner = styled(BackgroundImage)`
    @media (min-width: ${breakpoints[2]}) {
        position: fixed;
        top: 80px;
        left: 15px;
        height: 300px;
        width: calc(100% - 30px);
        z-index: 1;
    }
`
Banner.defaultProps = {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: 1,
    height: 200,
}

export default Banner;
