fetch('releases.json').then(r => { if (!r.ok) throw new Error('Release unavailable'); return r.json(); }).then(release => {
  for (const format of ['zip', 'exe']) {
    const value = release[format];
    if (!value) continue;
    const url = new URL(value, location.href);
    if (url.protocol !== 'https:') continue;
    const button = document.querySelector(`[data-download="${format}"]`);
    const link = document.createElement('a');
    link.className = 'button primary'; link.href = url.href;
    link.textContent = document.documentElement.lang === 'cs' ? `Stáhnout ${format.toUpperCase()} ↓` : `Download ${format.toUpperCase()} ↓`;
    button.replaceWith(link);
    document.querySelector(`[data-status="${format}"]`).textContent = release.version;
  }
}).catch(() => { /* Keep honest, disabled availability states when offline. */ });

// GitHub counts completed release-asset downloads across all published versions.
// No visitor tracking or click-based estimates are used.
async function updateDownloadCount() {
  const totalElement = document.querySelector('[data-download-total]');
  if (!totalElement) return;
  const czech = document.documentElement.lang === 'cs';
  try {
    let total = 0;
    for (let page = 1; ; page++) {
      const response = await fetch('https://api.github.com/repos/rathousky-pro/file-compass-web/releases?per_page=100&page=' + page, {headers: {Accept: 'application/vnd.github+json'}});
      if (!response.ok) throw new Error('Download count unavailable');
      const releases = await response.json();
      if (!Array.isArray(releases)) throw new Error('Invalid releases');
      for (const release of releases) {
        for (const asset of release.assets || []) {
          if (/\.(zip|exe)$/i.test(asset.name) && Number.isSafeInteger(asset.download_count) && asset.download_count >= 0) {
            total += asset.download_count;
          }
        }
      }
      if (releases.length < 100) break;
    }
    totalElement.textContent = new Intl.NumberFormat(czech ? 'cs-CZ' : 'en-US').format(total);
    totalElement.title = czech ? 'Stažení ZIP a EXE ze všech vydání na GitHubu' : 'ZIP and EXE downloads across all GitHub releases';
  } catch {
    totalElement.textContent = czech ? 'nedostupné' : 'unavailable';
  }
}
updateDownloadCount();
