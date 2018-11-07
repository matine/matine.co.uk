# matine.co.uk

I'm always rebuilding my portfolio in different ways as a way of learning the latest tools. This site has been rebuilt multiple times. From a humble old Wordpress site, to a Single page React App with functional CSS classes, to Styled Components and Styled System, to being Prismic and Redux managed. But this last iteration I've migrated to make use of Gatsby and GraphQl (with Prismic content).

Note: This [gatsby-starter-portfolio-bella](https://github.com/LekoArts/gatsby-starter-portfolio-bella) project helped me a lot with this latest iteration, to understand how to integrate Gatsby and Prismic with GraphQl.

Currently this project stack is [ReactJs](https://reactjs.org/) and [Gatsby](https://www.gatsbyjs.org) with content from [Prismic](https://prismic.io/) and a tiny amount of [Redux](https://redux.js.org).

## UI styling

All of the UI has been styled with the Styled Components and Styled System.

### Styled Components
Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier! Read more [here](https://www.styled-components.com/).

### Styled System
Design system utilities for styled-components and other css-in-js libraries. 
Add style props that hook into your own theme. Responsive prop values for quickly setting responsive font-size, margin, padding, width, and more. Check the github page [here](https://github.com/jxnblk/styled-system).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

Note: You'll also see a second link: http://localhost:8000/___graphql. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

### `npm run build`

Builds the site for production to the `public` folder.<br>

### `npm lint`

Checks for esLint errors

### `npm lint:fix`

Auto fixes any esLint errors where possible
    
## What's inside?

A quick look at the top-level files and directories you'll see in this Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .eslintrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package-lock.json
    ├── package.json
    ├── README.md

  1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.  
  
  2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.
  
  3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
  
  4.  **`.eslintrc`**: This is a configuration file for [Eslint](https://eslint.org/). Eslint is a tool to help keep the formatting of your code consistent.
  
  5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
  
  6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
  
  8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
    
  9.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**
  
  10.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
  
  11.  **`README.md`**: A text file containing useful reference information about this project.

## Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to the documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
