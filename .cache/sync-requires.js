// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-jsx": preferDefault(require("/Users/matinechabrier/Sites/matine.co.uk/src/templates/project.jsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/matinechabrier/Sites/matine.co.uk/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/Users/matinechabrier/Sites/matine.co.uk/src/pages/404.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/matinechabrier/Sites/matine.co.uk/src/pages/index.jsx")),
  "component---src-pages-links-jsx": preferDefault(require("/Users/matinechabrier/Sites/matine.co.uk/src/pages/links.jsx"))
}

