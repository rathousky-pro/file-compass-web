# File Compass website

Bilingual static website for GitHub Pages. Application sources are maintained separately. No dependencies, external fonts, analytics or build service required.

- `index.html`: English. `cs.html`: Czech. Both work without JavaScript.
- `build.mjs`: shared template and translations. Run `node build.mjs` after editing.
- `style.css`: responsive design with keyboard focus and reduced-motion support.
- `privacy.html` and `privacy-cs.html`: privacy policy. Retain Google verification metadata in the homepage.
- `assets/`: application branding and annotated user-guide screenshots. The hero is labeled as a workflow illustration.
- `releases.json`: set `zip` and `exe` to public HTTPS asset URLs when packages are published. Null keeps the respective button disabled. Update `version` and version text in `build.mjs` for a new release. Never publish local runtime/configuration data.

Preview: `node preview.mjs`, then open http://127.0.0.1:4173. Stop with Ctrl+C.

Deploy the static root of `main` through GitHub Pages. Keep `.nojekyll`. Commit generated HTML alongside sources. `build.mjs` and `preview.mjs` are development utilities, not browser scripts.

The small download counter in both languages sums ZIP and EXE release-asset download counts across all releases of this public repository using the GitHub API. Publish the packages as releases here and point `releases.json` at those assets. GitHub source-code archives and externally hosted files are not counted. API errors display an unavailable state; no visitor analytics or click tracking is used.
