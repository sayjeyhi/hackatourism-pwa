import csso from 'csso';

function minifyCss(styleTags) {
  const mini = csso.minify(styleTags);
  return `<style>${mini.css}</style>`;
}

export default minifyCss;
