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

## Content still to confirm

- Current institution, appointment, and actual master's completion date. The provided CV lists expected graduation in 2024; the site does not assume graduation or ongoing enrollment.
- Current end date for the research project starting in 2023.
- Portrait and updated CV.
- Current patent status and complete publication record.
- The Plant Physiology Journal paper's final year, volume, and pages: the supplied CV cites 2023; publisher search results suggest a later final issue. Keep the CV citation until confirmed.
- Google Scholar metrics: no counts are displayed until verified.

The original `Min Li CV.pdf` is retained. The downloadable copy is byte-identical. Year-only dates in the CV use January 1 for Hugo sorting, while visible CV timelines retain year-only labels. The Frontiers paper's title and publication date were verified against the publisher (26 June 2023).

## GitHub Pages

In the repository, set **Settings → Pages → Source → GitHub Actions**. Push to `main` to run the included build and deploy workflow. The workflow uses the site's actual Pages URL for the production build.

## Attribution

Template and theme code: MIT, © George Cushen (see `LICENSE.md`). Local layout customizations adapted from https://github.com/xzhou98/xzhou98.github.io. Original author's biographical text, publications, photographs, and CV are not included. Personal content is based on Min Li's supplied CV and links.
