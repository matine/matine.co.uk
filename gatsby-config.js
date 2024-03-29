require('dotenv').config({
    path: `.env.${ process.env.NODE_ENV }`,
})
const config = require('./config/website')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
        siteUrl: config.siteUrl + pathPrefix,
        title: config.siteTitle,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${ __dirname }/src/images/`,
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: 'matine',
                accessToken: `${ process.env.PRISMIC_API_KEY }`,
                customTypesApiToken: `${ process.env.PRISMIC_CUSTOM_TYPES_KEY }`,
                linkResolver: (doc) => `/${ doc.uid }`,
                htmlSerializer: (type, element, content, children) => {
                    // Return HTML for an piece of content.
                },
                lang: '*',
            }
        },
        'gatsby-plugin-lodash',
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-plugin-styled-components`,
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: config.siteTitle,
                short_name: config.siteTitleAlt,
                description: config.siteDescription,
                start_url: config.pathPrefix,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: 'fullscreen',
                icons: [
                    {
                        src: '/favicons/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/favicons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        },
        /* Must be placed at the end */
        'gatsby-plugin-offline',
        'gatsby-plugin-netlify',
    ],
}
