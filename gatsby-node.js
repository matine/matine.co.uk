const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const pages = await graphql(`
        {
            allPrismicProject {
                edges {
                    node {
                        id
                        uid
                    }
                }
            }
        }
    `)

    const projectTemplate = path.resolve('src/templates/project.jsx')

    pages.data.allPrismicProject.edges.forEach(edge => {
        createPage({
            path: `/${ edge.node.uid }`,
            component: projectTemplate,
            context: {
                uid: edge.node.uid,
            },
        })
    })
}
