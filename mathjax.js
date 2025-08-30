const MathJax = require('mathjax');
const fs = require('fs');

const formuleWillans =
"p_n = 1 + \\sum_{i=1}^{2^n} \\left\\lfloor \\left[ \\frac{n}{\\sum_{j=1}^{i} \\left\\lfloor \\cos^2\\left( \\pi \\frac{(j-1)!+1}{j} \\right) \\right\\rfloor } \\right]^{1/n} \\right\\rfloor";

MathJax.init({
  loader: { load: ['input/tex', 'output/svg'] }
}).then(() => {
  const svg = MathJax.tex2svg(formuleWillans, {display: true});
  fs.writeFileSync('output.svg', MathJax.startup.adaptor.outerHTML(svg));
  console.log('SVG généré dans output.svg');
}).catch((err) => console.log(err.message));
