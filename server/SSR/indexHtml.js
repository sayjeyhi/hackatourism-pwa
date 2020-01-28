import minifyCss from './utils/minifyCss';
const { PUBLIC_URL, NODE_ENV } = process.env;
const UrlPrefix = NODE_ENV === 'production' ? `/${PUBLIC_URL}` : '';

const prefetchStyleLinks = bundles => {
  const bundleFilePaths = bundles.map(css => `${UrlPrefix}/${css.file}`);
  return bundleFilePaths
    .map(
      cssFilePath => `<link rel="prefetch" as="style" href="${cssFilePath}">`,
    )
    .join('');
};

const cssLinks = bundles => {
  const bundleFilePaths = bundles.map(css => `${UrlPrefix}/${css.file}`);

  return [...bundleFilePaths]
    .map(cssFilePath => `<link rel="stylesheet" href="${cssFilePath}">`)
    .join('');
};

const preloadScripts = bundles => {
  const bundleFilePaths = bundles.map(js => `${UrlPrefix}/${js.file}`);

  return [...bundleFilePaths]
    .map(jsFilePath => `<link rel="preload" as="script" href="${jsFilePath}">`)
    .join('');
};

const jsScripts = bundles => {
  const bundleFilePaths = bundles.map(js => `${UrlPrefix}/${js.file}`);

  return [...bundleFilePaths]
    .map(
      jsFilePath =>
        `<script type="text/javascript" src="${jsFilePath}" defer></script>`,
    )
    .join('');
};

export const indexHtml = ({ helmet, markup, bundles, state, styleTags }) => {
  const htmlAttrs = helmet.htmlAttributes.toString();
  const bodyAttrs = helmet.bodyAttributes.toString();

  const jsFiles = bundles.js || [];
  const cssFiles = bundles.css || [];

  return `<!doctype html>
<html lang="fa" ${htmlAttrs}>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}

    ${preloadScripts(jsFiles)}
    ${prefetchStyleLinks(cssFiles)}
    ${helmet.link.toString()}
    ${cssLinks(cssFiles)}
    ${helmet.style.toString()}

    ${helmet.noscript.toString()}
    ${helmet.script.toString()}
    ${jsScripts(jsFiles)}
    ${minifyCss(styleTags)}
  </head>
  <body ${bodyAttrs}>
    <div id="root">${markup}</div>

    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(state)};
    </script>
  </body>
</html>`;
};
