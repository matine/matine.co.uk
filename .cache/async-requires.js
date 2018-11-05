// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-project-jsx": () => import("/Users/matinechabrier/Sites/matine.co.uk/src/templates/project.jsx" /* webpackChunkName: "component---src-templates-project-jsx" */),
  "component---cache-dev-404-page-js": () => import("/Users/matinechabrier/Sites/matine.co.uk/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-jsx": () => import("/Users/matinechabrier/Sites/matine.co.uk/src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-index-jsx": () => import("/Users/matinechabrier/Sites/matine.co.uk/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-links-jsx": () => import("/Users/matinechabrier/Sites/matine.co.uk/src/pages/links.jsx" /* webpackChunkName: "component---src-pages-links-jsx" */)
}

exports.data = () => import("/Users/matinechabrier/Sites/matine.co.uk/.cache/data.json")

