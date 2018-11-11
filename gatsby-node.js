const path = require('path')
const webpack = require('webpack')

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

exports.modifyWebpackConfig = function (config) {
    config.merge({
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    BUILD_ENV: JSON.stringify(process.env.BUILD_ENV ? process.env.BUILD_ENV : 'test')
                } })
        ],
    })
    return config
}
