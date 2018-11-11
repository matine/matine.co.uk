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
            path: `/work/${ edge.node.uid }`,
            component: projectTemplate,
            context: {
                uid: edge.node.uid,
            },
        })
    })
}

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    WEATHER_API_KEY: JSON.stringify(process.env.WEATHER_API_KEY)
                } })
        ],
    })
}
