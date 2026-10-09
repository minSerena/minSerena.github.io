# Min Li — Academic Homepage

Academic website for Min Li, based on the HugoBlox Academic CV template and layout customizations from xzhou98/xzhou98.github.io. Website: https://minSerena.github.io/.

## Preview locally

Requires Hugo Extended (CI pins 0.159.1), Go, Node.js, and pnpm (package.json pins 10.14.0).

```bash
pnpm install
pnpm dev
```

A local Hugo 0.159.1 binary has been prepared in `.tools/hugo` on this machine; the scripts prefer it over the system version. This binary is ignored by Git. Other checkouts should install Hugo Extended 0.159.1.

Open http://localhost:1313. To verify the production build, run `pnpm build`.

## Update content

| Content | File |
| --- | --- |
| Biography, email, social links, education | `data/authors/me.yaml` |
| Homepage sections and CV button | `content/_index.md` |
| Research and education details | `content/experience.md` |
| Publications | `content/publications/<slug>/index.md` |
| Awards | `data/awards.yaml` |
| Downloadable CV | `static/uploads/Min-Li-CV.pdf` |
| Portrait (optional; initials shown until supplied) | `assets/media/authors/me.png` |
| Site identity | `config/_default/params.yaml` |
| Navigation | `config/_default/menus.yaml` |
| Custom styles | `assets/css/hbx/blocks/shared/site/custom.css` |

## Content source and updates

The website now follows `Min Li CV_2026.pdf` supplied on 8 October 2026. It includes current doctoral research, master's research projects, teaching, eight refereed articles, two poster presentations, and the CV's honors and awards. Previously displayed patents, volunteer service, GPA, and undergraduate research projects are no longer displayed. No grant section is included.

`Min Li CV.pdf` and `static/uploads/Min-Li-CV.pdf` are byte-identical copies of the latest supplied CV. Existing GitHub, LinkedIn, and Google Scholar links are retained from the user's earlier instructions. A portrait and verified Scholar metrics can be added later.

Year-only publication dates use January 1 for Hugo sorting; they do not assert an exact publication date. New article titles, authors, and venue details follow the CV. The two previously verified DOI links are retained. Teaching semesters follow the CV, with the Genetics Spring/Summer semester corrected to 2025 per the user's confirmation.

## GitHub Pages

In the repository, set **Settings → Pages → Source → GitHub Actions**. Push to `main` to run the included build and deploy workflow. The workflow uses the site's actual Pages URL for the production build.

## Attribution

Template and theme code: MIT, © George Cushen (see `LICENSE.md`). Local layout customizations adapted from https://github.com/xzhou98/xzhou98.github.io. Original author's biographical text, publications, photographs, and CV are not included. Personal content is based on Min Li's supplied CV and links.

## Google discovery

The homepage uses a descriptive title (Min Li Homepage | Plant Genomics | Wayne State University), research-focused description, canonical URL, and linked Person/ProfilePage structured data. `robots.txt` permits crawling and advertises `sitemap.xml`. These help search engines understand the page; they do not guarantee indexing or ranking for a common name.

After deployment, verify `https://minserena.github.io/` as a URL-prefix property in Google Search Console, submit `sitemap.xml`, and request homepage indexing. Add this homepage URL to your Google Scholar, GitHub, LinkedIn, and university profile where available. Search Console performance reports can then show which name-and-research queries actually lead to the site.
