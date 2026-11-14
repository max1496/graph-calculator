# Graphing Calculator and Math Study Pages

A free, ad-supported website for students: an interactive graphing calculator plus study pages for Algebra 1, Algebra 2, trigonometry and more.

Live site: https://graph-calculator-chi.vercel.app

## What is on the site

| Page | What it does |
| --- | --- |
| `index.html` | Graphing calculator: functions, piecewise, inequalities, implicit curves, tangent lines, pinned points, intersections, share link, image export, history |
| `algebra-1.html`, `algebra-2.html` | Study pages that collect the tools in a sensible order, with book suggestions |
| `parent-functions.html` | The eleven parent functions with domain, range, symmetry and a comparison table |
| `function-transformations.html` | Shift, stretch, reflect and rotate any parent function, with guided practice |
| `geometry-transformations.html` | Translate, reflect, rotate and dilate a shape |
| `trigonometry.html` | Unit circle, special angles, sine and cosine graphs, identities |
| `conic-sections.html` | Circle, ellipse, hyperbola and parabola with foci, vertices and asymptotes |
| `linear-function.html`, `quadratic-function.html`, `regression.html` | Interactive tools with explanations |
| `polynomial-from-roots.html`, `rational-root-theorem.html`, `rational-functions.html`, `descartes-rule-of-signs.html`, `intermediate-value-theorem.html` | Algebra 2 tools |
| `about.html`, `privacy.html` | About and privacy policy |
| `sitemap.xml`, `robots.txt` | Search engine files |

## How it is built

- Plain HTML, CSS and JavaScript. No framework and no build step.
- Graphs are drawn on a 2D canvas. Everything is computed in the browser.
- Hosted on Vercel. Every push to the main branch redeploys the site.
- Vercel Web Analytics is loaded with `/_vercel/insights/script.js`.
- Dark mode uses CSS variables and `prefers-color-scheme`.
- The user's history is kept in the browser's localStorage only. Nothing is sent to a server.

## Updating the site

1. Replace the changed files in this repository (upload the whole set to avoid filename mix-ups).
2. Write what changed in the commit message and add a line to `CHANGELOG.md`.
3. After adding a new page, add it to `sitemap.xml` and resubmit the sitemap in Google Search Console.

## Files

`about.html`, `algebra-1.html`, `algebra-2.html`, `conic-sections.html`, `descartes-rule-of-signs.html`, `function-transformations.html`, `geometry-transformations.html`, `index.html`, `intermediate-value-theorem.html`, `linear-function.html`, `parent-functions.html`, `polynomial-from-roots.html`, `privacy.html`, `quadratic-function.html`, `rational-functions.html`, `rational-root-theorem.html`, `regression.html`, `trigonometry.html`, `sitemap.xml`, `robots.txt`


New pages: precalculus.html, functions-and-inverses.html, continuity-and-derivatives.html, polynomial-degrees.html
