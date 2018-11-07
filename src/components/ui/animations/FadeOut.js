import React from 'react'
import styled, { keyframes } from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'

const fadeOut = keyframes`
    0% {
        opacity: initial;
    }

    100% {
        opacity: 0;
    }
`

const FadeOutWrapper = styled.div`
    .item-leave.item-leave-active {
        animation: ${ fadeOut } 1s ease-out;
    }
}`

const FadeOut = ({
    ...props
}) => (
    <FadeOutWrapper>
        <CSSTransitionGroup
            transitionName="item"
            transitionEnter={ false }
            { ...props }
        />
    </FadeOutWrapper>
)

export default FadeOut
