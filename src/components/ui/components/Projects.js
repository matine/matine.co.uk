import styled, { css } from 'styled-components';
import Image from '../objects/Image';
import { breakpoints } from '../../ui/theme';

export const Ipad = styled(Image)`
    width: 40%;
    display: inline-block;

    @media (min-width: ${breakpoints[3]}) {
        width: 250px;
        margin-left: 180px;
    }
`

export const Iphone = styled(Image)`
    width: 22%;
    display: inline-block;

    @media (min-width: ${breakpoints[3]}) {
        position: absolute;
        top: 85px;
        left: 0;
        width: 150px;
        margin-left: 120px;
    }
`

export const Imac = styled(Image)`
    width: 100%;
    max-width: 800px;
    display: block;
    margin: 0 auto;
`

export const TouchDevices = styled.div`
    margin: -5% auto 10% auto;
    width: 100%;
    max-width: 750px;
    text-align: center;

    @media (min-width: ${breakpoints[3]}) {
        position: absolute;
        top: 250px;
        left: 50%;
        margin: 0;
        max-width: 430px;
    }
`

export const ProjectsNav = styled.div`
    position: fixed;
    top: 300px;
    z-index: 0;

    @media (min-width: ${breakpoints[2]}) {
        top: 318px;
        z-index: 1;
    }

    @media (min-width: ${breakpoints[2]}) {
        top: 400px;
    }

    ${props => props.direction === 'next' && css`
        right: 18px;
        text-align: left;

        @media (min-width: ${breakpoints[3]}) {
            right: 40px;
        }
    `}

    ${props => props.direction === 'prev' && css`
        left: 18px;
        text-align: right;

        @media (min-width: ${breakpoints[3]}) {
            left: 40px;
        }
    `}
`

export const BrowserWindow = styled.div`
    height: 33px;
    width: 100%;
    background-color: #e0e0e0;
    padding: 5px 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .controls {
        > span {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 12px;
            margin-right: 7px;

            &:nth-child(1) {
                border: 1px solid #db3e39;
                background: radial-gradient(circle, #ff7b76 0%, #ff544d 100%);
            }
            &:nth-child(2) {
                border: 1px solid #da9617;
                background: radial-gradient(circle, #ffcc6d 0%, #ffb429 100%);
            }
            &:nth-child(3) {
                border: 1px solid #12a127;
                background: radial-gradient(circle, #83c48c 0%, #24c238 100%);
            }
        }
    }
`