import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import config from '../../config/website';
import { Text, Container } from '../components/ui';

const ProjectTemplate = ({ data: { prismicProject: caseNode } }) => {
    const { data } = caseNode;
    return (
        <Container>
            <Helmet title={`${data.title.text} | ${config.siteTitle}`} />
            <SEO caseNode={ caseNode } casePath={ caseNode.uid } caseSEO />
            <Text>{ data.project_title.text }</Text>
        </Container>
    );
};

export default ProjectTemplate;

ProjectTemplate.propTypes = {
    data: PropTypes.shape({
        prismicProject: PropTypes.object.isRequired,
    }).isRequired,
};

export const pageQuery = graphql`
    query ProjectBySlug($uid: String!) {
        prismicProject(uid: { eq: $uid }) {
            uid
            first_publication_date
            last_publication_date
            data {
                project_title {
                    text
                }
            }
        }
    }
`;
