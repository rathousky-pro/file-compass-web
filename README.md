# File Compass website

Bilingual static website for GitHub Pages. Application sources are maintained separately. No dependencies, external fonts, analytics or build service required.

- `index.html`: English. `cs.html`: Czech. Both work without JavaScript.
- `build.mjs`: shared template and translations. Run `node build.mjs` after editing.
- `style.css`: responsive design with keyboard focus and reduced-motion support.
- `privacy.html` and `privacy-cs.html`: privacy policy. Retain Google verification metadata in the homepage.
- `assets/`: application branding and application screenshots with synthetic demonstration data. The hero is an actual application screenshot.
- `releases.json`: HTTPS asset URLs, version/channel, release repository, access mode, release notes and checksum link. Null keeps the respective format disabled. Run `node build.mjs` after changes: download links and access notices are generated into both pages and work without JavaScript. Never publish local runtime/configuration data.

Preview: `node preview.mjs`, then open http://127.0.0.1:4173. Stop with Ctrl+C.

Deploy the static root of `main` through GitHub Pages. Keep `.nojekyll`. Commit generated HTML alongside sources. `build.mjs` and `preview.mjs` are development utilities, not browser scripts.

The download counter sums ZIP and EXE release-asset downloads from the repository configured in `releases.json`. Source-code archives are not counted. For restricted/private downloads the counter explicitly says that counts are not public and makes no GitHub API request. Public API errors display an unavailable state; no visitor analytics or click tracking is used.

The prepared download is the unsigned MIT-licensed 0.9.5 beta / build 20261104.78 from the public website release repository. This local change is pending publication: upload and verify the ZIP and checksum before pushing the download links. The Windows installer remains unavailable. Third-party components retain their original licenses; MIT is not a digital signature. Application source and license links are shown in both language versions.

## Screenshot gallery

The hero and gallery use current application renders captured on 4 November 2026, with 28 scenes in each language (56 PNGs). Coverage includes panels, copy/progress/conflicts, deletion, archive creation/security, image/video previews/CSV/editor, image/audio conversion, image geometry/audio speed, metadata, analyzer, SMART, synchronization, rename, search, duplicates, network/cloud profiles, configuration and operation history.

All files were generated specifically for these screenshots. Network and cloud profiles use fictional names and the reserved `example.test` domain; no connection, authorization, real hardware scan or destructive operation was performed. SMART values and transfer-progress figures are synthetic fixtures. Local fixture paths are replaced by `C:\Examples` in the presentation, and visible text is audited before export. No user files, personal paths or credentials are published. The standalone PNGs are real WPF window renders without annotations or invented controls. `assets/screenshots/manifest.json` records image dimensions and SHA-256 checksums.

The capture harness is `source/src/WebGalleryScreenshots.cs` in the application workspace, compiled only for development tests (`--web-gallery-screenshots-test <output>`). Its profile, visible-text audit files and demo input files stay outside this website repository. The website publishes only the rendered PNGs and the non-sensitive manifest.

Gallery categories are optional JavaScript filters. All cards and original image links remain available without JavaScript; the enlarged-image dialog supports Escape. Both language pages must be regenerated after changes.
Edit gallery.mjs for gallery text and gallery.css for layout. gallery.js adds a native dialog with keyboard dismissal; image links work without JavaScript.
