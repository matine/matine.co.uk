import PropTypes from 'prop-types'
import React from 'react'
import { Box, HeadingDecorated, TextWrapSm } from '../ui'
import { PropTypeGatsbyText, PropTypeGatsbyHtml } from '../../propTypes'

function MyInterests ({
    meInterestsTitle,
    meInterestsText,
    sectionName,
}) {
    if (!meInterestsTitle && !meInterestsText) {
        return null
    }

    return (
        <Box
            mb={ 5 }
            className={ `${ sectionName }-section` }
        >
            { meInterestsTitle &&
                <HeadingDecorated
                    className={ `${ sectionName }-section__heading` }
                >
                    { meInterestsTitle.text }

                </HeadingDecorated>
            }
            { meInterestsText &&
                <TextWrapSm
                    textSpacing
                >
                    <div
                        dangerouslySetInnerHTML={
                            {
                                __html: meInterestsText.html,
                            }
                        }
                    />
                </TextWrapSm>
            }
        </Box>
    )
}

MyInterests.defaultProps = {
    meInterestsTitle: null,
    meInterestsText: null,
    sectionName: null,
}

MyInterests.propTypes = {
    meInterestsTitle: PropTypeGatsbyText,
    meInterestsText: PropTypeGatsbyHtml,
    sectionName: PropTypes.string,
}

export default MyInterests
