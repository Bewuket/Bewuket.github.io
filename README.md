# Bewuket Tefera — academic research website

A responsive, mobile-friendly, no-build static website, ready to publish with GitHub Pages. It uses HTML, CSS, and a small JavaScript file. All research project artwork is conceptual illustration, **not scientific results**.

## Files
- `index.html` — edit page text, projects, publications, institutional links, email.
- `styles.css` — edit colors, typography, layout.
- `script.js` — mobile navigation, research filters, copyright year.
- `assets/favicon.svg` — favicon.
- `files/` — place your public CV, conference posters, figures and other downloads here.

## Preview the website
1. Unzip the website.
2. Double-click `index.html` in a browser. Most functions will work immediately. Alternatively run `python -m http.server 8000` from inside the website folder and visit `http://localhost:8000`.

## Publish it for free with GitHub Pages
1. Sign up or sign in at https://github.com .
2. Create a **public** repository named `YOUR_GITHUB_USERNAME.github.io` (replace with your own actual GitHub username).
3. Upload `index.html`, `styles.css`, `script.js`, and the `assets/` and `files/` folders to the root of this repository and commit.
4. Go to **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, and save.
5. Your site will publish at `https://YOUR_GITHUB_USERNAME.github.io/` after GitHub finishes deployment. You can add a purchased custom domain later in Settings → Pages.

GitHub instructions: https://docs.github.com/en/pages/quickstart

## Add your research outputs
- Images: put your own PNG/JPG/SVG maps in `assets/` and replace the conceptual SVG artwork in the corresponding `project-illustration` block in `index.html`. For example, `<img src="assets/groundwater-map.png" alt="Map of monitoring wells in the Eerste River catchment">`. Add CSS `.project-illustration img {width:100%;height:100%;object-fit:cover}`.
- PDFs: put permitted PDF files in `files/` and link them as `<a href="files/Your_Poster.pdf" target="_blank">View poster</a>`.
- Datasets or code: link to a public Zenodo/OSF/GitHub repository or institutional repository instead of uploading very large datasets to GitHub Pages.
- CV: add your **current** CV as `files/Bewuket_Tefera_CV.pdf`. Replace the CV request button's `mailto:` target with `files/Bewuket_Tefera_CV.pdf` and add a `download` attribute if you wish.
- Interactive maps: publish a Leaflet or Folium map as a separate HTML page in the repository and link to it from a project card. Confirm data and basemap licensing before publishing.
- If adding new project cards, copy an existing `<article class="project-card" data-tags="..."> ... </article>` block. Available filters are `hydrology`, `geoai`, `remote`, and `environment`.

## Check before publishing
- Update your institutional affiliation and role whenever they change.
- Review project descriptions and publication status; *ongoing research* is not presented as published.
- Add a headshot only if you choose to (none is included).
- Verify links, up-to-date CV, authorized open-access article versions, data permissions and co-author approval where relevant.
- Add your real GitHub, ORCID, Google Scholar and LinkedIn URLs once you have verified them.
- Consider a custom domain later; the GitHub Pages address is sufficient to begin with.

## Public sources used to verify selected content
- UF Geography profile: https://geog.ufl.edu/directory/bewuket-tefera/
- Journal of Environmental Management paper: https://doi.org/10.1016/j.jenvman.2025.127572
- Ecological Informatics paper: https://doi.org/10.1016/j.ecoinf.2025.103279
- Frontiers in Remote Sensing paper: https://doi.org/10.3389/frsen.2024.1374862
- Chemosphere paper: https://doi.org/10.1016/j.chemosphere.2022.136480

This is a starter portfolio and should be reviewed and customized before going live.
