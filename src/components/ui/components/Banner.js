import styled from 'styled-components';
import Image from '../objects/Image';
import { breakpoints } from '../../ui/theme';

const Banner = styled(Image)`
    width: 100%;
    object-fit: cover;
    position: relative;

    // @media (min-width: ${breakpoints[2]}) {
    //     position: absolute;
    //     top: 80px;
    //     left: 15px;
    //     z-index: 1;
    //     width: calc(100% - 30px);
    // }
`

export default Banner;
