# File Compass website

Bilingual static website for GitHub Pages. Application sources are maintained separately. No dependencies, external fonts, analytics or build service required.

- `index.html`: English. `cs.html`: Czech. Both work without JavaScript.
- `build.mjs`: shared template and translations. Run `node build.mjs` after editing.
- `style.css`: responsive design with keyboard focus and reduced-motion support.
- `privacy.html` and `privacy-cs.html`: privacy policy. Retain Google verification metadata in the homepage.
- `assets/`: application branding and application screenshots with synthetic demonstration data. The hero is an actual application screenshot.
- `releases.json`: set `zip` and `exe` to public HTTPS asset URLs when packages are published. Null keeps the respective button disabled. Update `version` and version text in `build.mjs` for a new release. Never publish local runtime/configuration data.

Preview: `node preview.mjs`, then open http://127.0.0.1:4173. Stop with Ctrl+C.

Deploy the static root of `main` through GitHub Pages. Keep `.nojekyll`. Commit generated HTML alongside sources. `build.mjs` and `preview.mjs` are development utilities, not browser scripts.

The small download counter in both languages sums ZIP and EXE release-asset download counts across all releases of this public repository using the GitHub API. Publish the packages as releases here and point `releases.json` at those assets. GitHub source-code archives and externally hosted files are not counted. API errors display an unavailable state; no visitor analytics or click tracking is used.

## Screenshot gallery

The hero and gallery use current application renders captured on 1 November 2026, with 28 scenes in each language (56 PNGs). Coverage includes panels, copy/progress/conflicts, deletion, archive creation/security, image/video previews/CSV/editor, image/audio conversion, image geometry/audio speed, metadata, analyzer, SMART, synchronization, rename, search, duplicates, network/cloud profiles, configuration and operation history.

All files were generated specifically for these screenshots. Network and cloud profiles use fictional names and the reserved `example.test` domain; no connection, authorization, real hardware scan or destructive operation was performed. SMART values and transfer-progress figures are synthetic fixtures. Local fixture paths are replaced by `C:\Examples` in the presentation, and visible text is audited before export. No user files, personal paths or credentials are published. The standalone PNGs are real WPF window renders without annotations or invented controls. `assets/screenshots/manifest.json` records image dimensions and SHA-256 checksums.

The capture harness is `source/src/WebGalleryScreenshots.cs` in the application workspace, compiled only for development tests (`--web-gallery-screenshots-test <output>`). Its profile, visible-text audit files and demo input files stay outside this website repository. The website publishes only the rendered PNGs and the non-sensitive manifest.

Gallery categories are optional JavaScript filters. All cards and original image links remain available without JavaScript; the enlarged-image dialog supports Escape. Both language pages must be regenerated after changes.
Edit gallery.mjs for gallery text and gallery.css for layout. gallery.js adds a native dialog with keyboard dismissal; image links work without JavaScript.
