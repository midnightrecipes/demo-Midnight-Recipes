// Builds sitemap.xml and robots.txt from assets/js/data.js.
// Site address: SITE_URL env var, else the CNAME file (custom domain), else the default below.
const DEFAULT_SITE_URL = 'https://midnightrecipes.com/';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(__dirname, '..', '..');
let base = process.env.SITE_URL || '';
const cname = path.join(root, 'CNAME');
if (!base && fs.existsSync(cname)) base = 'https://' + fs.readFileSync(cname, 'utf8').trim() + '/';
if (!base) base = DEFAULT_SITE_URL;
if (!base.endsWith('/')) base += '/';

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/data.js'), 'utf8'), ctx);
const recipes = ctx.window.MIDNIGHT_RECIPES || [];

const urls = [
  { loc: base },
  { loc: base + 'recipes/index.html' },
  { loc: base + 'pages/usuals.html' },
  { loc: base + 'pages/about.html' },
  { loc: base + 'pages/contact.html' },
];
for (const r of recipes) {
  if (!r.slug) continue;
  urls.push({ loc: base + 'recipes/recipe.html?slug=' + encodeURIComponent(r.slug), lastmod: r.dateAdded });
}
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(u => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n') + '\n</urlset>\n';
fs.writeFileSync(path.join(root, 'sitemap.xml'), xml);
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${base}sitemap.xml\n`);
console.log(`sitemap.xml: ${urls.length} urls (${base})`);
