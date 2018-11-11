import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import { TextWrap, ProjectsNav } from '../ui'

function ProjectPrevNext ({
    projectsContent,
    currentProjectUid,
}) {
    const numberOfProjects = projectsContent.length
    const currentProjectPos = projectsContent.map(project => project.node.uid).indexOf(currentProjectUid)

    const renderProjectLink = (project, linkText) => (
        <Link to={ `/work/${ project.uid }` }>
            { linkText }
        </Link>
    )

    const prevProject = () => {
        if (currentProjectPos > 0) {
            const prevProjectData = projectsContent[currentProjectPos - 1]

            if (!prevProjectData) {
                return null
            }

            return {
                uid: prevProjectData.node.uid,
                title: prevProjectData.node.data.project_title.text,
            }
        } else {
            return null
        }
    }

    const nextProject = () => {
        if (currentProjectPos < numberOfProjects) {
            const nextProjectData = projectsContent[currentProjectPos + 1]

            if (!nextProjectData) {
                return null
            }

            return {
                uid: nextProjectData.node.uid,
                title: nextProjectData.node.data.project_title.text,
            }
        } else {
            return null
        }
    }

    const prevProjectDetails = prevProject()
    const nextProjectDetails = nextProject()

    return (
        <TextWrap fontSize={[26, 26, 40]}>
            <ProjectsNav
                direction="prev"
            >
                { prevProjectDetails && renderProjectLink(prevProjectDetails, '←') }
            </ProjectsNav>
            <ProjectsNav
                direction="next"
            >
                { nextProjectDetails && renderProjectLink(nextProjectDetails, '→') }
            </ProjectsNav>
        </TextWrap>
    )
}

ProjectPrevNext.defaultProps = {
    projectsContent: null,
    currentProjectUid: null,
}

ProjectPrevNext.propTypes = {
    projectsContent: PropTypes.array,
    currentProjectUid: PropTypes.string,
}

export default ProjectPrevNext
