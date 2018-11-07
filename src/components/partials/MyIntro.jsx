import PropTypes from 'prop-types'
import React from 'react'
import { Box, HeadingDecorated, TextWrapMd } from '../ui'
import { PropTypeGatsbyText, PropTypeGatsbyHtml } from '../../propTypes'

function MyIntro ({
    meIntroTitle,
    meIntroText,
    sectionName,
}) {
    if (!meIntroTitle && !meIntroText) {
        return null
    }

    return (
        <Box
            mb={ 5 }
            className={ `${ sectionName }-section` }
        >
            { meIntroTitle &&
                <HeadingDecorated>
                    { meIntroTitle.text }
                </HeadingDecorated>
            }
            { meIntroText &&
                <TextWrapMd
                    textSpacing
                >
                    <div
                        dangerouslySetInnerHTML={
                            {
                                __html: meIntroText.html,
                            }
                        }
                    />
                </TextWrapMd>
            }
        </Box>
    )
}

MyIntro.defaultProps = {
    meIntroTitle: null,
    meIntroText: null,
    sectionName: null,
}

MyIntro.propTypes = {
    meIntroTitle: PropTypeGatsbyText,
    meIntroText: PropTypeGatsbyHtml,
    sectionName: PropTypes.string,
}

export default MyIntro
