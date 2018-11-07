import PropTypes from 'prop-types'
import React from 'react'
import { Box, HeadingDecorated, TextWrapSm } from '../ui'
import { PropTypeGatsbyText, PropTypeGatsbyHtml } from '../../propTypes'

function MySkills ({
    meSkillsTitle,
    meSkillsText,
    sectionName,
}) {
    if (!meSkillsTitle && !meSkillsText) {
        return null
    }

    return (
        <Box
            mb={ 5 }
            className={ `${ sectionName }-section` }
        >
            { meSkillsTitle &&
                <HeadingDecorated
                    className={ `${ sectionName }-section__heading` }
                >
                    { meSkillsTitle.text }
                </HeadingDecorated>
            }
            { meSkillsText &&
                <TextWrapSm
                    listStyle="none"
                    textSpacing
                    headings
                >
                    <div
                        dangerouslySetInnerHTML={
                            {
                                __html: meSkillsText.html,
                            }
                        }
                    />
                </TextWrapSm>
            }
        </Box>
    )
}

MySkills.defaultProps = {
    meSkillsTitle: null,
    meSkillsText: null,
    sectionName: null,
}

MySkills.propTypes = {
    meSkillsTitle: PropTypeGatsbyText,
    meSkillsText: PropTypeGatsbyHtml,
    sectionName: PropTypes.string,
}

export default MySkills
